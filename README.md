# ⚛️ React SSR + Hydration with Vite + Express

This project demonstrates **Server-Side Rendering (SSR)** with **React**, using **Vite** for bundling and **Express** as the backend server. It includes **hydration** on the client side to add interactivity post initial server render.

---

## 🔧 Tech Stack

- **React 19**
- **Vite** (with SSR support)
- **Express** (Node.js server)
- **ReactDOM.hydrateRoot** for hydration
- **JSX**, **ESM**, **Babel**

---

## 🚀 Features

- Server-side rendering of React App
- Seamless hydration using `hydrateRoot`
- Lazy hydration-friendly structure
- Fast performance (first paint ready quickly)
- SEO-friendly output
- Minimal setup with vanilla Express

---

## 🧠 How it Works

- **Vite builds** the app for both client and server (`vite build && vite build --ssr`).
- On request to `/`, **Express reads the HTML file** and injects SSR-rendered HTML using `renderToString()`.
- Browser then **hydrates** the markup using `hydrateRoot()` to activate interactivity.

## 🧪 Run the Project

### 1. Install dependencies

```bash
npm install
2. Build both client and SSR
bash
Copy
Edit
npm run build
3. Start the Express server
bash
Copy
Edit
npm run serve
Navigate to http://localhost:3000
```

🖼 Example
The app renders a sample blog layout with a collapsible navigation menu and a large image. SSR ensures the structure is visible quickly, and hydration enables interactivity post-load.

## 🧪 Testing SSR Behavior

To **verify that Server-Side Rendering is working correctly**, follow these steps:

### ✅ 1. Disable JavaScript in your browser

1. Open your app in Chrome: [http://localhost:3000](http://localhost:3000)
2. Go to **DevTools > Settings (⚙️) > Preferences > Debugging**
3. Scroll to **Debugger** section → Check **Disable JavaScript**
4. Reload the page

> You should still see the app content rendered — this proves that HTML is coming from the **server**, not built by JavaScript on the client.
> The Page will not be interactive, clicking on hamburger icon button will not trigger any events, as all events and interactivity is gone -> this is a expected behavior with static html/css on SSR.

---

### 🔍 2. Check Network Tab

1. Open **DevTools > Network**
2. Reload the page
3. Click on the **document** request (e.g., `/`)
4. Look at the **Response tab**

> You should see a full HTML page, with the React app already rendered inside `<div id="root">...</div>` when you open the page source. This confirms SSR is working.

---

### 💡 Want to test hydration?

- Re-enable JavaScript
- Trying
- Open DevTools → **Console**
- Look for hydration-related logs or events triggering only after JS is loaded



🌐 Useful Links
React Hydration Docs: https://18.react.dev/reference/react-dom/client/hydrateRoot

Vite SSR Guide: https://vite.dev/guide/ssr


📢 Author
Built with ❤️ by [Ashwin R](https://www.linkedin.com/in/ashwin-r-menon/)
Drop a ⭐ if this helped you!