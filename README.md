# IRONX — Gym & Fitness Website

A modern, animated gym website for a Dhaka-based fitness club, built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**. Dark, high-energy aesthetic with scroll animations, an interactive class list, a training carousel, membership packages in BDT, programs, trainers and a contact form.

## Tech stack

- **Next.js 14** (App Router, JavaScript/JSX)
- **Tailwind CSS 3**
- **Framer Motion** for scroll & interaction animations
- **lucide-react** for icons
- Google Fonts: Anton (display), Oswald (headings), Inter (body)

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

To build for production:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.jsx          # Root layout, fonts, navbar + footer
  page.jsx            # Homepage (all sections)
  globals.css         # Tailwind + custom styles
  classes/page.jsx    # Classes & Programs page
  trainers/page.jsx   # Trainers page
  contact/page.jsx    # Contact + form page
components/            # All UI sections (Hero, Packages, Trainers, etc.)
lib/data.js           # ← Edit all copy, prices, trainers & images here
```

## Customising

- **Content & prices:** edit `lib/data.js` (membership packages, programs, trainers, classes, testimonials, contact details).
- **Colours:** the "volt" accent and dark palette live in `tailwind.config.js`.
- **Images:** currently loaded from Unsplash — swap the URLs in `lib/data.js` and the components for your own gym photos.
- **Contact form:** it's front-end only. Wire the `onSubmit` in `components/ContactForm.jsx` to an API route or email service (e.g. Resend, Formspree) to receive real leads.

## Membership packages

| Plan | Price |
|------|-------|
| 1 Month | ৳1,500 |
| 4 Months | ৳4,000 |
| 6 Months | ৳5,000 |
| 1 Year | ৳10,000 |

---

Built with Next.js & Tailwind CSS.
