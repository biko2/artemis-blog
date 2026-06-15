# Propuesta de Arquitectura Hexagonal para el Frontend

## Principios

- **Domain** no depende de nada externo (ni Astro, ni fetch, ni Express)
- **Application** define contratos (puertos) y orquesta flujos
- **Infrastructure** implementa los puertos usando frameworks concretos
- **UI** son los componentes de presentación (Astro), lo más tontos posible

---

## Estructura propuesta

```
src/
├── domain/
│   ├── models/
│   │   └── post.ts              # Interfaces Puras (Post, CoverImage, etc.)
│   └── services/
│       └── posts.ts             # Lógica de negocio pura (getRelatedPostByFirstTag, formateo)
│
├── application/
│   └── ports/
│       ├── post-repository.ts   # Interfaz: define qué necesita la app (getAll, getBySlug)
│       └── date-formatter.ts    # Interfaz: define el contrato de formateo de fechas
│
├── infrastructure/
│   ├── api/
│   │   └── post-api-repository.ts  # Implementación de PostRepository con fetch
│   ├── formatters/
│   │   └── date-formatter-impl.ts  # Implementación de DateFormatter con Intl
│   └── config/
│       └── base-path.ts         # Lógica de rutas base (antes utils/base.ts o images.ts)
│
├── ui/
│   ├── atoms/                   # Componentes puramente presentacionales
│   │   ├── DatePublished.astro  # Recibe props, solo renderiza
│   │   ├── H1.astro
│   │   ├── H3.astro
│   │   ├── Img.astro
│   │   └── PreTitle.astro
│   ├── molecules/               # Combinan átomos
│   │   ├── PostCard.astro
│   │   └── RelatedArticlesList.astro
│   ├── organisms/               # Secciones completas
│   │   ├── Footer.astro
│   │   ├── GridPost.astro
│   │   ├── Header.astro
│   │   ├── HeaderPost.astro
│   │   ├── Hero.astro
│   │   └── RelatedArticles.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── 404.astro
│       └── posts/
│           └── [slug].astro
│
├── mocks/                       # Datos falsos para tests / desarrollo aislado
│   └── mock-posts-data.ts
│
└── styles/
    └── global.css
```

---

## Ejemplo con HeaderPost.astro

### Estado actual (`ui/organisms/HeaderPost.astro`)

Actualmente el componente mezcla presentación con lógica de rutas:

```astro
---
import type { Post } from "../../types/post";       // Bien, solo tipos
import { base } from "../../utils/base";             // ⚠️ Lógica de infraestructura
import { localImg } from "../../utils/images";        // ⚠️ Lógica de infraestructura
import DatePublished from "../atoms/DatePublished.astro";
import H1 from "../atoms/H1.astro";

interface Props {
  post: Post;
}
const { post } = Astro.props;
---
```

### Cómo quedaría con hexagonal

**1. `domain/models/post.ts`** — igual que ahora (tipo puro)

**2. `application/ports/image-resolver.ts`** — define el contrato

```ts
export interface ImageResolver {
  localImg(src: string): string;
}
```

**3. `infrastructure/config/base-path.ts`** — implementación

```ts
export const base = (import.meta.env.BASE_URL ?? "").replace(/\/$/, "");
```

**4. `infrastructure/formatters/image-formatter.ts`** — implementación

```ts
import { base } from "../config/base-path";

export function localImg(src: string): string {
  if (!src) return "";
  const path = src.replace(/^https?:\/\/[^/]+(\/images\/)/, "$1");
  return path.startsWith("/images/") ? `${base}${path}` : path;
}
```

**5. `ui/organisms/HeaderPost.astro`** — solo presentación

```astro
---
import type { Post from "@domain/models/post";
import { localImg } from "../../infrastructure/formatters/image-formatter";
import { base } from "../../infrastructure/config/base-path";
import DatePublished from "../atoms/DatePublished.astro";
import H1 from "../atoms/H1.astro";

interface Props {
  post: Post;
}
const { post } = Astro.props;
---
```

El truco: los componentes **nunca llaman a `fetch` directamente**, nunca acceden a `import.meta.env` directamente. Eso se delega a `infrastructure/` y se inyecta desde las páginas.

---

## Reglas clave

| Capa | Puede importar de | No puede importar de |
|------|-------------------|---------------------|
| **domain** | Solo sí mismo, librerías std | Astro, fetch, Express, etc. |
| **application** | `domain/` | Astro, fetch, Express |
| **infrastructure** | `domain/`, `application/` | `ui/` |
| **ui** | `domain/`, `application/`, `infrastructure/` | Nunca al revés |

---

## Ventajas

- **Cambiar de API** (fetch → GraphQL, o mock) solo toca `infrastructure/api/`
- **Cambiar de librería de imágenes** solo toca `infrastructure/formatters/`
- **Probar lógica de negocio** sin cargar Astro ni el DOM
- **Los componentes Astro** quedan limpios, solo reciben props y renderizan
