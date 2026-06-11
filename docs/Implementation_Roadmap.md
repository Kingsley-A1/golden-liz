# Golden Liz Implementation Roadmap

## Phase 1 — Prototype foundation

Goal: make the project visually convincing and testable.

Deliverables:

- Homepage
- Product listing
- Product detail
- Cart
- Checkout
- Confirmation
- Account preview
- Admin preview
- Mock JSON data
- Design system alignment

## Phase 2 — Interaction polish

Goal: make the prototype feel like a real ecommerce site.

Deliverables:

- Category filters using search params
- Product sort: newest, price low-high, price high-low, bestseller
- Cart state using local storage or lightweight state management
- Quantity changes
- Remove item from cart
- Checkout validation
- Toast feedback
- Loading and empty states

## Phase 3 — Client demo readiness

Goal: make the prototype persuasive in a live presentation.

Deliverables:

- Replace placeholder contact details with client details
- Add client logo if available
- Add real product list if available
- Create “Why this website helps your business” admin insight panel
- Add WhatsApp deep links
- Deploy to Vercel
- Test on Android phone first

## Phase 4 — Production upgrade

Goal: turn the prototype into a real business tool.

Deliverables:

- Supabase/Postgres database
- Admin authentication
- Product CRUD
- Image upload
- Order management
- Paystack/Flutterwave integration
- WhatsApp notification flow
- Delivery status tracking
- Customer accounts
- Analytics
- SEO metadata

## Technical standards

- Keep components reusable.
- Keep data access in `lib/data.ts`.
- Use TypeScript types for every entity.
- Do not hardcode product data inside components.
- Use `next/image` for remote images.
- Keep mobile layout first.
- Preserve design tokens from `globals.css` and `tailwind.config.ts`.
