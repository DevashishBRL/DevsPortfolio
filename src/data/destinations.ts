/**
 * destinations.ts
 * 
 * Bridges the content-validated collection entries from src/content/destinations/
 * with presentation-layer 3D camera coordinates and scene geometry.
 * 
 * The destination titles, categories, location labels, specialties, descriptions,
 * companion greetings, and actions are validated via src/content/config.ts and
 * editable in Pages CMS.
 */

export interface DestinationRenderData {
  id: string;
  num: string;
  locationLabel: string;
  category: string;
  title: string;
  specialty: string;
  description: string;
  companionGreeting: string;
  companionMood?: 'happy' | 'observing' | 'neutral';
  actionLabel: string;
  actionHref: string; // resolved with base
  themeColor: string;
  // Presentation-layer 3D camera pose parameters
  targetPos: [number, number, number];
  camPos: [number, number, number];
  zoom: number;
  duration?: number;
}

// Fixed 3D presentation coordinates for isometric terrarium composition
export const DESTINATION_CAMERA_POSES: Record<
  string,
  {
    targetPos: [number, number, number];
    camPos: [number, number, number];
    zoom: number;
    duration?: number;
  }
> = {
  lab: {
    targetPos: [-11, 3.5, -11],
    camPos: [10, 26, 10],
    zoom: 1.55,
    duration: 1.3,
  },
  foundry: {
    targetPos: [13, 4.0, -11.5],
    camPos: [33, 27, 8],
    zoom: 1.48,
    duration: 1.3,
  },
  observatory: {
    targetPos: [12, 3.2, 12],
    camPos: [32, 24, 32],
    zoom: 1.62,
    duration: 1.3,
  },
  yard: {
    targetPos: [-12, 2.8, 12],
    camPos: [8, 22, 32],
    zoom: 1.52,
    duration: 1.3,
  },
  commons: {
    targetPos: [0, 2.2, 0],
    camPos: [26, 32, 26],
    zoom: 1.35,
    duration: 1.1,
  },
  outlook: {
    targetPos: [0, 6.5, -15.5],
    camPos: [22, 29, 6],
    zoom: 1.45,
    duration: 1.4,
  },
};

// Raw content records matching src/content/destinations/*.json
import labData from '../content/destinations/lab.json';
import foundryData from '../content/destinations/foundry.json';
import observatoryData from '../content/destinations/observatory.json';
import yardData from '../content/destinations/yard.json';
import commonsData from '../content/destinations/commons.json';
import outlookData from '../content/destinations/outlook.json';

const contentDestinations = [
  labData,
  foundryData,
  observatoryData,
  yardData,
  commonsData,
  outlookData,
].sort((a, b) => a.order - b.order);

export function getDestinations(base: string): DestinationRenderData[] {
  return contentDestinations.map((dest) => {
    const pose = DESTINATION_CAMERA_POSES[dest.id] || {
      targetPos: [0, 1.2, 0] as [number, number, number],
      camPos: [38, 44, 38] as [number, number, number],
      zoom: 1.35,
      duration: 1.2,
    };

    return {
      id: dest.id,
      num: dest.num,
      locationLabel: dest.locationLabel,
      category: dest.category,
      title: dest.title,
      specialty: dest.specialty,
      description: dest.description,
      companionGreeting: dest.companionGreeting,
      companionMood: dest.companionMood as 'happy' | 'observing' | 'neutral',
      actionLabel: dest.actionLabel,
      actionHref: `${base}${dest.actionPath}`,
      themeColor: dest.themeColor,
      targetPos: pose.targetPos,
      camPos: pose.camPos,
      zoom: pose.zoom,
      duration: pose.duration,
    };
  });
}
