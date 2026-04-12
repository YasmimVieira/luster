# @luster/ui

**Luster** is an editorial-first Web Components design system built with [Stencil.js](https://stenciljs.com/). It ships framework-agnostic components that work in any HTML page, React, Vue, Angular, or plain JavaScript — no build step required on the consumer side.

---

## Contents

- [Quick start](#quick-start)
- [Using in a project](#using-in-a-project)
- [Component comparison: vanilla CSS vs @luster/ui](#component-comparison-vanilla-css-vs-lusterui)
- [All components](#all-components)
- [Design tokens](#design-tokens)
- [Storybook](#storybook)
- [Publishing to npm](#publishing-to-npm)
- [Local development](#local-development)

---

## Quick start

### Via CDN (no install)

```html
<head>
  <script type="module" src="https://unpkg.com/@luster/ui/dist/luster/luster.esm.js"></script>
</head>

<body>
  <luster-button variant="primary">Hello Luster</luster-button>
</body>
```

### Via npm

```bash
npm install @luster/ui
```

```js
import { defineCustomElements } from '@luster/ui/loader';
defineCustomElements();
```

---

## Using in a project

### Vanilla HTML

```html
<!DOCTYPE html>
<html>
<head>
  <script type="module" src="node_modules/@luster/ui/dist/luster/luster.esm.js"></script>
  <!-- or from CDN -->
</head>
<body>
  <luster-button variant="primary">Click me</luster-button>
  <luster-input label="Email" placeholder="you@example.com"></luster-input>
  <luster-badge variant="success" dot>Active</luster-badge>
</body>
</html>
```

### React

```tsx
import { defineCustomElements } from '@luster/ui/loader';
defineCustomElements();

export function MyPage() {
  return (
    <luster-button variant="primary" onClick={() => alert('clicked!')}>
      Launch
    </luster-button>
  );
}
```

### Vue 3

```vue
<script setup>
import { defineCustomElements } from '@luster/ui/loader';
defineCustomElements();
</script>

<template>
  <luster-button variant="secondary">Vue button</luster-button>
</template>
```

### Angular

In `app.module.ts`:

```ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { defineCustomElements } from '@luster/ui/loader';

defineCustomElements();

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

---

## Component comparison: vanilla CSS vs @luster/ui

The example below builds the same **article card** two ways — raw HTML + CSS and then with `@luster/ui`.

### With vanilla HTML + CSS

```html
<!-- index.html -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<div class="article-card">
  <span class="article-card__category">Design</span>
  <span class="article-card__date">Apr 11, 2026</span>
  <h3 class="article-card__title">The Future of Editorial Design Systems</h3>
  <p class="article-card__excerpt">
    How modern design tokens and component libraries are reshaping
    the way editorial teams work.
  </p>
  <div class="article-card__byline">
    <div class="article-card__avatar">A</div>
    <div>
      <span class="article-card__author">Alex Curator</span>
      <span class="article-card__role">Lead Editor</span>
    </div>
  </div>
</div>
```

```css
/* styles.css — ~60 lines you must write and maintain */
.article-card {
  background: #141f38;
  border: 1px solid #40485d;
  border-radius: 0.75rem;
  padding: 1.5rem;
  max-width: 360px;
  font-family: 'Inter', sans-serif;
  transition: border-color 250ms ease, box-shadow 250ms ease;
}
.article-card:hover {
  border-color: rgba(163, 166, 255, 0.3);
  box-shadow: 0 8px 40px 0 rgba(96, 99, 238, 0.12);
}
.article-card__category {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #a3a6ff;
}
.article-card__date {
  font-size: 0.75rem;
  color: #a3aac4;
  margin-left: 0.75rem;
}
.article-card__title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #dee5ff;
  margin: 0.5rem 0;
  line-height: 1.35;
}
.article-card__excerpt {
  font-size: 0.875rem;
  color: #a3aac4;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}
.article-card__byline {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}
.article-card__avatar {
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  background: linear-gradient(135deg, #a3a6ff, #6063ee);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 700;
  color: #0a0040;
}
.article-card__author {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: #dee5ff;
}
.article-card__role {
  display: block;
  font-size: 0.6875rem;
  color: #a3aac4;
}
```

**Total: ~25 lines HTML + ~60 lines CSS = 85 lines** — all tokens hardcoded. Changing the brand colour means a find-and-replace across every file.

---

### With @luster/ui

```html
<!-- index.html -->
<script type="module" src="https://unpkg.com/@luster/ui/dist/luster/luster.esm.js"></script>

<luster-article-card
  category="Design"
  date="Apr 11, 2026"
  heading="The Future of Editorial Design Systems"
  excerpt="How modern design tokens and component libraries are reshaping the way editorial teams work."
  author="Alex Curator"
  author-role="Lead Editor"
></luster-article-card>
```

**Total: 1 script tag + 8 lines HTML = 9 lines.** Zero CSS to write.

#### What you gain

| | Vanilla CSS | @luster/ui |
|---|---|---|
| Lines of code | ~85 | ~9 |
| Hover / focus states | Write yourself | Built-in |
| Consistent tokens | Hardcoded hex values | CSS custom properties on `:root` |
| Dark mode ready | Manual | Yes — tokens designed for dark surfaces |
| Accessibility (ARIA) | Manual | Built-in |
| Works in React / Vue / Angular | Yes | Yes — Web Components are framework-agnostic |
| Brand update | Find & replace | Change one token |
| Interactive states (loading, disabled) | Write yourself | Props: `?loading`, `?disabled` |

---

## All components

### Foundations
| Component | Tag | Key props |
|---|---|---|
| Button | `<luster-button>` | `variant`, `size`, `loading`, `disabled` |
| Input | `<luster-input>` | `label`, `type`, `error`, `error-message`, `helper-text`, `disabled` |
| Badge | `<luster-badge>` | `variant`, `size`, `dot` |
| Checkbox | `<luster-checkbox>` | `label`, `checked`, `indeterminate`, `disabled` |
| Toggle | `<luster-toggle>` | `label`, `checked`, `disabled` |
| Card | `<luster-card>` | `variant`, `padding`, `hoverable` |
| Feature Quote | `<luster-feature-quote>` | `quote`, `author`, `role`, `variant` |
| Color Swatch | `<luster-color-swatch>` | `color`, `name`, `hex`, `size` |

### Navigation & Feedback
| Component | Tag | Key props |
|---|---|---|
| Tabs | `<luster-tabs>` | `tabs` (JSON), `active` |
| Alert | `<luster-alert>` | `variant`, `heading`, `message`, `dismissible`, `timestamp` |
| Modal | `<luster-modal>` | `open`, `heading`, `subtitle`, `size`, `confirm-label`, `cancel-label` |
| Accordion | `<luster-accordion>` | `heading`, `subtitle`, `badge`, `badge-variant`, `expanded` |
| Navbar | `<luster-navbar>` | `logo-title`, `logo-sub`, `active-link` |
| Sidebar | `<luster-sidebar>` | `active` |

### Cards & Data
| Component | Tag | Key props |
|---|---|---|
| Profile Card | `<luster-profile-card>` | `name`, `role`, `avatar`, `stat1-value`, `stat1-label`, `stat2-value`, `stat2-label`, `cta-label` |
| Article Card | `<luster-article-card>` | `heading`, `excerpt`, `date`, `author`, `author-role`, `category`, `image-url`, `featured` |
| Stat Card | `<luster-stat-card>` | `heading`, `description`, `version`, `status`, `users`, `has-toggle`, `toggle-on` |
| Resource Table | `<luster-resource-table>` | `rows` (JSON array) |
| Activity Item | `<luster-activity-item>` | `label`, `description`, `time`, `variant`, `icon`, `file-size`, `downloadable` |

### Layout
| Component | Tag | Key props |
|---|---|---|
| Hero | `<luster-hero>` | `heading`, `subtitle`, `section`, `image-url`, `parallax` |

---

## Design tokens

All tokens are CSS custom properties defined on `:root`. They are inherited through shadow DOM boundaries, so you can override them globally.

```css
:root {
  /* Surfaces */
  --dc-surface:                #060e20;
  --dc-surface-container-low:  #091328;
  --dc-surface-container-high: #141f38;

  /* Primary */
  --dc-primary:     #a3a6ff;
  --dc-primary-dim: #6063ee;

  /* Text */
  --dc-on-surface:         #dee5ff;
  --dc-on-surface-variant: #a3aac4;

  /* Semantic */
  --dc-success: #4cceac;
  --dc-warning: #ffd166;
  --dc-error:   #ffb4ab;

  /* Typography */
  --dc-font-display: 'Manrope', sans-serif;
  --dc-font-body:    'Inter', sans-serif;

  /* Spacing (4px base) */
  --dc-space-4: 1rem;   /* 16px */
  --dc-space-6: 1.5rem; /* 24px */
  --dc-space-8: 2rem;   /* 32px */

  /* Radius */
  --dc-round-2:    0.5rem;
  --dc-round-3:    0.75rem;
  --dc-round-full: 9999px;

  /* Shadows (primary-tinted) */
  --dc-shadow-sm: 0 4px 24px 0 rgba(96, 99, 238, 0.08);
  --dc-shadow-md: 0 8px 40px 0 rgba(96, 99, 238, 0.12);

  /* Transitions */
  --dc-transition-base: 250ms ease;
}
```

### Overriding the brand colour

```css
/* your-app.css */
:root {
  --dc-primary:     #f97316; /* orange brand */
  --dc-primary-dim: #ea580c;
}
```

All components pick up the change automatically — no component code touched.

---

## Storybook

```bash
# Start the dev server
npm run storybook        # http://localhost:6006

# Build a static version
npm run storybook:build  # output → storybook-static/
```

---

## Publishing to npm

```bash
# 1. Build production artefacts
npm run build:prod

# 2. Publish (scoped package — requires --access public first time)
npm publish --access public
```

After publishing, consumers install with:

```bash
npm install @luster/ui
```

---

## Local development

```bash
# Clone the repo
git clone https://github.com/YasmimVieira/digital-curator-ds
cd digital-curator-ds/stencil-ds

# Install dependencies
npm install

# Start Stencil dev server (http://localhost:3335)
npm start

# Or open Storybook (http://localhost:6006)
npm run storybook

# Generate a new component scaffold
npm run generate
```

### Project structure

```
stencil-ds/
├── src/
│   ├── components/
│   │   ├── luster-button/
│   │   │   ├── luster-button.tsx        # Component logic (Stencil)
│   │   │   ├── luster-button.css        # Scoped styles
│   │   │   └── luster-button.stories.ts # Storybook stories
│   │   └── ...                          # 19 more components
│   ├── global/
│   │   └── global.css                   # Design tokens + reset
│   └── index.html                       # Local demo page
├── .storybook/
│   ├── main.ts                          # Storybook config
│   └── preview.ts                       # Global decorators + backgrounds
├── stencil.config.ts
└── package.json
```

---

## License

MIT © [YasmimVieira](https://github.com/YasmimVieira)
