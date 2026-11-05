import * as THREE from 'three';

// Create a reusable soft circular radial glow texture programmatically via canvas
export function createGlowTexture(colorHex: string, innerAlpha = 0.9, outerAlpha = 0.0): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, colorHex);
    // Soft mid-decay
    gradient.addColorStop(0.35, colorHex);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

// Create an additive glow sprite mesh
export function createGlowSprite(
  colorHex: number,
  size: number,
  opacity = 0.65
): THREE.Sprite {
  const c = new THREE.Color(colorHex);
  const colStr = `rgba(${Math.round(c.r * 255)}, ${Math.round(c.g * 255)}, ${Math.round(c.b * 255)}, ${opacity})`;
  const texture = createGlowTexture(colStr);
  
  const spriteMat = new THREE.SpriteMaterial({
    map: texture,
    color: colorHex,
    transparent: true,
    opacity: opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(size, size, 1.0);
  return sprite;
}

// Create a ground illumination contact disc (soft decal projected onto horizontal surfaces)
export function createGroundSpill(
  colorHex: number,
  radius: number,
  opacity = 0.35
): THREE.Mesh {
  const c = new THREE.Color(colorHex);
  const colStr = `rgba(${Math.round(c.r * 255)}, ${Math.round(c.g * 255)}, ${Math.round(c.b * 255)}, ${opacity})`;
  const texture = createGlowTexture(colStr);

  const geo = new THREE.PlaneGeometry(radius * 2, radius * 2);
  geo.rotateX(-Math.PI / 2);

  const mat = new THREE.MeshBasicMaterial({
    map: texture,
    color: colorHex,
    transparent: true,
    opacity: opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -1,
  });

  const mesh = new THREE.Mesh(geo, mat);
  return mesh;
}

