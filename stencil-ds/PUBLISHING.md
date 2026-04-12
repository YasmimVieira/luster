# Publishing & Integration Guide — @luster/ui

This guide covers how to build, publish to npm, and integrate `@luster/ui` in any project or framework.

---

## Table of contents

1. [Install in another project](#2-install-in-another-project)
2. [Vanilla HTML](#3-vanilla-html)
3. [React](#4-react)
4. [Vue 3](#5-vue-3)
5. [Angular](#6-angular)
6. [Theming — any color in 3 lines](#7-theming--any-color-in-3-lines)
7. [Light / dark mode](#8-light--dark-mode)
8. [All design tokens reference](#9-all-design-tokens-reference)


---

## 3. Vanilla HTML

### From npm (bundler / Vite / Webpack)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My App</title>
</head>
<body>

  <luster-button variant="primary">Get started</luster-button>
  <luster-input label="Email" placeholder="you@example.com"></luster-input>
  <luster-badge variant="success" dot>Active</luster-badge>

  <script type="module">
    import { defineCustomElements } from '@luster/ui/loader';
    defineCustomElements();
  </script>
</body>
</html>
```

### From CDN (no install needed)

```html
<script
  type="module"
  src="https://unpkg.com/@luster/ui/dist/luster/luster.esm.js">
</script>

<luster-button variant="primary">Hello from CDN</luster-button>
```

---

## 4. React

### Setup (`main.tsx` or `index.tsx`)

```tsx
import { defineCustomElements } from '@luster/ui/loader';
defineCustomElements();
```

### Component usage

```tsx
// src/pages/Home.tsx
export function Home() {
  return (
    <section>
      <luster-hero
        heading="Welcome"
        subtitle="Built with Luster design system"
        section="HOME"
      />

      <luster-button
        variant="primary"
        onClick={() => console.log('clicked')}
      >
        Launch
      </luster-button>

      <luster-alert
        variant="success"
        heading="Saved!"
        message="Your changes were published."
      />
    </section>
  );
}
```

### TypeScript — silence unknown element warnings

Create `src/luster.d.ts`:

```ts
import type { JSX as LusterJSX } from '@luster/ui/dist/types/components';

type LusterElements = {
  [K in keyof LusterJSX.IntrinsicElements]: LusterJSX.IntrinsicElements[K];
};

declare global {
  namespace JSX {
    interface IntrinsicElements extends LusterElements {}
  }
}
```

### Listening to custom events

```tsx
import { useRef, useEffect } from 'react';

function MyModal() {
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = modalRef.current;
    const handler = () => console.log('modal closed');
    el?.addEventListener('dcClose', handler);
    return () => el?.removeEventListener('dcClose', handler);
  }, []);

  return (
    <luster-modal
      ref={modalRef}
      open
      heading="Confirm"
      subtitle="Are you sure?"
    />
  );
}
```

---

## 5. Vue 3

### Setup (`main.ts`)

```ts
import { createApp } from 'vue';
import App from './App.vue';
import { defineCustomElements } from '@luster/ui/loader';

defineCustomElements();

createApp(App).mount('#app');
```

### Tell Vue to ignore custom elements (`vite.config.ts`)

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat every tag starting with "luster-" as a custom element
          isCustomElement: (tag) => tag.startsWith('luster-'),
        },
      },
    }),
  ],
});
```

### Component usage

```vue
<script setup lang="ts">
import { ref } from 'vue';
const email = ref('');
</script>

<template>
  <div>
    <luster-navbar logo-title="My App" logo-sub="PLATFORM" />

    <luster-input
      label="Email"
      placeholder="you@example.com"
      :value="email"
      @dc-input="(e: CustomEvent) => email = e.detail"
    />

    <luster-button variant="primary" @dc-click="submit">
      Subscribe
    </luster-button>
  </div>
</template>
```

---

## 6. Angular

### `app.module.ts`

```ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { defineCustomElements } from '@luster/ui/loader';

defineCustomElements();

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Component usage

```html
<!-- app.component.html -->
<luster-navbar logo-title="My App" active-link="dashboard"></luster-navbar>

<luster-stat-card
  heading="Users"
  description="Active this month"
  version="v2.1"
  status="active"
  users="12.4k"
  [hasToggle]="true"
  [toggleOn]="true"
></luster-stat-card>

<luster-button variant="primary" (dcClick)="onAction()">
  Create report
</luster-button>
```

---

## 7. Theming — any color in 3 lines

All hover tints, shadows, focus rings, glass effects, and gradients are computed via `color-mix()` from three tokens. Override them anywhere in your CSS:

```css
/* your-app.css  — applied AFTER importing @luster/ui */
:root {
  --dc-primary:     #f97316;  /* your brand color */
  --dc-primary-dim: #ea580c;  /* darker shade for gradients & shadows */
  --dc-on-primary:  #ffffff;  /* text color on primary buttons */
}
```

### Examples

#### Emerald brand

```css
:root {
  --dc-primary:     #10b981;
  --dc-primary-dim: #059669;
  --dc-on-primary:  #ffffff;
}
```

#### Rose / pink brand

```css
:root {
  --dc-primary:     #f43f5e;
  --dc-primary-dim: #e11d48;
  --dc-on-primary:  #ffffff;
}
```

#### Gold / amber brand

```css
:root {
  --dc-primary:     #f59e0b;
  --dc-primary-dim: #d97706;
  --dc-on-primary:  #1c1200;  /* dark text — amber is a light color */
}
```

#### Sky blue brand

```css
:root {
  --dc-primary:     #0ea5e9;
  --dc-primary-dim: #0284c7;
  --dc-on-primary:  #ffffff;
}
```

### Scoped theming (per section / component)

You can scope a brand to a specific section of the page without affecting everything else:

```css
.sidebar {
  --dc-primary:     #10b981;
  --dc-primary-dim: #059669;
  --dc-on-primary:  #ffffff;
}
```

### Full surface override (custom dark shade)

```css
:root {
  --dc-primary:                  #f97316;
  --dc-primary-dim:              #ea580c;
  --dc-on-primary:               #ffffff;

  /* Custom dark background instead of navy */
  --dc-surface:                  #1a0500;
  --dc-surface-container-low:    #2a0d00;
  --dc-surface-container:        #331000;
  --dc-surface-container-high:   #3d1400;
  --dc-surface-container-highest:#471800;
  --dc-surface-bright:           #5c2000;
}
```

---

## 8. Light / dark mode

### Via JavaScript (manual toggle)

```js
const root = document.documentElement;

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}

// Restore saved preference on load
const saved = localStorage.getItem('theme');
if (saved) setTheme(saved);
```

### Via OS preference (automatic — no JS needed)

Just import `@luster/ui` — it uses `@media (prefers-color-scheme: light)` out of the box. No configuration required.

### In React with a hook

```tsx
import { useEffect, useState } from 'react';

function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') ?? 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark') };
}

// Usage
function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <luster-button variant="secondary" onClick={toggle}>
      Switch to {theme === 'dark' ? 'Light' : 'Dark'}
    </luster-button>
  );
}
```

### In Vue with a composable

```ts
// composables/useTheme.ts
import { ref, watchEffect } from 'vue';

export function useTheme() {
  const theme = ref<'dark' | 'light'>(
    (localStorage.getItem('theme') as 'dark' | 'light') ?? 'dark'
  );

  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value);
    localStorage.setItem('theme', theme.value);
  });

  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
  };

  return { theme, toggle };
}
```

---

## 9. All design tokens reference

### Override levels

| Level | How | Scope |
|---|---|---|
| Global rebrand | `:root { --dc-primary: ... }` | Entire app |
| Per section | `.sidebar { --dc-primary: ... }` | Section only |
| Per instance | `style="--dc-primary: ..."` on the element | One element |

### Core brand tokens (most commonly overridden)

| Token | Dark default | Light default | Purpose |
|---|---|---|---|
| `--dc-primary` | `#a3a6ff` | `#4547ce` | Brand color — buttons, links, accents |
| `--dc-primary-dim` | `#6063ee` | `#3234b0` | Darker variant — gradients, shadows |
| `--dc-on-primary` | `#0a0040` | `#ffffff` | Text/icon on primary bg |

### Surface tokens

| Token | Dark | Light |
|---|---|---|
| `--dc-surface` | `#060e20` | `#f5f7ff` |
| `--dc-surface-container-low` | `#091328` | `#eef0ff` |
| `--dc-surface-container-high` | `#141f38` | `#e0e3ff` |
| `--dc-on-surface` | `#dee5ff` | `#0d0f2d` |
| `--dc-on-surface-variant` | `#a3aac4` | `#3f4263` |

### Semantic tokens

| Token | Dark | Light | Purpose |
|---|---|---|---|
| `--dc-error` | `#ffb4ab` | `#ba1a1a` | Destructive actions, error states |
| `--dc-success` | `#4cceac` | `#006c4c` | Success feedback |
| `--dc-warning` | `#ffd166` | `#7c5700` | Warning / caution |

### Derived tokens (auto-computed — override only if needed)

These are computed via `color-mix()` and update automatically when you change the base tokens. You can still override them for fine-grained control.

| Token | Derived from | Use |
|---|---|---|
| `--dc-hover-tint` | `--dc-primary` @ 4% | Row/item hover |
| `--dc-hover-tint-strong` | `--dc-primary` @ 8% | Button hover fill |
| `--dc-icon-bg` | `--dc-primary` @ 10% | Icon backgrounds |
| `--dc-focus-ring` | `--dc-primary` @ 12% | Input/button focus |
| `--dc-border-faint` | `--dc-border-source` @ 20% | Subtle separators |
| `--dc-border-default` | `--dc-border-source` @ 30% | Card/modal borders |
| `--dc-glass-nav` | `--dc-surface-bright` @ 65% | Navbar blur effect |
| `--dc-overlay-modal` | `--dc-surface` @ 80% | Modal backdrop |
| `--dc-shadow-md` | `--dc-primary-dim` @ 12% | Card elevation |
| `--dc-error-border` | `--dc-error` @ 30% | Destructive button border |
| `--dc-error-bg` | `--dc-error` @ 10% | Destructive button hover |
