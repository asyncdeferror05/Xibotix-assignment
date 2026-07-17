# AI Usage Report

**Project**: XIBOTIX Internship Assignment  
**Developer**: Amlan Jyoti [25BEE0085]  
**AI Assistant**: Antigravity (Gemini 3.1 Pro)

## Transparency Statement
This project was architected, designed, and directed by the human developer. The AI acted as an implementation and brainstorming assistant, utilized primarily for generating initial code scaffolds, refining React components, and improving documentation formatting. The developer was solely responsible for the project architecture, UI/UX direction, feature planning, core design decisions, iterative refinement, testing, debugging, code review, deployment, responsiveness verification, and final integration.

---

### Update 1: Project Initialization & Architecture Strategy
**Task**: Project planning and initialization.

**Developer Contributions**:
- Defined the strict design constraints, UI/UX direction, and deep-tech aesthetic.
- Planned the Next.js App Router architecture and technology stack (Tailwind CSS, Framer Motion).
- Directed the step-by-step phased execution strategy for the project.
- Supervised the initialization process and reviewed the generated scaffold.

**AI Contributions**:
- Generated the boilerplate `npx create-next-app` structure based on the developer's specifications.
- Formatted the initial `implementation_plan.md` documentation.

---

### Update 2: Theme Configuration & Core Dependencies
**Task**: Setup Tailwind theme and install libraries.

**Developer Contributions**:
- Established the core design system parameters: premium, futuristic, minimal, and engineering-focused.
- Designed the color palette (deep blacks, slate grays, cyan accents).
- Manually authored the custom Tailwind utility classes and CSS variables in `globals.css` to achieve the exact glassmorphism effects required.
- Reviewed and approved the `tailwind.config.ts` integration and utility functions.

**AI Contributions**:
- Scaffolded `tailwind.config.ts` with the developer's color palette.
- Generated standard utility functions (`src/lib/utils.ts`) for class merging.

---

### Update 3: Core Sections & Dual Domains Implementation
**Task**: Implemented Hero, Overview, Robotics, Rehab, and Technology sections.

**Developer Contributions**:
- Enforced the architectural constraint that neither Robotics nor Rehab domains should dominate visually, ensuring equal visual weight.
- Personally coded the core Hero section animations, orchestrating the staggered entry timings and viewport variants using Framer Motion.
- Designed the minimalist abstract UI block representations.
- Planned the scroll-triggered micro-animations using Framer Motion to enhance the premium feel.
- Conducted iterative refinement and layout testing for responsiveness.

**AI Contributions**:
- Generated the initial component scaffolding for `Navbar.tsx`, `Footer.tsx`, and the homepage sections based on the developer's UI/UX direction.
- Assisted in translating the developer's animation concepts into Framer Motion code.

---

### Update 4: Multi-page Architecture & Routing
**Task**: Converting the single-page landing layout into a professional multi-page corporate platform.

**Developer Contributions**:
- Directed the architectural shift from a single-page layout to a multi-page routing structure.
- Planned the new pages (`/robotics`, `/rehabilitation`, `/technology`, `/research`, `/about`, `/contact`).
- Verified seamless client-side navigation and optimal performance.

**AI Contributions**:
- Generated the directory structure and boilerplate code for the new Next.js routes under the developer's supervision.
- Updated `Hero.tsx` links to use Next.js `<Link>` components for optimal routing.

---

### Update 5: Omnipresent 3D Sphere & Global Dark Mode
**Task**: Implementing a continuous 3D particle sphere background and enforcing a global dark mode across all pages.

**Developer Contributions**:
- Conceptualized the omnipresent 3D sphere to flow seamlessly across route transitions.
- Manually implemented the Canvas API resize observer and the delta-time animation loop for the particle physics.
- Identified z-index rendering issues and directed the architectural fix to move the canvas to the root layout level.
- Decided to pivot the entire platform to a pure, cohesive dark mode aesthetic.
- Led the debugging process for color contrast issues, manually rewriting the Canvas opacity bounds and text-color utility classes to ensure legibility.
- Reviewed and merged the final design refinements.

**AI Contributions**:
- Provided boilerplate code for the HTML5 Canvas particle system.
- Executed the bulk string replacements to remove light backgrounds and update text colors to match the developer's global dark mode mandate.
- Assisted in debugging the canvas alpha channel and ESLint errors that caused deployment failures.

---

### Update 6: Testing, Debugging & Vercel Deployment
**Task**: Final integration, build verification, and cloud deployment.

**Developer Contributions**:
- Oversaw the final code review and validation process.
- Connected the GitHub repository to Vercel for continuous integration.
- Diagnosed Vercel 404 errors by recognizing root directory misconfigurations.
- Triggered required redeployments and verified the live production build.

**AI Contributions**:
- Ran local linter and type-checking scripts to identify unused imports (`MapPin`, `Zap`, `Server`).
- Cleaned up the identified unused variables to ensure a successful production build on Vercel.
