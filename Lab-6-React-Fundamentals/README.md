# CSE 343 – Web Development Lab 6: React Fundamentals

A small React application built with **Vite** and **React Router** that demonstrates:

- Project setup with Vite
- Reusable components (`NavBar`)
- The `useState` hook (item counter, controlled text input, light toggle)
- The `useEffect` hook (fetching a user from JSONPlaceholder once on mount, with a `Loading...` fallback)
- Client-side routing with `<BrowserRouter>`, `<Routes>`, `<Route>` and `<Link>` (no full-page reloads)
- A 404 fallback route

## Project Structure

```
src/
├── components/
│   ├── NavBar.jsx
│   └── NavBar.css
├── pages/
│   ├── HomePage.jsx
│   ├── HomePage.css
│   ├── CheckoutPage.jsx
│   └── CheckoutPage.css
├── App.jsx        # Route definitions (/, /checkout, *)
├── App.css
├── index.css      # Global styles
└── main.jsx       # Mounts <App /> inside <BrowserRouter>
```

## Routes

| Path        | Page                       |
| ----------- | -------------------------- |
| `/`         | Home page (hooks demo)     |
| `/checkout` | Checkout summary           |
| `*`         | 404 - Page Not Found       |

## Getting Started

Requirements: [Node.js](https://nodejs.org/) (v18 or newer) and npm.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the URL printed in the terminal (usually http://localhost:5173).

### Other scripts

- `npm run build` – create a production build in `dist/`
- `npm run preview` – preview the production build locally
