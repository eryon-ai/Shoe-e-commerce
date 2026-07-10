export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "running" | "lifestyle" | "basketball" | "luxury";
  brand: string;
  image: string;
  gallery: string[];
  sizes: string[];
  colors: string[];
  stock: number;
  tags: string[];
  isNewRelease: boolean;
  isLimited: boolean;
  releaseDate?: string;
  techSpecs?: {
    propulsion?: string;
    midsole?: string;
    upper?: string;
    ergonomics?: string;
    traction?: string;
  };
}

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  heroImage: string;
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface Order {
  id: string;
  date: string;
  status: "Processing" | "Shipped" | "Delivered";
  total: number;
  items: { name: string; quantity: number; price: number }[];
}

export const BRANDS: Brand[] = [
  {
    id: "nike",
    name: "Nike",
    tagline: "Just Do It",
    description: "The global leader in athletic footwear, pushing the boundaries of performance and culture through relentless innovation.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    heroImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=80",
  },
  {
    id: "vault-originals",
    name: "Vault Originals",
    tagline: "Architected for the 1%",
    description: "Our in-house luxury line. Merging avant-garde silhouettes with hyper-premium materials sourced globally.",
    logo: "vault_logo.png",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKUhXAbnbEJLWJl063NFUnTaw227mBON7Ep2GH54XR9eM-7Q7Oruo12jPAetV3XGNz0J-Dso40r5bSVq6LB_8IoaGj9MwxOtZF0vJ1Of_QlJVvdW9n2SbmzPIHmAulouOHfBxTv_a5cSQMWTozAPFtn1J3LpSJxFV9hFTnKVDeoeSnO6_-qBCqNkm2cfrIhdjorsSXKHhayye-FPARx7RL-hVap_YHDmkA8v5mq00A4fLAWai5Lv-DjaiLqfwaivWdupGlTG6Kkz4",
  },
  {
    id: "aethra",
    name: "Aethra",
    tagline: "Step into the Void",
    description: "Cyberpunk aesthetics meeting athletic utility. Aethra is the brand for the neon-drenched future.",
    logo: "aethra_logo.png",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg_TP52w3dJr1RElqsUzz310ivV_URoAXO7c-PnC4hC99tVP0dJWrQGc0hkK6hrMajnThYJaBlP11bPjyEPhCddMi3lDkhQGWN3Xfk3GMTiiTDB0QMw0jzUCuk9Dp5nIkoQYOWYmGrj6ZnAc4L4H0Epom8y2XfBiajTl5od_g8z687Gp-QUN0QZvPQJqlvI0NMxrGz60BD00Y7as945nYqSBd2_Rz3NtSbv38ywRJ-tK-LrPEA7gMpRHWUUencm07pKJyLRohEC70",
  }
];

export const PRODUCTS: Product[] = [
  // RUNNING
  {
    id: "aero-glide-vx",
    name: "Aero Glide vX",
    description: "The ultimate marathon shoe. Features our new Nitro Foam V2 and a full-length carbon plate for explosive energy return.",
    price: 350,
    category: "running",
    brand: "Vault Originals",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKUhXAbnbEJLWJl063NFUnTaw227mBON7Ep2GH54XR9eM-7Q7Oruo12jPAetV3XGNz0J-Dso40r5bSVq6LB_8IoaGj9MwxOtZF0vJ1Of_QlJVvdW9n2SbmzPIHmAulouOHfBxTv_a5cSQMWTozAPFtn1J3LpSJxFV9hFTnKVDeoeSnO6_-qBCqNkm2cfrIhdjorsSXKHhayye-FPARx7RL-hVap_YHDmkA8v5mq00A4fLAWai5Lv-DjaiLqfwaivWdupGlTG6Kkz4",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKUhXAbnbEJLWJl063NFUnTaw227mBON7Ep2GH54XR9eM-7Q7Oruo12jPAetV3XGNz0J-Dso40r5bSVq6LB_8IoaGj9MwxOtZF0vJ1Of_QlJVvdW9n2SbmzPIHmAulouOHfBxTv_a5cSQMWTozAPFtn1J3LpSJxFV9hFTnKVDeoeSnO6_-qBCqNkm2cfrIhdjorsSXKHhayye-FPARx7RL-hVap_YHDmkA8v5mq00A4fLAWai5Lv-DjaiLqfwaivWdupGlTG6Kkz4",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    ],
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
    colors: ["Phantom Black", "Neon Green"],
    stock: 45,
    tags: ["Carbon Plate", "Marathon"],
    isNewRelease: true,
    isLimited: false,
    techSpecs: { propulsion: "Carbon Plate", midsole: "Nitro Foam" }
  },
  {
    id: "strata-runner",
    name: "Strata Runner",
    description: "Everyday mileage meets sleek design. Designed for the urban runner who refuses to compromise on aesthetics.",
    price: 280,
    category: "running",
    brand: "Nike",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm0TkBFPTzstNaLC_fBVvEPxzOrvsOMBG54LouahMzLsmDnM3sUqRzmVtO2C9k66XlK62F68E3wsuOzsoWSa2RVgTQN2sBn6bHb0DuCgcLsZIAZDK1QQhHUS0LhOshKBYCArbkmJT9LjuFCd1lKUdVuMxasbaQIj4enkpallqPKAZdEiw9hPt-KqYywFCQcePE4cR0q409_uHbhrxX1zkEoO-zxzi2MHAZbT0l_wxb96-FhTk25lTD7Q2E1zI6QRR5icxy6vZzVOA",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDm0TkBFPTzstNaLC_fBVvEPxzOrvsOMBG54LouahMzLsmDnM3sUqRzmVtO2C9k66XlK62F68E3wsuOzsoWSa2RVgTQN2sBn6bHb0DuCgcLsZIAZDK1QQhHUS0LhOshKBYCArbkmJT9LjuFCd1lKUdVuMxasbaQIj4enkpallqPKAZdEiw9hPt-KqYywFCQcePE4cR0q409_uHbhrxX1zkEoO-zxzi2MHAZbT0l_wxb96-FhTk25lTD7Q2E1zI6QRR5icxy6vZzVOA",
    ],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    colors: ["Concrete Gray", "White"],
    stock: 120,
    tags: ["Daily Trainer", "Urban"],
    isNewRelease: false,
    isLimited: false,
    techSpecs: { propulsion: "Nylon Plate", midsole: "ZoomX Equivalent" }
  },
  {
    id: "phantom-strider",
    name: "Phantom Strider",
    description: "Ultra-lightweight track spike for the elites. Minimalist upper and aggressive traction.",
    price: 280,
    category: "running",
    brand: "Vault Originals",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdTYNktyUDhU10WV7b0odUSLvkgF93YjufjXKurZbv1eO-bpDfUd1LwSiLcDdinwqXlbAiSU_CDjsAaMsTwa6BegEyjC02NRb2l4OIoQN6BFqQkfu7iMbarCwzuO12HcnKmTiFUE2TfM-hHsK_u2mkV10R5SZ5YVULqUXXlUIQE_TYeMMMHQhVOY4gq_OLsO3chCkIckLxfYgW3ESKUkfkixRu5YVwnFKFJCyNGTiTTmtGyolctJDDLfS73dTHA2qIcoMWklWthBw",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdTYNktyUDhU10WV7b0odUSLvkgF93YjufjXKurZbv1eO-bpDfUd1LwSiLcDdinwqXlbAiSU_CDjsAaMsTwa6BegEyjC02NRb2l4OIoQN6BFqQkfu7iMbarCwzuO12HcnKmTiFUE2TfM-hHsK_u2mkV10R5SZ5YVULqUXXlUIQE_TYeMMMHQhVOY4gq_OLsO3chCkIckLxfYgW3ESKUkfkixRu5YVwnFKFJCyNGTiTTmtGyolctJDDLfS73dTHA2qIcoMWklWthBw"
    ],
    sizes: ["US 9", "US 10", "US 11"],
    colors: ["White/Silver"],
    stock: 30,
    tags: ["Track", "Spikes"],
    isNewRelease: false,
    isLimited: false,
    techSpecs: { propulsion: "Carbon Plate", midsole: "ZoomX Equivalent" }
  },

  // LIFESTYLE
  {
    id: "nexus-high",
    name: "Nexus High",
    description: "Premium high-top silhouette crafted from Italian leather and ballistic mesh. Designed to stand out in the metropolis.",
    price: 420,
    category: "lifestyle",
    brand: "Aethra",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_1tO4rtH4cAV6xl0XgD6yep5TgG2HiS0jRUm1J0ALchvCxqJKkrOwSPjzZpJwFzeR6Fti-vsDMMcoS8IMWEHgXRaZ5tLYKoPilf1uhZRq07GAvqBxqQUQQ7urpfTnKfQUnWwpbHqxs3WNRv28ItcbxEansLlV6fTbb8zZ-XCm2Cekhq2-fRJibdMqIsyH9louEUA9JW6tu_iKT72LI8OCNhSzdVcBWsjOdtUDT0sGGcfvdduRu7skvJ7bZGLKFoKvEFQHGmPYPo0",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_1tO4rtH4cAV6xl0XgD6yep5TgG2HiS0jRUm1J0ALchvCxqJKkrOwSPjzZpJwFzeR6Fti-vsDMMcoS8IMWEHgXRaZ5tLYKoPilf1uhZRq07GAvqBxqQUQQ7urpfTnKfQUnWwpbHqxs3WNRv28ItcbxEansLlV6fTbb8zZ-XCm2Cekhq2-fRJibdMqIsyH9louEUA9JW6tu_iKT72LI8OCNhSzdVcBWsjOdtUDT0sGGcfvdduRu7skvJ7bZGLKFoKvEFQHGmPYPo0",
    ],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    colors: ["Ultraviolet", "Obsidian"],
    stock: 12,
    tags: ["High-Top", "Leather"],
    isNewRelease: true,
    isLimited: true,
    techSpecs: { upper: "Full-Grain Leather", ergonomics: "Ortholite Sockliner" }
  },
  {
    id: "novaknit-stratos",
    name: "NovaKnit Stratos",
    description: "Our signature breathable primeknit weave paired with a chunky, futuristic sole unit.",
    price: 450,
    category: "lifestyle",
    brand: "Vault Originals",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBruCLCF5oYrvOMUYAc2dmtegxpzWwzCaPdfHDUD5LirAr3NuGYPd3WhOYIFDi4rFcW-OiBwfpCKVYA5hl_VgZWL_WdKSG88oJZACDFcYEjPZSAUU96oSULjVpIkSmB28DqyFpFnWRVLdyGL8Eb4gKoPc9ROKj96gT8VKBUCgraEiKyZfSL7c0dJlBEa49vWIxNx1vz1Pxbux0x-bVvOH9HTGXv0C6uCep-TUDAXqyjyB-NHj0Xw-j7c-pUdE0ncvykOqQQ2I4H9xQ",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBruCLCF5oYrvOMUYAc2dmtegxpzWwzCaPdfHDUD5LirAr3NuGYPd3WhOYIFDi4rFcW-OiBwfpCKVYA5hl_VgZWL_WdKSG88oJZACDFcYEjPZSAUU96oSULjVpIkSmB28DqyFpFnWRVLdyGL8Eb4gKoPc9ROKj96gT8VKBUCgraEiKyZfSL7c0dJlBEa49vWIxNx1vz1Pxbux0x-bVvOH9HTGXv0C6uCep-TUDAXqyjyB-NHj0Xw-j7c-pUdE0ncvykOqQQ2I4H9xQ"
    ],
    sizes: ["US 8", "US 9", "US 10.5", "US 12"],
    colors: ["Cloud White", "Carbon"],
    stock: 200,
    tags: ["Knit", "Chunky Sole"],
    isNewRelease: false,
    isLimited: false,
    techSpecs: { upper: "Primeknit", ergonomics: "Sock-like Fit" }
  },
  {
    id: "crimson-velocity",
    name: "Crimson Velocity",
    description: "Bold, red, aggressive. The Crimson Velocity brings track inspiration to the streets.",
    price: 195,
    category: "lifestyle",
    brand: "Nike",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG0_lRDo_KPHGoFZoI-RrAJQJvXN_iFKeufQM4tvNjnE-jOVom_xs8hCNctAerUBsbQzxqMttA8Kspn6nhVJ0elkTjx1VnVg8KMfeqJJbZ7r2w9jnjUkfFAjBGDZ6L4IoIZJ-li8MGxMFIX6hXba4BipWdSfcfQScdVOpBNWzb2MqdKFIKfIxKebgpPoAkGbkdOrGWNFr62BuYOao0gkTQPa5eeVEGO0Gnr9l8-50CsW1Vj-tQ6otHriat-gKWSw_Xh87oGLAbdK4",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCG0_lRDo_KPHGoFZoI-RrAJQJvXN_iFKeufQM4tvNjnE-jOVom_xs8hCNctAerUBsbQzxqMttA8Kspn6nhVJ0elkTjx1VnVg8KMfeqJJbZ7r2w9jnjUkfFAjBGDZ6L4IoIZJ-li8MGxMFIX6hXba4BipWdSfcfQScdVOpBNWzb2MqdKFIKfIxKebgpPoAkGbkdOrGWNFr62BuYOao0gkTQPa5eeVEGO0Gnr9l8-50CsW1Vj-tQ6otHriat-gKWSw_Xh87oGLAbdK4"
    ],
    sizes: ["US 6", "US 7", "US 8"],
    colors: ["Blood Red"],
    stock: 5,
    tags: ["Streetwear", "Bold"],
    isNewRelease: false,
    isLimited: false,
    techSpecs: { upper: "Primeknit", ergonomics: "Ortholite Sockliner" }
  },

  // BASKETBALL
  {
    id: "aethra-void-walker",
    name: "Aethra Void Walker",
    description: "Engineered for maximum lateral stability and explosive vertical energy return on the hardwood.",
    price: 850,
    category: "basketball",
    brand: "Aethra",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg_TP52w3dJr1RElqsUzz310ivV_URoAXO7c-PnC4hC99tVP0dJWrQGc0hkK6hrMajnThYJaBlP11bPjyEPhCddMi3lDkhQGWN3Xfk3GMTiiTDB0QMw0jzUCuk9Dp5nIkoQYOWYmGrj6ZnAc4L4H0Epom8y2XfBiajTl5od_g8z687Gp-QUN0QZvPQJqlvI0NMxrGz60BD00Y7as945nYqSBd2_Rz3NtSbv38ywRJ-tK-LrPEA7gMpRHWUUencm07pKJyLRohEC70",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAg_TP52w3dJr1RElqsUzz310ivV_URoAXO7c-PnC4hC99tVP0dJWrQGc0hkK6hrMajnThYJaBlP11bPjyEPhCddMi3lDkhQGWN3Xfk3GMTiiTDB0QMw0jzUCuk9Dp5nIkoQYOWYmGrj6ZnAc4L4H0Epom8y2XfBiajTl5od_g8z687Gp-QUN0QZvPQJqlvI0NMxrGz60BD00Y7as945nYqSBd2_Rz3NtSbv38ywRJ-tK-LrPEA7gMpRHWUUencm07pKJyLRohEC70"
    ],
    sizes: ["US 9", "US 10", "US 11", "US 12", "US 13"],
    colors: ["Cyber Black"],
    stock: 2,
    tags: ["High-Top", "Performance"],
    isNewRelease: false,
    isLimited: true,
    techSpecs: { upper: "High-Top Collar", ergonomics: "Dynamic Fit Straps" }
  },
  {
    id: "heavy-step-x1",
    name: "Heavy Step X1",
    description: "Built like a tank. Provides unmatched lockdown and ankle support for centers and power forwards.",
    price: 310,
    category: "basketball",
    brand: "Vault Originals",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1M_Efy3Qb_mA2x3VZTNIUzkOxGd4scr1CfiEiCXGTH5DYwmOrlmszUDx0wFs2GSfpxws43wzmf6M5iVDCBv6_3leD2jpb3xr2x1Fq2MwnBxTcXK-utMda1VYTfjgXHqTQQ6RGeRyMCc0ip_k89io8kxKqPk2vElEFViytzi_ugLi7MqyNxHCv9KsLYRNduYRHdhwx_FmeUAoJk1CrFDS6CupERZQTyRrshCU5MBLaZGM6Ck_BGDZOwvecZN9da5jC22bk7vu69Ww",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1M_Efy3Qb_mA2x3VZTNIUzkOxGd4scr1CfiEiCXGTH5DYwmOrlmszUDx0wFs2GSfpxws43wzmf6M5iVDCBv6_3leD2jpb3xr2x1Fq2MwnBxTcXK-utMda1VYTfjgXHqTQQ6RGeRyMCc0ip_k89io8kxKqPk2vElEFViytzi_ugLi7MqyNxHCv9KsLYRNduYRHdhwx_FmeUAoJk1CrFDS6CupERZQTyRrshCU5MBLaZGM6Ck_BGDZOwvecZN9da5jC22bk7vu69Ww"
    ],
    sizes: ["US 10", "US 11", "US 12", "US 13", "US 14"],
    colors: ["Industrial Orange", "Black"],
    stock: 75,
    tags: ["Mid-Cut", "Lockdown"],
    isNewRelease: true,
    isLimited: false,
    techSpecs: { upper: "Mid-Cut Support", ergonomics: "Secure Eyelet Cage" }
  },

  // LUXURY
  {
    id: "quantum-aero-x",
    name: "Quantum Aero-X",
    description: "Handcrafted in Milan. Titanium lace tips, hyper-reflective paneling, and an anti-gravity sole unit.",
    price: 1200,
    category: "luxury",
    brand: "Vault Originals",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBl3L3eRSeB_1sTfLlzbWtNt2NjmzA-PXbehvrOBKn9ZHA3xNyGBrF15wmfBjRoWFlROmgmfDrn_tK94is9fK_cPZ-CfDdIeiGb45VVYqU5GU6Qknqd6ZE9Nnrl9bj8BJkkncfQFmnPGdEN4WePF-X7KhrOH-p2B2bg2j5bjbMXsR6SQ6XwxARkFswybvmd0YcrsZOnhoBYmxUqUaIvsoUxSGlA11ikS1VnkW2iLq2_GTXnjMGRoXgD87x7eWch679h-u6qPFhQWY",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBl3L3eRSeB_1sTfLlzbWtNt2NjmzA-PXbehvrOBKn9ZHA3xNyGBrF15wmfBjRoWFlROmgmfDrn_tK94is9fK_cPZ-CfDdIeiGb45VVYqU5GU6Qknqd6ZE9Nnrl9bj8BJkkncfQFmnPGdEN4WePF-X7KhrOH-p2B2bg2j5bjbMXsR6SQ6XwxARkFswybvmd0YcrsZOnhoBYmxUqUaIvsoUxSGlA11ikS1VnkW2iLq2_GTXnjMGRoXgD87x7eWch679h-u6qPFhQWY",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
    ],
    sizes: ["US 8", "US 9", "US 10", "US 11"],
    colors: ["Gold/Black", "Platinum"],
    stock: 10,
    tags: ["Handcrafted", "Titanium"],
    isNewRelease: true,
    isLimited: true,
  },
  {
    id: "apex-synthwave",
    name: "Apex Synthwave",
    description: "Nostalgic 80s aesthetics constructed with 22nd-century materials. A glowing masterpiece.",
    price: 950,
    category: "luxury",
    brand: "Aethra",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnm7JXk7D4JIm8YrQoACB5MdTCw67sBs4gvHoUeHrui9hjiHtFCqkywcQGEecSlXqXaiiDsxyWaLYRWYrXw-au-ROIYqzL45WiIttIPbh-94k5wtNSlpFwVidqvf4QezfiDAfTqYEKORPfvnh-9dmHUtnozv1pjExitvokfPcM4yHSOFmYY-wX_DH8RmyynkM3-yupDyFAW3_qW0aJjzOz1zqp8ugShsT7sXwzpw6KYXKPrsqacbBisxBIlCn4AZP0UrzYvnCZv5c",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnm7JXk7D4JIm8YrQoACB5MdTCw67sBs4gvHoUeHrui9hjiHtFCqkywcQGEecSlXqXaiiDsxyWaLYRWYrXw-au-ROIYqzL45WiIttIPbh-94k5wtNSlpFwVidqvf4QezfiDAfTqYEKORPfvnh-9dmHUtnozv1pjExitvokfPcM4yHSOFmYY-wX_DH8RmyynkM3-yupDyFAW3_qW0aJjzOz1zqp8ugShsT7sXwzpw6KYXKPrsqacbBisxBIlCn4AZP0UrzYvnCZv5c"
    ],
    sizes: ["US 7", "US 8", "US 9"],
    colors: ["Neon Blue/Pink"],
    stock: 15,
    tags: ["Retro", "Light-up"],
    isNewRelease: false,
    isLimited: true,
  },
];

export const STORIES: Story[] = [
  {
    id: "evolution-of-air",
    title: "The Evolution of Air",
    excerpt: "How pressurized gas revolutionized athletic performance forever.",
    content: [
      "The concept of 'air' as a cushioning system was once radical. Today, it is ubiquitous. We trace the lineage from the first prototypes that exploded under pressure to the microscopic tuning of modern multi-chamber units.",
      "Engineers didn't just want to cushion impact; they wanted to return energy. The quest for the perfect bounce took decades of aerospace-grade materials testing."
    ],
    author: "Editorial Team",
    date: "2024-10-15",
    image: "https://images.unsplash.com/photo-1552346154-21d32810baa3?w=800&q=80",
    category: "Innovation"
  },
  {
    id: "aethra-interview",
    title: "Into the Void: Interview with Aethra Lead Designer",
    excerpt: "Discussing the controversial aesthetics of the Void Walker V2.",
    content: [
      "'We wanted to make a shoe that looked like a weapon,' says lead designer Kaelen Vance. 'Something that felt intimidating on the court.'",
      "The use of radar-absorbent materials on a basketball shoe caused a stir, but Vance insists it's about the psychological edge."
    ],
    author: "J. Miller",
    date: "2024-11-02",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    category: "Interviews"
  },
  {
    id: "vault-originals-manifesto",
    title: "Architected for the 1%: The Vault Manifesto",
    excerpt: "Why exclusivity matters in a world of mass production.",
    content: [
      "True luxury cannot be scaled. It requires time, precision, and an absolute refusal to compromise.",
      "Every Vault Original is hand-finished. We don't make shoes for everyone; we make artifacts for the few who understand."
    ],
    author: "Vault Founder",
    date: "2024-11-20",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_1tO4rtH4cAV6xl0XgD6yep5TgG2HiS0jRUm1J0ALchvCxqJKkrOwSPjzZpJwFzeR6Fti-vsDMMcoS8IMWEHgXRaZ5tLYKoPilf1uhZRq07GAvqBxqQUQQ7urpfTnKfQUnWwpbHqxs3WNRv28ItcbxEansLlV6fTbb8zZ-XCm2Cekhq2-fRJibdMqIsyH9louEUA9JW6tu_iKT72LI8OCNhSzdVcBWsjOdtUDT0sGGcfvdduRu7skvJ7bZGLKFoKvEFQHGmPYPo0",
    category: "Culture"
  }
];

export const MOCK_ORDERS: Order[] = [
  {
    id: "ORD-99281-VE",
    date: "Oct 24, 2024",
    status: "Delivered",
    total: 850,
    items: [
      { name: "Aethra Void Walker", quantity: 1, price: 850 }
    ]
  },
  {
    id: "ORD-88124-VE",
    date: "Nov 02, 2024",
    status: "Shipped",
    total: 350,
    items: [
      { name: "Aero Glide vX", quantity: 1, price: 350 }
    ]
  },
  {
    id: "ORD-77119-VE",
    date: "Nov 25, 2024",
    status: "Processing",
    total: 1200,
    items: [
      { name: "Quantum Aero-X", quantity: 1, price: 1200 }
    ]
  }
];
