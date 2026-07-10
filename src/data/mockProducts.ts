export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  isLimited: boolean;
  releaseDate?: string;
  description: string;
  sizes: string[];
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Air Max Pulse",
    brand: "Nike",
    price: 150,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    category: "Running",
    isLimited: false,
    description: "The Air Max Pulse pulls inspiration from the London music scene, bringing an underground touch to the iconic Air Max line.",
    sizes: ["US 8", "US 9", "US 10", "US 11"],
  },
  {
    id: "2",
    name: "Yeezy Boost 350 V2",
    brand: "Adidas",
    price: 230,
    image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=800&q=80",
    category: "Lifestyle",
    isLimited: true,
    releaseDate: "2026-06-01T00:00:00Z",
    description: "The YEEZY BOOST 350 V2 features an upper composed of re-engineered Primeknit. The post-dyed monofilament side stripe is woven into the upper.",
    sizes: ["US 7", "US 8", "US 9", "US 10"],
  },
  {
    id: "3",
    name: "Jordan 1 Retro High",
    brand: "Nike",
    price: 170,
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&q=80",
    category: "Basketball",
    isLimited: false,
    description: "Familiar but always fresh, the iconic Air Jordan 1 is remastered for today's sneakerhead culture.",
    sizes: ["US 9", "US 10", "US 11", "US 12"],
  },
  {
    id: "4",
    name: "Gel-Kayano 14",
    brand: "ASICS",
    price: 160,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
    category: "Running",
    isLimited: false,
    description: "Conveying a new perception to the retro running shape, the GEL-KAYANO 14 running shoe resurfaces with its late 2000s aesthetic.",
    sizes: ["US 8.5", "US 9.5", "US 10.5"],
  }
];
