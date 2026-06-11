# Golden Liz Design System

## 1. Product Identity

**Project name:** Golden Liz  
**Business type:** Boutique cosmetics and jewellery store for women  
**Primary business goal:** Convince a potential client that a professional website can increase trust, product clarity, customer confidence, and order quality beyond social media-only selling.  
**Build type:** Mobile-first ecommerce prototype with mock JSON data.

Golden Liz must feel aesthetic, feminine, premium, clear, soft, warm, trustworthy, and commercial. The UI should communicate boutique luxury without looking expensive to operate or difficult to maintain.

## 2. Design Principles

1. **Mobile first, always.** Most boutique customers will browse from phones. Design for 360px–430px first, then scale upward.
2. **Gold is an accent, not a flood.** Gold should guide attention, not overwhelm the page.
3. **Soft luxury over loud luxury.** Avoid harsh black-gold cliché design. Use ivory, champagne, blush, espresso, plum, and controlled gold.
4. **Product confidence first.** Cards, images, descriptions, stock states, and checkout must reduce buyer uncertainty.
5. **Clean selling.** Every page should quietly move the user toward browsing, adding to bag, or contacting the boutique.
6. **Trust before decoration.** Show delivery, authenticity, WhatsApp support, order tracking, and gift packaging clearly.

## 3. Brand Personality

Golden Liz speaks like a premium boutique assistant:

- warm but not childish
- elegant but not cold
- confident but not hype-driven
- short, clear, and helpful
- feminine without being cluttered

Avoid:

- shouting in all caps
- excessive emojis
- cheap sales language
- random gradients
- crowded product cards
- low-contrast gold text on white

## 4. Colour System

### Core palette

| Token | Hex | Usage |
|---|---:|---|
| Golden Gold | `#C9A227` | Primary CTA, badges, highlights, focus states |
| Deep Gold | `#9F7412` | Hover states, premium labels, stronger gold text |
| Champagne | `#F8F1E3` | Soft section backgrounds, product filter panels |
| Cream | `#FFF9F0` | Main background, warm page base |
| Blush | `#F7E7E3` | Feminine secondary surface, new product labels |
| Soft Rose | `#D89BA7` | Subtle accents, beauty-themed highlights |
| Espresso | `#2A1B16` | Premium dark sections, footer, high-contrast text |
| Plum | `#4A2638` | Luxury CTA section, consultation banner |
| Sage | `#71816D` | Trust, calm states, future sustainability tags |
| Charcoal | `#1F1A17` | Main text when espresso is too heavy |
| White | `#FFFFFF` | Cards, product surfaces, forms |

### Usage rules

- Primary CTA: gold background with white text.
- Hero background: cream/champagne/blush gradient.
- Dark luxury section: espresso or plum with cream text.
- Product cards: white surface, champagne border/hover, gold badges.
- Avoid gold text on pure white unless the gold is deep enough and font size is readable.
- Do not use more than three accent colours in one section.

## 5. Typography

### Recommended pairing

- Display font: Playfair Display, Cormorant Garamond, or a similar elegant serif.
- UI font: Inter, Manrope, or system sans-serif.

### Type scale

| Element | Mobile | Desktop | Notes |
|---|---:|---:|---|
| Hero heading | 48px | 72px | Tight leading, display font |
| Section heading | 32px | 48px | Display font |
| Product title | 16px | 18px | Semibold sans |
| Body text | 16px | 18px | Comfortable line-height |
| Metadata | 12px–14px | 12px–14px | Uppercase only for labels |

## 6. Layout System

### Spacing

Use Tailwind spacing consistently:

- Page section mobile: `py-8` to `py-12`
- Page section desktop: `md:py-14` to `md:py-20`
- Card padding: `p-4` mobile, `p-5/p-6` desktop
- Grid gaps: `gap-4`, `gap-5`, `gap-8`

### Radius

Golden Liz should be soft and premium:

- Small controls: `rounded-full`
- Cards: `rounded-[1.5rem]`
- Hero imagery: `rounded-[2.5rem]`
- Product images: card radius inherited, image fully clipped

### Shadows

Use soft shadows only:

- `shadow-soft`: calm elevation
- `shadow-glow`: gold-tinted hero/CTA emphasis

Avoid hard black shadows.

## 7. Component Rules

### Header

- Sticky top header.
- Logo left: circular GL mark + wordmark.
- Desktop nav: Shop, Cosmetics, Jewellery, Orders.
- Mobile: keep icons simple; do not crowd header.
- Bag icon always visible.

### Hero

Purpose: convince quickly.

Must include:

- Short boutique badge.
- Strong emotional heading.
- One short paragraph.
- Primary CTA: Shop Collection.
- Secondary CTA: View Lookbook.
- One premium image panel.
- Trust chips: authentic picks, delivery ready, gift friendly.

Avoid long hero text.

### Product Card

Must include:

- Product image.
- Category label.
- New/Bestseller badges where applicable.
- Rating.
- Product name.
- 1–2 line description.
- Price.
- Add button.

Never cram size, stock, reviews, variants, and long descriptions into the card.

### Product Detail

Must include:

- Large image.
- Category and lifecycle badges.
- Clear product name.
- Description.
- Price.
- Add to Bag CTA.
- Highlights.
- Trust details: authenticity, delivery, gift-ready.

Future production upgrades:

- shade selector
- size selector
- quantity selector
- recently viewed
- related products

### Cart

Cart should be calm and clear:

- product image
- product name
- quantity
- price
- subtotal
- delivery estimate
- total
- checkout CTA

### Checkout

Use low-friction fields:

- Full name
- WhatsApp/phone
- Email
- Delivery address
- Order note

For prototype: mock payment only.  
For production: Paystack, Flutterwave, bank transfer confirmation, or WhatsApp-assisted checkout.

### Confirmation

Must communicate:

- order ID
- order status
- next step
- track order CTA
- continue shopping CTA

### Account

Show:

- total orders
- loyalty points
- saved preferences
- recent orders
- order status

### Admin

Show the business owner why the website matters:

- revenue snapshot
- product count
- low stock count
- open orders
- order lifecycle
- low-stock attention

This page is important for client persuasion.

## 8. Product / Order Lifecycle

### Customer lifecycle

`visitor → product_viewed → cart_started → checkout_started → order_confirmed → packed → out_for_delivery → delivered → repeat_customer`

### Order lifecycle

`draft → pending_confirmation → confirmed → packed → out_for_delivery → delivered → completed`

Exception statuses:

`cancelled → refunded → unavailable → failed_payment`

Use lifecycle language that customers understand. Do not expose technical status names in the UI.

## 9. Data Model

The prototype uses `data/golden-liz.json`.

Minimum entities:

- brand
- categories
- products
- orders
- testimonials

Every product must include:

- id
- slug
- name
- category
- collection
- price
- stock
- rating
- image
- description
- highlights
- tags
- isBestSeller
- isNew

## 10. Imagery Rules

Images should feel:

- clean
- feminine
- premium
- well-lit
- soft but sharp
- close-up enough for product confidence

Use cosmetics, skincare, jewellery, fragrance, packaging, and soft lifestyle details.

Avoid:

- noisy backgrounds
- low-resolution images
- fake luxury mansion aesthetics
- harsh black-gold stock graphics
- over-retouched models
- random unrelated women photos that distract from products

## 11. Content Rules

### Copy tone

Good:

- “Beauty pieces that feel golden before you wear them.”
- “Shop curated cosmetics, skincare, fragrance, and jewellery in one premium boutique experience.”
- “A cleaner way to browse, choose, order, and track your favourite pieces.”

Avoid:

- “Best quality products at affordable prices!!!”
- “We sell all kinds of makeup and jewellries.”
- “Luxury lifestyle queen boss babe collection.”

### CTA language

Use:

- Shop Collection
- Add to Bag
- Proceed to Checkout
- Track Order
- View Lookbook
- Start shopping

Avoid:

- Buy Now everywhere
- Click Here
- Order Fast
- DM Now!!!

## 12. Accessibility Rules

- Maintain readable contrast.
- Do not use light gold for small text on white.
- Every image must have meaningful alt text.
- Buttons need visible focus states.
- Tap targets should be at least 44px tall.
- Mobile forms need clear labels, not placeholder-only fields.

## 13. Agent Guardrails

Agents must not:

- change the brand into a generic ecommerce store
- overuse gold gradients
- make the site look like a crypto/finance landing page
- add fake payment claims
- add real brand names without permission
- use cluttered product cards
- bury the checkout CTA
- remove mock JSON structure
- ignore mobile-first layout

Agents must:

- preserve the colour system
- preserve premium whitespace
- keep product data easy to replace
- make the prototype testable
- keep components reusable
- document any production assumption

## 14. Quality Bar

The project is ready when:

- homepage looks premium on mobile
- product listing is visually clean
- product detail creates trust
- cart and checkout are testable
- account and admin pages show lifecycle thinking
- design system matches implementation
- mock data is easy for a client to understand
- no page feels generic, crowded, or cheap
