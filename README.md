# Fuzzie Gauge

Fuzzie Gauge is a polished React experience for exploring multidimensional cognitive assessments. It helps people understand how they think, discover relevant assessment pathways, and preview the kind of insight a completed profile can provide.

## Highlights

- Responsive landing page with dark and light themes
- Cognitive dimensions and assessment journey sections
- Searchable, filterable assessment explorer with grid and list views
- Sample questions, progress previews, profile visualizations, and report previews
- Authentication UI for login and sign-up flows
- Accessible navigation, focus states, reduced-motion support, and mobile CTA

## Tech stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- React Hook Form and Zod

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Vite will print the local development URL, usually `http://localhost:5173`.

### Production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project structure

```text
src/
├── components/   Reusable page and UI components
├── data/         Assessment content and navigation configuration
├── App.jsx       Theme state and route-level composition
├── index.css     Tailwind layers and application styles
└── main.jsx      React entry point
public/           Static assets
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Fuzzie Gauge landing page |
| `/about` | Cognitive insights |
| `/dimensions` | Cognitive dimensions |
| `/assessment` | Assessment journey |
| `/explore` | Assessment explorer |
| `/resources` | Resource compilation |
| `/contact` | Responsible assessment and contact CTA |
| `/login` | Login UI |
| `/signup` | Sign-up UI |

## License

This project is maintained for the Fuzzie Gauge experience. Add a project-specific license before distributing it publicly.
