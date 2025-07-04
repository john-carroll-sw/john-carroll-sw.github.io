# How to Run Locally

To run this portfolio site locally on macOS (zsh):

1. **Install dependencies:**

   ```zsh
   pnpm install
   ```

2. **Start the development server:**

   ```zsh
   pnpm dev
   ```

   This will start the site at <http://localhost:3000>

---

- Make your changes, save, and the site will hot-reload in development mode.
- For static export, just run `pnpm build` and check the `out` directory.
- To preview the static export locally, run:

  ```zsh
  npx serve out
  ```
