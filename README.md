# 💼 Shrutika Portfolio

A personal portfolio website built using **React** to showcase my projects, technical skills, resume, and ways to contact me. This site serves as my professional online presence and is optimized for responsiveness, performance, and SEO.

🌐 [Live Website](https://shrutika-portfolio-iota.vercel.app/about)

---

## 📌 Table of Contents

- [Tech Stack](#-tech-stack)
- [Development Process](#-development-process)
- [Deployment](#-deployment)
- [Challenges & Solutions](#-challenges--solutions)
- [Installation & Local Setup](#-installation--local-setup)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🛠 Tech Stack

- **Frontend:** React, JSX, CSS Modules / Bootstrap
- **Routing:** React Router DOM
- **Icons & Styling:** Font Awesome / Bootstrap Icons
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

---

## 🏗️ Development Process

1. **Initial Setup:**
   - Used `create-react-app` to scaffold the project.
   - Installed dependencies like `react-router-dom`.

2. **Component Design:**
   - Broke the site into modular sections (About, Projects, Skills, etc.).
   - Created reusable components like Navbar, Footer, and Cards.

3. **Styling:**
   - Used responsive layouts with Bootstrap and Flexbox.
   - Added media queries for mobile responsiveness.

4. **Routing:**
   - Configured React Router for smooth navigation without page reloads.

5. **Resume Integration:**
   - Embedded a PDF resume with a download option.

6. **Contact Form:**
   - Designed using controlled components.
   - (Optional enhancement: integrate with Formspree or EmailJS for working submissions).

---

## 🚀 Deployment

- **Platform:** [Vercel](https://vercel.com/)
- **Steps:**
  1. Connected GitHub repo to Vercel
  2. Automatic deployment triggered on push to `main` branch

---

## ⚠️ Challenges & Solutions

| Challenge | Solution |
|----------|----------|
| Resume not showing in some browsers | Ensured resume file is in `public/` and linked properly with `target="_blank"` |

---

## 💻 Installation & Local Setup

To run this project locally:

```bash
git clone https://github.com/Shrutika6199/shrutika_portfolio.git
cd shrutika_portfolio
npm install
npm start
