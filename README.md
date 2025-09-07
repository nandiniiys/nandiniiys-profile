# Personal Website (React)

This repository contains the source code for my personal portfolio website, built with **React** and deployed via **GitHub Pages**.  
🔗 **Live site:** [https://nandiniiys.github.io/nandiniiys-profile](https://nandiniiys.github.io/nandiniiys-profile)

---

## About

The site serves as a personal hub to showcase:
- **Home** – quick intro  
- **Experience** – industry background  
- **Projects** – highlights of selected projects  
- **Blogs** – short writeups (PDFs linked in tiles)  
- **Research** – academic research  
- **Contact** – ways to reach me  

The layout is simple and reusable, making it easy to adapt this structure for any personal portfolio.

---

## Project Structure
```
.
├── public/              # static assets (PDFs for blogs, etc.)
│   └── blogs/           # uploaded blog PDFs
├── src/
│   ├── components/      # shared UI components (Navbar, Footer, BlogCard, etc.)
│   ├── data/            # JSON/JS data for projects, blogs, etc.
│   ├── pages/           # page-level components (Home, Projects, Blogs, Research, Contact)
│   └── App.js           # routes + page layout
└── package.json         # config, scripts, dependencies
```
---

## Local Development

```bash
npm install
npm start
Visit http://localhost:3000 in your browser.
```
The site is deployed via the gh-pages package.
```bash
npm run deploy
```
This builds the app and pushes the static files to the gh-pages branch.
Make sure the "homepage" field in package.json points to your GitHub Pages URL.


