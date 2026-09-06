/**
 * Global Technology & Talent Network — the four hubs named in the company profile.
 * `coords` are percentage positions used only to place markers on the decorative
 * map graphic; they are a layout aid, not geographic data.
 */
export const LOCATIONS = [
  {
    id: 'dubai',
    city: 'Dubai',
    market: 'UAE',
    region: 'United Arab Emirates',
    role: 'Head Office & Regional Command Center',
    contribution:
      'Sets organizational direction and coordinates technology delivery and training standards across all hubs, while serving as the primary gateway to Middle Eastern and international markets.',
    isHeadOffice: true,
    coords: { x: 26, y: 42 },
  },
  {
    id: 'chennai',
    city: 'Chennai',
    market: 'India',
    region: 'Tamil Nadu, India',
    role: 'Software Engineering Hub',
    contribution:
      'Anchors core software and application development work, supplying engineering depth to client projects and technical training programs alike.',
    isHeadOffice: false,
    coords: { x: 68, y: 62 },
  },
  {
    id: 'bangalore',
    city: 'Bangalore',
    market: 'India',
    region: 'Karnataka, India',
    role: 'Emerging Technology & Innovation Hub',
    contribution:
      "Focuses on advanced and emerging technology domains, feeding new capability and technical currency into the wider organization's project and training pipelines.",
    isHeadOffice: false,
    coords: { x: 61, y: 57 },
  },
  {
    id: 'kochi',
    city: 'Kochi',
    market: 'India',
    region: 'Kerala, India',
    role: 'Talent Development & Training Hub',
    contribution:
      'Concentrates on professional development and skill-building programs, preparing industry-ready talent that supports both learner outcomes and client-facing project teams.',
    isHeadOffice: false,
    coords: { x: 57, y: 72 },
  },
];

/** Connection lines drawn between hubs on the map graphic. */
export const LOCATION_LINKS = [
  ['dubai', 'chennai'],
  ['dubai', 'bangalore'],
  ['dubai', 'kochi'],
  ['chennai', 'bangalore'],
  ['bangalore', 'kochi'],
];
