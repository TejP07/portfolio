/* ═══════════════════════════════════════════════════════════
   PROJECT DATA
   ─────────────────────────────────────────────────────────
   ✏️ HOW TO ADD A PROJECT:
   1. Copy one of the existing project objects
   2. Fill in your details
   3. Set category to one of: 'programming' | 'gamedev' | 'art2d' | 'art3d' | 'gis' | 'aes'
   4. featured: true  → shows on homepage
   ═══════════════════════════════════════════════════════════ */

export type Category =
  | 'programming'
  | 'gamedev'
  | 'art2d'
  | 'art3d'
  | 'gis'
  | 'archviz'

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  category: Category
  tags: string[]
  image?: string         // path or URL — e.g. '/projects/myproject.png'
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  year: number
}

export const CATEGORY_META: Record<
  Category,
  { label: string; color: string; description: string }
> = {
  programming: {
    label:       'Programming',
    color:       '#0284C7',
    description: 'Software, tools, and web applications',
  },
  gamedev: {
    label:       'Game Development',
    color:       '#BE185D',
    description: 'Games, engines, and interactive experiences',
  },
  art2d: {
    label:       '2D Digital Media',
    color:       '#C2410C',
    description: 'Illustration, UI design, and digital artwork',
  },
  art3d: {
    label:       '3D Art & Rendering',
    color:       '#7C3AED',
    description: 'Models, scenes, and rendered visuals',
  },
  gis: {
    label:       'Geographical Information Systems',
    color:       '#15803D',
    description: 'Geospatial analysis, maps, and spatial data',
  },
  archviz: {
    label:       'Architectural Visualization',
    color:       '#A16207',
    description: 'Architectural renders, technical tools, and design work',
  },
}

/* ─── PROGRAMMING ──────────────────────────── */
export const PROJECTS: Project[] = [
  {
    id:          'proj-prog-1',
    title:       'Project Title One',
    description: 'A short one-line description of what this project does.',
    longDescription:
      'Longer optional description shown on hover or a detail page. Explain the problem, your approach, and what you learned.',
    category: 'programming',
    tags:     ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    image:    '/projects/placeholder.png',
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl:   'https://yourproject.com',
    featured:  true,
    year:      2025,
  },
  {
    id:          'proj-prog-2',
    title:       'CLI Dev Tool',
    description: 'Automation tool that streamlines your development workflow.',
    category: 'programming',
    tags:     ['Python', 'Click', 'Shell'],
    githubUrl: 'https://github.com/yourusername/cli-tool',
    featured:  false,
    year:      2024,
  },
  {
    id:          'proj-prog-3',
    title:       'API Service',
    description: 'RESTful API service with authentication and rate limiting.',
    category: 'programming',
    tags:     ['Go', 'Docker', 'Redis'],
    featured:  false,
    year:      2024,
  },

  /* ─── GAME DEVELOPMENT ──────────────────── */
  {
    id:          'proj-game-1',
    title:       'Game Title Alpha',
    description: 'A short description of your game — genre, mechanics, premise.',
    category: 'gamedev',
    tags:     ['Unity', 'C#', '2D', 'Tilemap'],
    image:    '/projects/placeholder.png',
    liveUrl:  'https://yourgame.itch.io',
    featured: true,
    year:     2025,
  },
  {
    id:          'proj-game-2',
    title:       'Procedural World Gen',
    description: 'Terrain and dungeon generation system using noise algorithms.',
    category: 'gamedev',
    tags:     ['Godot', 'GDScript', 'Procedural'],
    featured: false,
    year:     2024,
  },
  {
    id:          'proj-game-3',
    title:       'Game Jam Entry',
    description: '48-hour game jam submission. Theme: isolation.',
    category: 'gamedev',
    tags:     ['Godot', 'Pixel Art', 'Jam'],
    liveUrl:  'https://itch.io',
    featured: false,
    year:     2024,
  },

  /* ─── 2D DIGITAL ART ────────────────────── */
  {
    id:          'proj-art2d-1',
    title:       'Digital Illustration Series',
    description: 'A series of character or scene illustrations.',
    category: 'art2d',
    tags:     ['Photoshop', 'Procreate', 'Character Design'],
    image:    '/projects/placeholder.png',
    featured: true,
    year:     2025,
  },
  {
    id:          'proj-art2d-2',
    title:       'UI Design System',
    description: 'Component library and visual design system for a product.',
    category: 'art2d',
    tags:     ['Figma', 'UI/UX', 'Design Systems'],
    featured: false,
    year:     2024,
  },
  {
    id:          'proj-art2d-3',
    title:       'Motion Graphics Reel',
    description: 'Short-form animated pieces and title card sequences.',
    category: 'art2d',
    tags:     ['After Effects', 'Motion Design', 'Animation'],
    featured: false,
    year:     2024,
  },

  /* ─── 3D ART & RENDERING ────────────────── */
  {
    id:          'proj-3d-1',
    title:       '3D Environment Scene',
    description: 'Fully rendered environment with lighting and post-processing.',
    category: 'art3d',
    tags:     ['Blender', 'EEVEE', 'Hard Surface'],
    image:    '/projects/placeholder.png',
    featured: true,
    year:     2025,
  },
  {
    id:          'proj-3d-2',
    title:       'Character Model',
    description: 'High-poly character model with rigging and skin weights.',
    category: 'art3d',
    tags:     ['Blender', 'ZBrush', 'Rigging'],
    featured: false,
    year:     2024,
  },
  {
    id:          'proj-3d-3',
    title:       'Product Visualization',
    description: 'Product render with photorealistic materials and lighting.',
    category: 'art3d',
    tags:     ['Blender', 'Cycles', 'PBR'],
    featured: false,
    year:     2024,
  },

  /* ─── GIS PROJECTS ──────────────────────── */
  {
    id:          'proj-gis-1',
    title:       'Spatial Analysis Project',
    description: 'Geospatial data analysis and visualization for a region.',
    category: 'gis',
    tags:     ['QGIS', 'Python', 'GeoPandas', 'Mapbox'],
    image:    '/projects/placeholder.png',
    featured: true,
    year:     2025,
  },
  {
    id:          'proj-gis-2',
    title:       'Interactive Map Dashboard',
    description: 'Web-based mapping tool with real-time data overlays.',
    category: 'gis',
    tags:     ['Leaflet.js', 'PostGIS', 'D3.js'],
    liveUrl:  'https://yourmap.com',
    featured: false,
    year:     2024,
  },

  /* ─── Archviz / TECHNICAL ───────────────────── */
  {
    id:          'proj-aes-1',
    title:       'AES Technical Tool',
    description: 'Software tool developed for AES engineering or design work.',
    category: 'archviz',
    tags:     ['Python', 'CAD', 'Simulation'],
    image:    '/projects/placeholder.png',
    featured: false,
    year:     2025,
  },
  {
    id:          'proj-aes-2',
    title:       'Technical Design System',
    description: 'Design and documentation system for a technical project.',
    category: 'archviz',
    tags:     ['MATLAB', 'LaTeX', 'Automation'],
    featured: false,
    year:     2024,
  },
]

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured)
