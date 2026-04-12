# Luster — Component Library

> Design system editorial com Angular + Storybook + Nx · v2.4.0

## Estrutura do projeto

```
indigo-logic/
├── .storybook/
│   ├── main.ts        ← config do Storybook (stories, addons, framework)
│   ├── preview.ts     ← decorators globais, backgrounds, tokens
│   ├── manager.ts     ← tema da UI do Storybook
│   └── theme.ts       ← tema personalizado Luster
│
├── libs/
│   └── ui/
│       └── src/
│           ├── public-api.ts       ← exportações públicas da lib
│           └── lib/
│               ├── styles/
│               │   └── _tokens.scss    ← CSS Variables (design tokens)
│               ├── button/
│               │   ├── button.component.ts
│               │   └── button.stories.ts
│               ├── badge/
│               │   └── badge.component.ts
│               ├── toast/
│               │   ├── toast.component.ts
│               │   └── toast.stories.ts
│               └── data-table/
│                   └── data-table.component.ts
│
├── index.html         ← preview visual completo do design system
├── nx.json
└── package.json
```

## Começando do zero

```bash
# 1. Criar workspace Nx com Angular
npx create-nx-workspace@latest indigo-logic --preset=angular-monorepo
cd indigo-logic

# 2. Gerar a lib de componentes
nx generate @nx/angular:library ui \
  --directory=libs/ui \
  --publishable \
  --importPath=@indigo-logic/ui

# 3. Instalar e configurar Storybook
npm install -D @nx/storybook @storybook/addon-a11y @storybook/addon-themes
nx generate @nx/storybook:configuration ui

# 4. Gerar stories automaticamente (opcional)
nx generate @nx/storybook:stories ui

# 5. Rodar o Storybook
npm run storybook
```

## Comandos

| Comando | Descrição |
|---------|-----------|
| `npm run storybook` | Inicia o Storybook em dev |
| `npm run build-storybook` | Build estático do Storybook |
| `npm run build:ui` | Build da lib para publicação |
| `npm run test` | Testes em todos os projetos |
| `npm run graph` | Grafo visual de dependências |
| `npm run affected:build` | Build apenas dos projetos afetados |

## Adicionando um novo componente

```bash
# Gerar componente na lib
nx generate @nx/angular:component \
  --name=modal \
  --project=ui \
  --directory=libs/ui/src/lib/modal \
  --standalone

  nx generate @nx/angular:component \ --name=navbar \ --project=ui \ --directory=libs/ui/src/lib/navbar \ --standalone

# Ele será gerado com:
# modal.component.ts  ← lógica e template
# modal.component.scss ← estilos scoped
# modal.component.spec.ts ← testes
```

Depois:
1. Crie `modal.stories.ts` ao lado do componente
2. Exporte em `libs/ui/src/public-api.ts`

## Design Tokens

Todos os tokens estão em `libs/ui/src/lib/styles/_tokens.scss` como CSS Variables.
Importe em qualquer componente:

```scss
// button.component.scss
@use '../styles/tokens'; // ou confie nos :root vars globais

.btn {
  background: var(--color-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}
```

## Publicando no npm

```bash
# Build de produção
nx build ui --configuration production

# Entrar na pasta dist e publicar
cd dist/libs/ui
npm publish --access public
```

## Filosofia: Tonal Nesting

Em vez de bordas para separar elementos, usamos camadas tonais de superfície:
- `--color-surface-base`  → fundo da página
- `--color-surface-low`   → cards e containers primários
- `--color-surface-mid`   → campos de input, áreas internas
- `--color-surface-high`  → elementos elevados, hover states

Isso cria profundidade visual sem poluição de bordas.