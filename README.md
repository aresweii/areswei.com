# Ares Wei — Personal Portfolio

A clean, dark personal website for experience, competencies, work samples, hobbies and contact details. It is intentionally build-free: open `index.html` or serve the folder with any static web server.

## Edit your content

All personal copy is centralized in `data.js`:

- personal statement and availability
- skills and proficiencies
- 2020–2026 timeline
- work style and strengths
- portfolio projects
- hobbies
- email, LinkedIn, GitHub and location

The current timeline, project cards and contact details are polished draft placeholders. Replace them with verified personal information before publishing.

## Add a real portrait

Replace the `.portrait` initials block in `app.js` with an image:

```html
<img class="portrait" src="assets/ares-wei.jpg" alt="Ares Wei" />
```

Keep the image close to a 4:5 portrait ratio and at least 1200 px tall.

## Run locally

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Deploy

The site can be deployed directly to GitHub Pages, Vercel or Netlify without a build command.

The repository includes a `CNAME` file for the production domain `areswei.com` and a `.nojekyll` marker for GitHub Pages.
