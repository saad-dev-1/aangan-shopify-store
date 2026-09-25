# Aangan — A Premium Furniture Store

Aangan is a fictional Pakistani furniture brand I built to sharpen my Shopify and Liquid skills. The goal was simple: create something that felt like a real premium store, not another default Dawn theme demo.

I drew inspiration from Vipp and Audo Copenhagen — both brands that let their products breathe through restraint. No loud banners, no cluttered grids. Just furniture, presented well.

**[View Live Store →](https://aangan-dev.myshopify.com)**  
*(Password: aangan2026)*

---

## The Idea

I wanted to build something that felt genuinely Pakistani without falling into clichés. "Aangan" means courtyard — the heart of a traditional home where families gather. That warmth became the anchor for every design decision.

The result is a dark, warm palette with muted brass accents. It feels premium, but not distant. It feels local, but not dated.

---

## What's Inside

**Design System**
- **Headings:** Clash Display (modern, editorial)
- **Body:** Satoshi (clean, geometric)
- **Colors:** Deep warm charcoal `#1A1614`, warm cream `#F5F0E8`, muted brass `#C4A57B`
- **Mood:** Quiet luxury. Restraint over decoration.

**Custom Sections I Built**
Every section on the homepage was written from scratch in Liquid:
- Full-screen hero with editorial text overlay
- Featured collection grid
- Shop-by-category with four curated cards
- Brand story (2-column editorial layout)
- Newsletter signup
- Custom footer with three-column structure

**Product Page**
- Dark theme with clean typography
- Custom accordions for Delivery, Returns, and Care Instructions
- Brass "Add to Cart" and outlined "Buy It Now" buttons
- Consistent image gallery

**Cart & Checkout**
- Slide-in cart drawer (dark themed)
- COD and Bank Transfer as payment options (because that's how Pakistan shops)

**Extra Touches**
- WhatsApp float button for direct customer chat
- Sticky dark header with clean navigation
- Fully responsive across all devices
- Custom sale badge in brass (to match the theme, not the default teal)

---

## Tech Stack

- **Shopify** with **Dawn** theme as the base
- **Liquid** for templating
- **Custom CSS** for the design system
- **Vanilla JavaScript** for interactions
- **Fontshare** for typography (Clash Display + Satoshi — both free)

---

## Project Structure

aangan-shopify-store/
├── assets/ → CSS, JS, fonts
├── config/ → Theme settings
├── layout/ → theme.liquid
├── sections/ → All custom sections
├── snippets/ → Reusable components
├── templates/ → Page templates
└── locales/ → Translations


Every custom section lives in `sections/` with the `custom-` prefix so you can spot my work easily.

---

## What I Learned

Building Aangan taught me more than any tutorial could:

1. **Liquid is deceptively simple.** It looks like basic templating, but knowing when to use `assign`, `capture`, or inline logic changes everything.

2. **Design systems matter.** Picking colors and fonts isn't enough — the spacing, weight, and rhythm have to work together. I rewrote the Hero section four times before it felt right.

3. **Restraint is hard.** It's easy to add another section. It's much harder to know when to stop.

4. **Development stores are limited.** The password protection can't be disabled, which is why the live demo requires a password. That's a Shopify thing, not a bug.

---

## About Me

I'm **Saad Ahmad**, a frontend developer from Pakistan exploring Shopify theme development. Aangan is my first fully custom Shopify project, and it's the one I'm proudest of so far.

If you're hiring, collaborating, or just want to talk shop — reach out.

- **GitHub:** [@saad-dev-1](https://github.com/saad-dev-1)
- **Email:** sa1717595@gmail.com

---

## A Note

This is a portfolio project built for demonstration. The products, brand, and content are fictional. The code is real, the effort is real, and the learning was real.

If you're a Shopify developer starting out — feel free to look through the sections folder. That's where most of the interesting work lives.
