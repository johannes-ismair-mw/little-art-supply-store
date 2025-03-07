# Little Art Supply Store 🎨

Welcome to **Little Art Supply Store**, an example webshop designed with **very bad accessibility**. Your challenge is to **improve the accessibility** of this website!

## 🏗 Project Structure

The project is a **Next.js** application, structured as follows:

- `/app/sections/` – Contains different sections of the webshop.
- Each section has **TODOs** with hints on what accessibility issues to look for and fix.
- **Global Styles:** Located in `styles/global.css`. You can use either **plain CSS** or **Tailwind CSS** (imports for Tailwind are commented out, but a `tailwind.config.js` file is available).

## 🚀 Getting Started

### 1️⃣ Install Dependencies

Make sure you have **Node.js** installed. Then, install the necessary dependencies:

```sh
npm install
```

### 2️⃣ Run the Development Server

Start the dev server with:

```sh
npm run dev
```

The site will be available at **http://localhost:3000**.

### 3️⃣ Choose Your Styling Approach

- **Plain CSS**: Styles are defined in `styles/global.css`.
- **Tailwind CSS**: If you prefer Tailwind, uncomment the necessary imports in `global.css`. The `tailwind.config.js` file is preconfigured (e.g., custom colors are available).

## 🎯 Your Mission

1. **Identify and fix accessibility issues** throughout the webshop.
2. **Use the provided TODOs** in `/app/sections/` as guidance.
3. **Test with accessibility tools** like Lighthouse, axe DevTools, or a screen reader.
4. **Ensure proper semantic HTML, ARIA roles, keyboard navigation, and contrast.**

## 🛠 Useful Resources

- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Next.js Documentation](https://nextjs.org/docs)

Happy fixing! 🎨♿
