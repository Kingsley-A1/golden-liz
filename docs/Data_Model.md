# Golden Liz Mock Data Model

## Source

All prototype data lives in:

```txt
data/golden-liz.json
```

## Entities

### Brand

```ts
type Brand = {
  name: string;
  tagline: string;
  whatsapp: string;
  instagram: string;
  location: string;
};
```

### Category

```ts
type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};
```

### Product

```ts
type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  collection: string;
  price: number;
  compareAtPrice?: number;
  stock: number;
  rating: number;
  image: string;
  description: string;
  highlights: string[];
  tags: string[];
  isBestSeller: boolean;
  isNew: boolean;
};
```

### Order

```ts
type Order = {
  id: string;
  customer: string;
  status: string;
  statusLabel: string;
  total: number;
  items: string[];
};
```

## Production database mapping

Future production migration can map these entities to:

- `brands`
- `categories`
- `products`
- `product_images`
- `product_variants`
- `customers`
- `carts`
- `cart_items`
- `orders`
- `order_items`
- `payments`
- `delivery_events`
- `reviews`

## Important production notes

- Prices should be stored in minor units or integer naira values.
- Product slugs must be unique.
- Stock must be controlled from admin, not frontend.
- Order status changes should be audit logged.
- Payment status and order status must be separate.
- Customer phone number must be normalized before WhatsApp integration.
