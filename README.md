# Personal Portfolio Website

🚀 **Live at:** [https://ben.safigan.com](https://ben.safigan.com)

This is a responsive, portfolio-style website I built to showcase my background, technical skills, resume, and personal projects. It also served as a practical exercise in modern web development — combining a React front end with real hosting and deployment tooling.

Originally hand-written in static HTML/CSS/JS, it has since been refactored into a **React + Vite single-page application** while keeping the exact same look, content, and FTP-based deployment flow.

---

## 🔍 About the Project

This website was created as a personal project to:

- Provide a professional online presence and resume hub
- Practice modern front-end development with React and a component-based architecture
- Demonstrate responsive design for both desktop and mobile
- Host and share my software engineering projects
- Serve as a real-world, production-ready deployment example

---

## 📸 Features

- **Responsive layout** that adapts to all screen sizes
- **Component-based React UI** with client-side routing (React Router)
- **LinkedIn and GitHub links** with icons
- **Resume download button**
- **Tabbed interface** for Experience and Skills
- **Data-driven project grid** linking to dedicated detail pages for each project
- **Smart media carousel** (auto-advancing images, self-playing videos) on the FRC 2996 page
- **Contact buttons** for easy reach-out
- **Back to top button** and **floating navigation menu**
- Hosted live at: `https://ben.safigan.com`

---

## 🛠️ Tech Stack

| Feature             | Tools / Languages                             |
|---------------------|-----------------------------------------------|
| Framework           | React 18                                      |
| Build Tool          | Vite                                          |
| Routing             | React Router                                  |
| Styling             | Custom CSS + Bootstrap 5                       |
| Responsive Design   | Media queries, flexbox, CSS grid              |
| Hosting             | cPanel, remote SSH, LFTP                      |
| Version Control     | Git, GitHub                                   |

---

## 📁 Project Structure

```
portfolio-web-page/
│
├── index.html              # Vite entry (mounts the React app)
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite/React build config
├── publish.sh              # Build + FTP publish script
├── README.md               # This file
│
├── public/                 # Copied verbatim into the build root
│   ├── .htaccess           # SPA fallback (deep links → index.html)
│   ├── meta/               # Images and resume
│   └── frc2996/            # FRC carousel images and videos
│
└── src/
    ├── main.jsx            # App bootstrap + global CSS imports
    ├── App.jsx             # Routes
    ├── data/projects.js    # Project grid + route registry (single source of truth)
    ├── styles/             # base.css (shared), home.css, project.css
    ├── components/         # Linktree, Tabs, Carousel, FloatingNav, BackToTop, etc.
    └── pages/              # Home.jsx + pages/projects/*.jsx detail pages
```

---

## 🧑‍💻 Local Development

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server (hot reload)
npm run build    # build static output into dist/
npm run preview  # preview the production build locally
```

---

## 🚀 Deployment

Deployment is a single script that builds the site and mirrors the output to the web root over FTP:

```bash
./publish.sh
```

It runs `npm run build` to generate `dist/`, then uses `lftp` to upload the contents of `dist/` (the app, hashed asset bundles, `.htaccess`, and all static media) to the server. Client-side routes resolve on deep links thanks to the `.htaccess` SPA fallback.

---

## 🧠 Skills Demonstrated

- Component-based front-end architecture with React
- Client-side routing and single-page-app design
- Modern build tooling with Vite
- Refactoring a legacy static site while preserving behavior and style
- CSS Flexbox and Grid, mobile-first responsive design
- Hosting and file deployment via cPanel/SSH/LFTP

---

## 🧾 License

This is a personal project. You are welcome to explore the code and use it for educational or inspiration purposes.

---

## 🙋‍♂️ About Me

I'm **Benedikt Safigan**, a software engineering student at the University of Colorado Boulder with a focus on:

- Software architecture
- Python, C/C++, Java, SQL
- Machine learning
- Full-stack web development

🔗 Connect with me on [LinkedIn](https://www.linkedin.com/in/benedikt-safigan-cu)

---

## 📬 Contact

Feel free to [email me](mailto:benedikt.safigan@colorado.edu) or use the contact section on the website
