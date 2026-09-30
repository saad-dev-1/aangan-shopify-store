# Aangan

I built a furniture store to see if I could.

Not for a client. Not for a job. Just to know whether I could take a vague idea — "make something that looks like Vipp, but for Pakistan" — and turn it into something that actually works.

The brand is fictional. The products don't exist. The craft is real.

**[Live store →](https://aangan-dev.myshopify.com)**
Password: `aangan2026`

---

## The Idea

Aangan (آنگن) means courtyard. The open space in a traditional home where everyone ends up — chai gets made, stories get told, nobody wants to leave.

I wanted the store to feel like that space. Warm. Quiet. The kind of place you'd stay in longer than you planned to.

Furniture because it's visual. Get the design wrong and there's nowhere to hide.

Pakistan because I'm from here, and I wanted to build something that felt like it belonged to this part of the world.

---

## The Design

Most Pakistani e-commerce sites look the same — white backgrounds, blue buttons, stock photos of families who've never been to Lahore.

I went the other direction.

|  |  |
|---|---|
| **Base** | `#1A1614` — warm charcoal, not black |
| **Text** | `#F5F0E8` — cream, not white |
| **Accent** | `#C4A57B` — muted brass |
| **Headings** | Clash Display |
| **Body** | Satoshi |

Brass is the only color in the entire design. Everything else is a shade of warm dark. That restraint is what makes it feel expensive.

---

## What's Inside

**Homepage.** Full-screen hero, featured collection, category cards, brand story, AJAX newsletter. Every section is custom Liquid — nothing pulled from Dawn's defaults.

**Product pages.** Image gallery with a swipeable carousel on mobile. Accordion tabs for delivery, returns, and care. Brass add-to-cart, outlined buy-it-now.

**Cart.** Slides in from the right. Quantity controls, subtotal, checkout. On a 375px phone, everything fits without a scrollbar.

**Details that matter.** Cash on Delivery and Bank Transfer — because that's how Pakistan actually shops. WhatsApp button for customer questions. Styled 404. Fully responsive from 320px to 1920px.

---

## Interesting Problems

**Mobile cart drawer.** Shopify's default cart grid is built for desktop. Making it work cleanly at 375px required rebuilding the layout with flexbox, then carefully managing padding, quantity buttons, and price wrapping so nothing collided.

**Image aspect ratios.** Shopify calculates each image's aspect ratio on the backend and injects it as an inline style. Getting square product images on mobile meant working around that with absolute positioning and forced `object-fit`.

**Form behavior.** The default newsletter form triggered a captcha on every submission — bad UX for a store that needs subscribers. I rewrote it as an AJAX handler that submits in the background, no reload required.

---

## The Stack

Shopify, Dawn theme as the base. Everything past that is custom.

- **Liquid** for templating
- **~800 lines** of custom CSS
- **Vanilla JavaScript** for cart and forms
- **Fontshare** for typography

No React. No Node. No build step. When there's no framework deciding how things work, you understand the platform itself at a deeper level.

---

## Structure
aangan-shopify-store/
├── assets/ → custom CSS + JS
├── config/ → theme settings
├── layout/ → theme.liquid
├── sections/ → custom Liquid sections
│ ├── custom-hero.liquid
│ ├── custom-featured.liquid
│ ├── custom-categories.liquid
│ ├── custom-brand-story.liquid
│ └── custom-newsletter.liquid
├── snippets/ → reusable components
│ └── whatsapp-button.liquid
└── templates/ → page templates


Every section I wrote has `custom-` in front. That's the fastest way to see what I built versus what came with Dawn.

---

## What I'd Do Different Next Time

**Build the cart first.** It's the most complex piece of the project, and doing it last meant I had to retrofit decisions into existing structure. Next time, cart comes first.

**Design in Figma before coding.** Building directly in code is fast for the first draft and slow for every revision after. A proper design pass would have saved time overall.

---

## Me

Saad Ahmad. Jauharabad, Pakistan. Self-taught.

I build things because I like building things.

This is my first Shopify project. It won't be my last.

- GitHub: [@saad-dev-1](https://github.com/saad-dev-1)
- Email: sa1717595@gmail.com

---

The furniture isn't real. The work is.
