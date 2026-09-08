# Benjamín Rodríguez Romo — Portfolio

Vue 3 + Vite portfolio for biomedical data science, computational biomechanics, medical imaging, 3D analysis, and scientific software.

## Why this structure

The page is intentionally research-oriented rather than a generic software-engineering template. It prioritizes:

1. Selected technical work
2. Core problem-solving domains
3. Research experience
4. Publications and conference output
5. Direct links to GitHub, Streamlit demos, CV, and contact

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Automatic GitHub project section

`scripts/fetch-github-projects.mjs` refreshes public repository metadata before every build.

A repository appears when either:

- it has the GitHub topic `portfolio` or `featured`, or
- it is temporarily included in `fallbackNames` in the fetch script.

Recommended GitHub repository metadata:

- **Description:** one sentence describing the research/software problem
- **Topics:** `portfolio`, plus domain/tool topics such as `medical-imaging`, `biomechanics`, `streamlit`
- **Website/Homepage:** set this to the Streamlit or other live demo URL

Portfolio-specific copy and ordering live in `src/data/projectOverrides.js`.

## Streamlit

When a repository homepage points to `*.streamlit.app`, the project card automatically offers an embedded preview. The app itself remains hosted by Streamlit Community Cloud.

## Private projects

Do not put a GitHub personal access token in Vue/browser code to display private repositories. Private or institution-owned work should be summarized as a curated case study in `src/data/projectOverrides.js` with sanitized screenshots or videos if permitted.

## GitHub Pages

The included workflow deploys the Vite `dist` build with GitHub Actions and refreshes GitHub metadata once per day.

Because the current repository is named `benjaminrodriguez.github.io` while the GitHub account is `VenjaminRodriguezR`, `vite.config.js` currently uses the project-site base path `/benjaminrodriguez.github.io/` in GitHub Actions.

If the repository is renamed to `VenjaminRodriguezR.github.io`, change the Vite base to `/` for a root user site.

## Assets to add next

For the strongest portfolio, add 16:9 screenshots or short muted MP4/WebM loops for:

- CAMalyzer segmentation + 3D model output
- Abaqus pipeline/dashboard
- 3D shape-model correspondence / cartilage map
- Biomedical CSV Explorer

Keep images technical: application UI, plots, meshes, models, or pipeline diagrams. Avoid generic stock imagery.
