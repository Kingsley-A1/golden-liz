# Golden Liz Deployment Guide

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Vercel deployment

1. Push project to GitHub.
2. Import repository into Vercel.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Output directory: default.
6. Deploy.

## Environment variables

None are required for the mock prototype.

Future production variables may include:

```txt
NEXT_PUBLIC_SITE_URL=
DATABASE_URL=
PAYSTACK_SECRET_KEY=
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=
WHATSAPP_BUSINESS_TOKEN=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## Production caveats

- Replace mock data with database-backed API.
- Add authentication before admin can modify products.
- Add real payment verification on the server.
- Add stock reservation logic during checkout.
- Use a real image storage provider for product uploads.
