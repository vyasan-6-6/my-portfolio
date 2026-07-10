# Developer Portfolio

A premium, high-performance, dark-themed responsive portfolio website built with HTML5, CSS3, and modern Vanilla ES6 JavaScript.

## Folder Structure

```text
my portfolio/
├── index.html                 # Main layout structure & semantic markup
├── README.md                  # Customization guide (this file)
└── assets/
    ├── css/
    │   ├── main.css           # Core styling system, variables, typography, reset
    │   └── sections.css       # Layout styles for Hero, About, Projects, Contact, Timeline
    ├── js/
    │   └── main.js            # Interactive behaviors (scroll effect, validation)
    ├── images/
    │   ├── profile.png        # Your profile picture (replace this)
    │   └── projects/
    │       ├── project1.png   # Screenshot for Project 1 (replace this)
    │       └── project2.png   # Screenshot for Project 2 (replace this)
    └── resume.pdf             # Your professional PDF resume (replace this)
```

---

## How to Customize

### 1. Update Contact Details & Social Links
To change your name, phone number, email, and social handles:
* Open `index.html`.
* Search for `Vyasan` and replace it with your name.
* Search for `vyasa.dev@email.com` and replace it with your email.
* Search for `+91 98765 43210` and replace it with your phone number.
* Update the links (`href="..."`) for GitHub, LinkedIn, Twitter, and Instagram in both:
  1. The Left Sidebar (`div.sidebar-left`)
  2. The Footer (`div.footer-socials`)

### 2. Change the Profile Photo
* Simply name your profile photo `profile.png` (or `profile.jpg`).
* Place it in `assets/images/`.
* If you use a `.jpg` or `.jpeg` file, open `index.html` and search for `<img src="assets/images/profile.png"...` and change the extension to match your file (e.g., `assets/images/profile.jpg`).

### 3. Replace the Resume PDF
* Rename your resume file to `resume.pdf`.
* Replace the file inside `assets/resume.pdf`.
* The download link is pre-configured to download this file as `Vyasan_Resume.pdf` (you can change the download attribute name in the HTML button if you'd like).

### 4. Edit Skills
* To add or remove skill tags, open `index.html` and locate `<div class="skills-wrapper" id="skills">`.
* Simply add or delete `<span class="skill-tag">Skill Name</span>` tags inside the category containers (Frontend, Backend, Tools).

### 5. Add or Edit Projects
* Place your project screenshot in `assets/images/projects/` (e.g. `my-project.png`).
* Open `index.html` and scroll to the `<section id="projects">` block.
* Duplicate one of the `<article class="project-card glass-panel">` markup containers.
* Update:
  - The image path (`src="assets/images/projects/my-project.png"`)
  - The project title (`<h4 class="project-title">...</h4>`)
  - The tech stack tags (`<span class="project-tech-tag">...</span>`)
  - The 2-4 line description paragraph (`<p class="project-desc">...</p>`)
  - GitHub and Live Demo links in the `project-links` section.

### 6. Interactive Contact Form
* The form uses client-side validation built in `assets/js/main.js`. It checks for correct email pattern, missing inputs, and displays a success/error message overlay.
* You can connect this contact form to free backend handlers like [Formspree](https://formspree.io/), [Netlify Forms](https://www.netlify.com/platform/services/forms/), or [Formsubmit](https://formsubmit.co/) by adding `action="YOUR_FORM_ENDPOINT"` to the `<form>` tag in `index.html` and changing the submit intercept logic in `assets/js/main.js`.
