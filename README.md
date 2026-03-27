# ICTP PWF Physics For Bangladesh

This repository contains a GitHub Pages friendly Jekyll website for **ICTP PWF Physics For Bangladesh**. The site is designed for long-term content editing through Markdown collection items and YAML data files rather than layout code changes.

## What This Site Includes

- A dark academic homepage with featured programs, organizers, announcements, and quick links
- A dedicated internship page driven by mentor collection items and FAQ data
- A schools archive page grouped by year
- Individual school pages generated from the `_schools` collection
- Editable organizer, mentor, and announcement collections
- Shared navigation, footer, contact, and homepage settings through `_data/*.yml`

## Local Setup

Install Ruby and Bundler if they are not already available, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open the local preview at `http://127.0.0.1:4000`.

## Main Editing Workflow

### Edit homepage content

Update [_data/homepage.yml](/Users/walid/Documents/Programming/physicsforbangladesh.github.io/_data/homepage.yml) for:

- hero text
- CTA buttons
- featured school slugs
- featured organizer slugs
- highlighted quick links
- current activities cards

### Add or update a school

1. Duplicate a file in [_schools](/Users/walid/Documents/Programming/physicsforbangladesh.github.io/_schools).
2. Update the front matter fields such as `title`, `year`, `status`, `summary`, and `registration_link`.
3. Edit the Markdown body for overview, outline, resources, and organizer notes.
4. If the school should appear on the homepage, add its `slug` to `featured_school_slugs` in [_data/homepage.yml](/Users/walid/Documents/Programming/physicsforbangladesh.github.io/_data/homepage.yml).

### Add or update an organizer

1. Add or edit a Markdown file in [_organizers](/Users/walid/Documents/Programming/physicsforbangladesh.github.io/_organizers).
2. Update name, role, affiliation, short bio, and `featured: true` if needed.
3. Adjust display order using the `order` field.

### Add or update a mentor

1. Add or edit a Markdown file in [_mentors](/Users/walid/Documents/Programming/physicsforbangladesh.github.io/_mentors).
2. Update the mentor name, field, project title, summary, prerequisites, and placeholder contact or application link.
3. Set `active: true` to show the entry on the internship page.

### Update navigation, footer, or contact details

Edit these data files:

- [_data/navigation.yml](/Users/walid/Documents/Programming/physicsforbangladesh.github.io/_data/navigation.yml)
- [_data/contact.yml](/Users/walid/Documents/Programming/physicsforbangladesh.github.io/_data/contact.yml)
- [_data/socials.yml](/Users/walid/Documents/Programming/physicsforbangladesh.github.io/_data/socials.yml)
- [_data/settings.yml](/Users/walid/Documents/Programming/physicsforbangladesh.github.io/_data/settings.yml)

## Git Commands

Initialize the repository and push it to GitHub with:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

If you want the site at `https://YOUR-USERNAME.github.io/`, the repository name must be `YOUR-USERNAME.github.io`.

## GitHub Pages Deployment

For a Jekyll repository on GitHub Pages:

1. Push the repository to GitHub.
2. Open the repository on GitHub.
3. Go to `Settings`.
4. Open `Pages`.
5. Under `Build and deployment`, choose `Source: Deploy from a branch`.
6. Select the `main` branch and the `/(root)` folder.
7. Save the settings and wait for the Pages deployment to finish.

GitHub Pages will build the Jekyll site automatically from the repository contents.

## Content Files You Will Edit Most Often

- [_data/homepage.yml](/Users/walid/Documents/Programming/physicsforbangladesh.github.io/_data/homepage.yml)
- [_data/contact.yml](/Users/walid/Documents/Programming/physicsforbangladesh.github.io/_data/contact.yml)
- [_data/faqs.yml](/Users/walid/Documents/Programming/physicsforbangladesh.github.io/_data/faqs.yml)
- [_schools](/Users/walid/Documents/Programming/physicsforbangladesh.github.io/_schools)
- [_organizers](/Users/walid/Documents/Programming/physicsforbangladesh.github.io/_organizers)
- [_mentors](/Users/walid/Documents/Programming/physicsforbangladesh.github.io/_mentors)
- [_announcements](/Users/walid/Documents/Programming/physicsforbangladesh.github.io/_announcements)

## Notes Before Publishing

- Replace placeholder contact details and application links
- Replace draft timetable notes once schedules are finalized
- Replace placeholder biographies and images
- Review archived program summaries for completeness
- Confirm social and YouTube links
