# Ladle + Vite 6 + Custom Babel Reproduction

This project demonstrates an issue (or the setup required) for using Ladle with Vite 6 and custom Babel transformations (like `jsx-control-statements` and `babel-plugin-inline-react-svg`).

## Setup

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Run Ladle:yar
   ```bash
   yarn ladle
   ```

## The Issue to Demonstrate

In this project, we use:
- `vite` v6
- `@ladle/react` v5
- `@vitejs/plugin-react` with a custom Babel configuration in `vite.config.js`.

The custom Babel configuration includes:
- `jsx-control-statements`: Allows using `<If condition={...}>`
- `babel-plugin-inline-react-svg`: Allows importing SVGs as React components using `import { ReactComponent as ... } from './file.svg'`.
- `babel-plugin-module-resolver`: For `@app` path aliases.

The `Repro` story in `src/Repro.stories.jsx` uses these features. If Vite 6 is not supported or if the configuration is not being picked up correctly by Ladle, the story will fail to render or will show errors.

## Current Project Configuration

The configuration is based on a real-world project that uses these Babel transforms. The key files are:
- `vite.config.js`: Contains the `react()` plugin with the `babel` property.
- `.ladle/config.mjs`: Ladle configuration.
- `package.json`: Versions of the dependencies.
