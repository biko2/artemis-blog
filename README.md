# The Artemis diary

```
artemis-blog-f5-EA/
├── .nvmrc
├── .gitignore
├── .vscode/
│   ├── extensions.json
│   ├── launch.json
│   └── settings.json
├── package.json
├── pnpm-workspace.yaml
├── README.md
├── backend/
│   ├── .gitignore
│   ├── images/
│   │   └── *.jpg
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       ├── index.ts
│       └── routes/
│           ├── posts.json
│           └── posts.routes.ts
└── frontend/
    ├── .env.development
    ├── .env.production
    ├── .gitignore
    ├── .vscode/
    │   ├── extensions.json
    │   └── launch.json
    ├── astro.config.mjs
    ├── package.json
    ├── tsconfig.json
    ├── public/
    │   ├── favicon.ico
    │   └── favicon.svg
    └── src/
        ├── layouts/
        │   └── BaseLayout.astro
        ├── pages/
        │   ├── index.astro
        │   └── posts/
        │       └── [slug].astro
        ├── components/
        │   ├── atoms/
        │   │   ├── DatePublished.astro
        │   │   ├── H3.astro
        │   │   └── PreTitle.astro
        │   ├── molecules/
        │   │   ├── PostCard.astro
        │   │   └── RelatedArticlesList.astro
        │   └── organisms/
        │       ├── Footer.astro
        │       ├── GridPost.astro
        │       ├── Header.astro
        │       ├── HeaderPost.astro
        │       ├── Hero.astro
        │       └── RelatedArticles.astro
        ├── styles/
        │   └── global.css
        ├── types/
        │   └── post.ts
        └── utils/
            ├── base.ts
            ├── formatDate.js
            ├── formatDate.test.js
            ├── images.ts
            ├── postUtils.js
            ├── postUtils.test.js
            └── postUtilss.ts
```

## Contexto

Disponéis de este repositorio base que incluye:

- una API en Express ya implementada
- los endpoints necesarios para obtener los posts
- y un [Figma](https://www.figma.com/design/YnAf3q81L45w3L3r5YiC7P/BlogArtemis?node-id=0-1&t=Exqn9ZNvGtQhGmPk-1) con el diseño ya definido

Debéis hacer fork del repositorio y desarrollar por parejas el frontend del blog consumiendo la API proporcionada.

---

## Objetivo

La idea es construir una primera versión funcional del blog utilizando los conocimientos que ya tenéis y apoyándoos en documentación, recursos online o herramientas que os ayuden durante el desarrollo.

El proyecto servirá como punto de partida para ir mejorándolo poco a poco durante las prácticas.

---

## Libertad tecnológica

Podéis elegir las herramientas que queráis:
La elección es libre, siempre que os permita avanzar y entender lo que estáis haciendo.

---

## Lo importante

El objetivo es intentar construir una experiencia de blog lo más completa posible dentro del tiempo disponible.

Pensad en aspectos como:

- qué cosas son importantes en una web pública como un blog
- cómo mostrar el contenido
- cómo organizar las páginas
- cómo consumir los datos de la API
- cómo adaptar la web a móvil
- cómo estructurar el proyecto

---

## Nota

Podéis consultar documentación, internet o herramientas de IA, pero debéis entender y poder explicar las soluciones utilizadas.

No se espera un proyecto perfecto ni completo. El objetivo es construir lo máximo posible en 2-3 días y usarlo después como base para seguir aprendiendo y mejorándolo durante las prácticas.
