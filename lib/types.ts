export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type Product = {
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

export type Order = {
  id: string;
  customer: string;
  status: string;
  statusLabel: string;
  total: number;
  items: string[];
};

export type Testimonial = {
  name: string;
  note: string;
  location: string;
};
