# 🚀 Portfolio — Setup & Customization Guide

A modern, dark-themed portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## ⚡ Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# → http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

---

## 🗂 Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, Navbar, Footer)
│   ├── globals.css         # Design tokens, utilities, animations
│   ├── page.tsx            # Home page
│   ├── projects/page.tsx   # Projects page (filterable)
│   ├── about/page.tsx      # About page (bio, skills, timeline)
│   └── contact/page.tsx    # Contact page (links + form)
│
├── components/             # Reusable components
│   ├── Navbar.tsx          # Fixed nav with scroll + mobile menu
│   ├── Footer.tsx          # Site footer
│   ├── HeroSection.tsx     # Animated landing hero
│   ├── ProjectCard.tsx     # Project card (used in grids)
│   ├── FeaturedProjects.tsx # Homepage featured section
│   ├── CategoryOverview.tsx # Homepage discipline overview
│   └── MarqueeStrip.tsx    # Scrolling tech ticker
│
├── data/
│   ├── projects.ts         # ✏️ ALL your project data lives here
│   └── skills.ts           # ✏️ Skills, tools, timeline
│
└── public/
    ├── projects/           # Drop project screenshots here
    └── resume.pdf          # Your resume
```

---

## ✏️ How to Customize

### 1. Your Name & Info

Open `app/layout.tsx` — update `metadata` (title, description).  
Open `components/Navbar.tsx` — change the `YN` initials/logo.  
Open `components/HeroSection.tsx` — update your name and ROLES array.  
Open `app/about/page.tsx` — replace the bio paragraphs and photo.

### 2. Add a Project

Open `data/projects.ts` and add a new object to the `PROJECTS` array:

```ts
{
  id:          'proj-my-new-one',       // unique string, any format
  title:       'My Cool Project',
  description: 'One-line summary.',
  category:    'programming',           // see Category type
  tags:        ['React', 'TypeScript'],
  image:       '/projects/mycool.png',  // optional — put file in /public/projects/
  githubUrl:   'https://github.com/...',
  liveUrl:     'https://myproject.com',
  featured:    true,                    // shows on homepage if true
  year:        2025,
},
```

**Categories:**
| Key | Label |
|-----|-------|
| `programming` | Programming |
| `gamedev` | Game Development |
| `art2d` | 2D Digital Media |
| `art3d` | 3D Art & Rendering |
| `gis` | GIS Projects |
| `aes` | AES / Technical |

### 3. Edit Skills & Timeline

Open `data/skills.ts`:
- `SKILL_GROUPS` → skill groups on the About page
- `MARQUEE_ITEMS` → scrolling ticker on the Home page
- `TIMELINE` → experience/education on the About page

### 4. Update Contact Links

Open `app/contact/page.tsx` — find `CONTACT_LINKS` near the top and fill in your real URLs.

### 5. Wire Up the Contact Form

In `app/contact/page.tsx`, find the `handleSubmit` function and replace the placeholder `setTimeout` with your form service:

**Formspree (easiest):**
```ts
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formState),
})
```

**Resend / custom API route:** create `app/api/contact/route.ts`.

### 6. Customize Colors & Fonts

Open `app/globals.css` — the `:root` block at the top has all CSS variables:

```css
:root {
  --accent:     #9B7DFF;   /* primary purple accent */
  --cyan:       #00D4FF;   /* secondary cyan accent */
  /* ... */
}
```

Open `tailwind.config.js` — all colors, animations, and shadows are defined here.

**To change fonts:** open `app/layout.tsx` and swap the `next/font/google` imports for any Google Font you prefer.

### 7. Add Your Photo

Replace the placeholder in `app/about/page.tsx`:
```tsx
<img
  src="/your-photo.jpg"
  alt="Your Name"
  className="w-full h-full object-cover rounded-2xl"
/>
```
Put `your-photo.jpg` in the `/public/` folder.

### 8. Resume

Drop your resume as `public/resume.pdf`.  
It's already linked in the Navbar and About page.

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--accent` | `#9B7DFF` | Primary purple, CTAs |
| `--cyan` | `#00D4FF` | Secondary, programming category |
| `font-display` | Syne | Headings, big type |
| `font-body` | DM Sans | Paragraphs |
| `font-mono` | JetBrains Mono | Labels, tags |

---

## 🚀 Deployment

**Vercel (recommended):**
```bash
npx vercel
```
Or connect your GitHub repo at vercel.com.

**Other:**
```bash
npm run build   # creates .next/
npm run start   # serves production build
```

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | Framework, routing, SSR |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| TypeScript | Type safety |
| Lucide React | Icons |
| Google Fonts | Syne + DM Sans + JetBrains Mono |
