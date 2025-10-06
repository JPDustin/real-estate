// lib/data.ts
export type Listing = {
  slug: string;
  title: string;
  price: number;
  city: string;
  country: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  highlights: string[];
  image: string;
};

export const listings: Listing[] = [
  {
    slug: "spo-ford-lake-retreat",
    title: "Lakefront Retreat on Spofford Lake",
    price: 1450000,
    city: "Chesterfield",
    country: "USA",
    bedrooms: 4,
    bathrooms: 3,
    area: 3800,
    description:
      "This custom-built home offers stunning views of Spofford Lake, a private dock, and expansive decks perfect for entertaining.",
    highlights: ["Private dock", "Panoramic lake views", "Stone fireplace"],
    image:
      "https://images.unsplash.com/photo-1751898250235-25d76c8b1835?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "peterborough-village-estate",
    title: "Historic Village Estate in Peterborough",
    price: 1195000,
    city: "Peterborough",
    country: "USA",
    bedrooms: 5,
    bathrooms: 4,
    area: 5200,
    description:
      "A classic New England estate with beautifully preserved architecture, updated modern amenities, and manicured gardens.",
    highlights: ["Period details", "Chef’s kitchen", "Walk to town"],
    image:
      "https://images.unsplash.com/photo-1751844028562-9d49ecf93cd7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "keene-modern-retreat",
    title: "Modern Country Retreat near Keene",
    price: 875000,
    city: "Keene",
    country: "USA",
    bedrooms: 3,
    bathrooms: 3,
    area: 2900,
    description:
      "Set on 12 acres with rolling meadows, this modern retreat blends sleek architecture with serene countryside living.",
    highlights: ["Barn with stalls", "Solar panels", "Mountain views"],
    image: "/images/modern.png",
  },
  {
    slug: "walpole-hilltop-estate",
    title: "Hilltop Estate in Historic Walpole",
    price: 1980000,
    city: "Walpole",
    country: "USA",
    bedrooms: 6,
    bathrooms: 6,
    area: 6200,
    description:
      "Perched on a hill overlooking the Connecticut River Valley, this estate combines luxury with timeless New England charm.",
    highlights: ["River valley views", "Indoor pool", "Wine cellar"],
    image: "/images/walpole.png",
  },
  {
    slug: "jaffrey-mount-monadnock-view",
    title: "Estate with Mount Monadnock Views",
    price: 1595000,
    city: "Jaffrey",
    country: "USA",
    bedrooms: 5,
    bathrooms: 5,
    area: 4500,
    description:
      "Elegant home offering direct views of Mount Monadnock, open-concept living spaces, and private walking trails.",
    highlights: ["Mountain views", "Private trails", "Chef’s kitchen"],
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "harrisville-waterfront-colonial",
    title: "Waterfront Colonial in Harrisville",
    price: 1325000,
    city: "Harrisville",
    country: "USA",
    bedrooms: 4,
    bathrooms: 3,
    area: 3600,
    description:
      "A restored Colonial with waterfront access to pristine Harrisville Pond, combining history and modern luxury.",
    highlights: [
      "Waterfront access",
      "Restored colonial details",
      "Screened porch",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687220-6f9fdf5fcd6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
];
