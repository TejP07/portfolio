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
    group: 'GIS & Spatial Analysis',
    skills: ['Esri ArcGIS', 'ArcGIS Online', 'QGIS', 'GTFS Data', 'Isochrone Analysis', 'Spatial Data'],
  },
  {
    group: 'Architecture & 3D',
    skills: ['Revit', 'Blender', 'Autodesk ArtCAM', '3D Modelling', 'Architectural Documentation'],
  },
  {
    group: 'Data Analysis & Visualisation',
    skills: ['Tableau', 'Python', 'R', 'Excel', 'KPI Dashboards', 'Campaign Analytics'],
  },
  {
    group: 'Programming',
    skills: ['Python', 'R', 'C++'],
  },
  {
    group: 'Design & Media',
    skills: ['Adobe Creative Suite', 'Canva', 'Branding', 'Print Design'],
  },
  {
    group: 'Productivity & Office',
    skills: ['Microsoft Office', 'Technical Documentation', 'Data Management'],
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
    year:        'Aug 2025 — Present',
    title:       'B.S. Urban Technology',
    org:         'University of Michigan, Ann Arbor',
    description: 'Minors in Civil Engineering and Computer Science. GPA: 3.8. Focused on transportation planning, geospatial analysis, and urban data systems.',
  },
  {
    year:        'Mar 2025 — Jan 2026',
    title:       'Data Visualization Intern',
    org:         'Rochester Institute of Technology / Excelerate',
    description: 'Built Tableau and Python dashboards tracking 15+ KPIs, reducing stakeholder reporting time by 40%. Identified 23% budget waste across a 6-month marketing campaign.',
  },
  {
    year:        'Aug 2021 — Present',
    title:       'Youth Coordinator',
    org:         'BAPS Charities — Lowell, MA & Canton, MI',
    description: 'Directed weekly programming for 50+ students and led planning for 12+ annual events with up to 400 attendees. Designed visual branding using Adobe Creative Suite and Autodesk ArtCAM.',
  },
]
