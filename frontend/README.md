# Astro Starter Kit: Minimal

```sh
pnpm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

**Deployment**

- **Public base:** The project reads the site base path from the `PUBLIC_BASE` environment variable at build time. Set it in `frontend/.env.production` or provide it from your CI as `PUBLIC_BASE=/your-subpath/`.
- **Build commands:** Run the build from the `frontend` folder so Astro picks up `frontend/.env.production`:

```bash
pnpm --dir frontend install
pnpm --dir frontend build
pnpm --dir frontend preview
```

- **CI notes:** If your CI runs the build from the repo root, ensure it sets `PUBLIC_BASE` as an environment variable for the `frontend` build step (example for most CI systems):

```bash
cd frontend
    PUBLIC_BASE=/artemis pnpm build
```

- **Normalization:** The config normalizes `PUBLIC_BASE` to ensure a trailing slash, so `/artemis` and `/artemis/` behave the same.

**comando para desplegar \***

cd frontend;
$env:PUBLIC_BASE="/artemis/"; $env:PUBLIC_SITE_URL="https://danielmolina956.42web.io"; pnpm astro build

ejecutar lint
pnpm run lint
# test
# test
# test
# test
# test
# test
