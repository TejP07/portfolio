/* ✏️ EDIT: Add/remove skills and tools below */

export interface SkillGroup {
  group: string
  skills: string[]
}

export interface ToolGroup {
  group: string
  tools: string[]
}

/* ─── SKILLS by category ───────────────────── */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    group: 'Languages',
    skills: ['TypeScript', 'Python', 'C++', 'C#', 'SQL', 'Go', 'GDScript', 'MATLAB'],
  },
  {
    group: 'Web & Backend',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'REST APIs'],
  },
  {
    group: 'Game Development',
    skills: ['Unity', 'Godot', 'Game Design', 'Tilemap Systems', 'Procedural Generation', 'Shaders'],
  },
  {
    group: '3D & Digital Art',
    skills: ['Blender', 'ZBrush', 'Hard Surface Modeling', 'UV Unwrapping', 'PBR Texturing', 'Rigging'],
  },
  {
    group: '2D & Motion',
    skills: ['Photoshop', 'Illustrator', 'After Effects', 'Figma', 'Procreate', 'Motion Graphics'],
  },
  {
    group: 'GIS & Spatial',
    skills: ['QGIS', 'ArcGIS', 'GeoPandas', 'PostGIS', 'Mapbox GL', 'Leaflet.js', 'Spatial Analysis'],
  },
  {
    group: 'AES & Technical',
    skills: ['CAD Software', 'Technical Documentation', 'Simulation', 'Data Analysis', 'LaTeX'],
  },
]

/* ─── TOOLS marquee strip ──────────────────── */
export const MARQUEE_ITEMS: string[] = [
  'TypeScript', 'React', 'Next.js', 'Python', 'C++', 'C#',
  'Unity', 'Godot', 'Blender', 'ZBrush', 'QGIS', 'ArcGIS',
  'Figma', 'Photoshop', 'After Effects', 'Docker', 'PostgreSQL',
  'Node.js', 'Go', 'GeoPandas', 'Mapbox', 'Three.js', 'MATLAB',
  'Procreate', 'Cycles', 'Illustrator', 'Redis', 'PostGIS',
]

/* ─── EXPERIENCE timeline ──────────────────── */
export interface TimelineEntry {
  year: string
  title: string
  org: string
  description: string
}

/* ✏️ EDIT: Add your experience/education history */
export const TIMELINE: TimelineEntry[] = [
  {
    year:        '2025 — Now',
    title:       'Role Title',
    org:         'Organization Name',
    description: 'Brief description of what you did/do here. Keep it to 1-2 sentences.',
  },
  {
    year:        '2024',
    title:       'Another Role or Achievement',
    org:         'Another Org',
    description: 'Brief description of this experience.',
  },
  {
    year:        '2023',
    title:       'Education or Project',
    org:         'University / Platform',
    description: 'What you studied, built, or accomplished.',
  },
  {
    year:        '2022',
    title:       'Earlier Experience',
    org:         'Organization',
    description: 'How you got started in this field.',
  },
]
