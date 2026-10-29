/**
 * rtsCameraController.ts
 * 
 * Guided RTS-Style Architectural Exploration Camera Controller for Three.js.
 * Manages smooth spatial travel, elevation/distance adjustments, destination framing,
 * safe transition interruptions, and overview return behavior.
 */

import * as THREE from 'three';

export type CameraState = 'overview' | 'travelling' | 'focused' | 'returning';

export interface DestinationCameraPose {
  id: string;
  target: THREE.Vector3;
  camPos: THREE.Vector3;
  zoom: number;
  duration?: number; // seconds
  framingOffset?: THREE.Vector2; // horizontal/vertical framing offset for panels
}

export interface CameraPoseSnapshot {
  position: THREE.Vector3;
  lookAt: THREE.Vector3;
  zoom: number;
}

// ── Destination Camera Configurations (Derived from actual scene geometry) ──
export const DESTINATION_CAMERA_CONFIGS: Record<string, DestinationCameraPose> = {
  // District 01: The Lab (NW Plateau: [-12, 2.2, -12])
  // Frames the high-bay workshop, cantilevered glass bay, and robot arm test pedestal
  lab: {
    id: 'lab',
    target: new THREE.Vector3(-11, 3.5, -11),
    camPos: new THREE.Vector3(10, 26, 10), // position relative to world: (-12 + 22, 2.2 + 23.8, -12 + 22)
    zoom: 1.55,
    duration: 1.3,
  },

  // District 02: The Foundry (East Tower: [13, 1.4, -12])
  // Highlights the multi-tiered studio tower, cantilevered cyan glass studio, and communications mast
  foundry: {
    id: 'foundry',
    target: new THREE.Vector3(13, 4.0, -11.5),
    camPos: new THREE.Vector3(33, 27, 8),
    zoom: 1.48,
    duration: 1.3,
  },

  // District 03: The Observatory (Southeast Garden Terrace: [12, 1.0, 12])
  // Displays the octagonal rotunda, terracotta eaves, celestial dome, and visual thinking easel
  observatory: {
    id: 'observatory',
    target: new THREE.Vector3(12, 3.2, 12),
    camPos: new THREE.Vector3(32, 24, 32),
    zoom: 1.62,
    duration: 1.3,
  },

  // District 04: The Yard (Southwest Basin: [-12, 0.8, 12])
  // Captures the barrel-vaulted industrial hangar, CNC/3D printer gantry, and material crates
  yard: {
    id: 'yard',
    target: new THREE.Vector3(-12, 2.8, 12),
    camPos: new THREE.Vector3(8, 22, 32),
    zoom: 1.52,
    duration: 1.3,
  },

  // District 05: The Commons (Central Quad: [0, 1.2, 0])
  // Frames the concentric agora, reflective pond, geometric totem pillar, and courtyard benches
  commons: {
    id: 'commons',
    target: new THREE.Vector3(0, 2.2, 0),
    camPos: new THREE.Vector3(26, 32, 26),
    zoom: 1.35,
    duration: 1.1,
  },

  // District 06: The Outlook (North Rocky Spire: [0, 3.8, -16])
  // Captures the rocky pinnacle, masonry tower, timber viewing deck, and rose horizon beacon
  outlook: {
    id: 'outlook',
    target: new THREE.Vector3(0, 6.5, -15.5),
    camPos: new THREE.Vector3(22, 29, 6),
    zoom: 1.45,
    duration: 1.4,
  },
};

export class RTSCameraController {
  private camera: THREE.OrthographicCamera;
  private state: CameraState = 'overview';
  private currentDestId: string | null = null;

  // Overview base reference
  private readonly overviewPose: DestinationCameraPose = {
    id: 'overview',
    target: new THREE.Vector3(0, 1.2, 0),
    camPos: new THREE.Vector3(38, 44, 38),
    zoom: 1.0,
    duration: 1.2,
  };

  // Interpolation vectors
  private startPos = new THREE.Vector3();
  private targetPos = new THREE.Vector3();
  private startLookAt = new THREE.Vector3();
  private targetLookAt = new THREE.Vector3();
  private currentLookAt = new THREE.Vector3();
  private startZoom = 1.0;
  private targetZoom = 1.0;

  // Arc altitude boost for natural RTS flight
  private arcHeight = 0;

  // Transition parameters
  private progress = 1.0;
  private duration = 1.2;
  private onArrivalCallback: ((destId: string | null) => void) | null = null;

  constructor(camera: THREE.OrthographicCamera) {
    this.camera = camera;
    this.currentLookAt.copy(this.overviewPose.target);
    this.resetToOverviewInstant();
  }

  /**
   * Instantly initializes camera to overview with zero transition delay
   */
  public resetToOverviewInstant(): void {
    this.state = 'overview';
    this.currentDestId = null;
    this.progress = 1.0;
    this.camera.position.copy(this.overviewPose.camPos);
    this.camera.zoom = this.overviewPose.zoom;
    this.camera.updateProjectionMatrix();
    this.currentLookAt.copy(this.overviewPose.target);
    this.camera.lookAt(this.currentLookAt);
  }

  /**
   * Returns the current camera controller state
   */
  public getState(): CameraState {
    return this.state;
  }

  /**
   * Returns the currently focused destination id (or null if overview)
   */
  public getCurrentDestinationId(): string | null {
    return this.currentDestId;
  }

  /**
   * Initiates travel to a specified destination configuration
   */
  public travelToDestination(
    destId: string,
    onArrival?: (destId: string | null) => void
  ): boolean {
    const config = DESTINATION_CAMERA_CONFIGS[destId];
    if (!config) return false;

    // Check reduced-motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      this.currentDestId = destId;
      this.state = 'focused';
      this.camera.position.copy(config.camPos);
      this.currentLookAt.copy(config.target);
      this.camera.zoom = config.zoom;
      this.camera.updateProjectionMatrix();
      this.camera.lookAt(this.currentLookAt);
      if (onArrival) onArrival(destId);
      return true;
    }

    // Capture instantaneous camera pose to allow seamless interruption
    this.snapshotCurrentPose();

    this.currentDestId = destId;
    this.state = 'travelling';
    this.targetPos.copy(config.camPos);
    this.targetLookAt.copy(config.target);
    this.targetZoom = config.zoom;
    this.duration = config.duration || 1.2;
    this.progress = 0;
    this.onArrivalCallback = onArrival || null;

    // Calculate flight arc height: long distances get a gentle loft above intervening terrain
    const travelDist = this.startPos.distanceTo(this.targetPos);
    this.arcHeight = Math.min(Math.max(travelDist * 0.12, 1.5), 5.0);

    return true;
  }

  /**
   * Smoothly returns camera to the composed campus overview
   */
  public returnToOverview(onArrival?: () => void): void {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      this.resetToOverviewInstant();
      if (onArrival) onArrival();
      return;
    }

    this.snapshotCurrentPose();

    this.currentDestId = null;
    this.state = 'returning';
    this.targetPos.copy(this.overviewPose.camPos);
    this.targetLookAt.copy(this.overviewPose.target);
    this.targetZoom = this.overviewPose.zoom;
    this.duration = this.overviewPose.duration || 1.2;
    this.progress = 0;
    this.onArrivalCallback = onArrival ? () => onArrival() : null;

    const travelDist = this.startPos.distanceTo(this.targetPos);
    this.arcHeight = Math.min(Math.max(travelDist * 0.1, 1.0), 4.0);
  }

  /**
   * Captures the live camera state as the new transition origin
   */
  private snapshotCurrentPose(): void {
    this.startPos.copy(this.camera.position);
    this.startLookAt.copy(this.currentLookAt);
    this.startZoom = this.camera.zoom;
  }

  /**
   * Updates camera movement. Call every animation frame in the render loop.
   */
  public update(delta: number): void {
    if (this.state !== 'travelling' && this.state !== 'returning') {
      return;
    }

    // Advance progress with safe bounded rate
    const step = delta / Math.max(this.duration, 0.1);
    this.progress = Math.min(this.progress + step, 1.0);

    // Smooth cubic ease-in-out curve
    const t = this.progress * this.progress * (3 - 2 * this.progress);

    // 1. Position interpolation with mid-flight arc
    this.camera.position.lerpVectors(this.startPos, this.targetPos, t);
    if (this.arcHeight > 0) {
      // Parabolic arc: 4 * t * (1 - t) peaks at t = 0.5
      const arc = 4 * t * (1 - t) * this.arcHeight;
      this.camera.position.y += arc;
    }

    // 2. Look-at target interpolation
    this.currentLookAt.lerpVectors(this.startLookAt, this.targetLookAt, t);
    this.camera.lookAt(this.currentLookAt);

    // 3. Zoom interpolation
    const newZoom = THREE.MathUtils.lerp(this.startZoom, this.targetZoom, t);
    if (Math.abs(this.camera.zoom - newZoom) > 0.001) {
      this.camera.zoom = newZoom;
      this.camera.updateProjectionMatrix();
    }

    // 4. Arrival detection
    if (this.progress >= 1.0) {
      this.camera.position.copy(this.targetPos);
      this.camera.zoom = this.targetZoom;
      this.camera.updateProjectionMatrix();
      this.currentLookAt.copy(this.targetLookAt);
      this.camera.lookAt(this.currentLookAt);

      const arrivedDest = this.currentDestId;
      this.state = this.currentDestId ? 'focused' : 'overview';

      if (this.onArrivalCallback) {
        const callback = this.onArrivalCallback;
        this.onArrivalCallback = null;
        callback(arrivedDest);
      }
    }
  }

  /**
   * Supports responsive viewport resize and aspect ratio adjustments
   */
  public handleResize(width: number, height: number, frustumSize = 56): void {
    const aspect = width / height;
    this.camera.left = (-frustumSize * aspect) / 2;
    this.camera.right = (frustumSize * aspect) / 2;
    this.camera.top = frustumSize / 2;
    this.camera.bottom = -frustumSize / 2;
    this.camera.updateProjectionMatrix();
  }
}

