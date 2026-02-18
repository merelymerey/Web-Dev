import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 16 128GB Black',
      description: 'Powered by the A18 chip with a 48 MP main camera and Action button. Features Apple Intelligence, USB-C connectivity, and Ceramic Shield for superior drop protection.',
      price: 599990,
      rating: 4.8,
      category: 'Smartphones',
      image: 'https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-240909_inline.jpg.large.jpg',
      images: [
        'https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-240909_inline.jpg.large.jpg',
        'https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-lineup-240909_big.jpg.large.jpg',
        'https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-finish-lineup-240909_big.jpg.large.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S25 Ultra 5G 512GB Dark Black',
      description: 'The ultimate Galaxy flagship with a built-in S Pen, 200 MP camera, titanium frame, and Snapdragon 8 Elite processor. Galaxy AI transforms how you interact with your phone.',
      price: 899990,
      rating: 4.9,
      category: 'Smartphones',
      image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-ultra-sm-s938.jpg',
      images: [
        'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-ultra-sm-s938.jpg',
        'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-sm-s938-1.jpg',
        'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-sm-s938-2.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-512-gb-temno-chernyi-133434601/'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S25 Ultra 5G 256GB Titanium Gray',
      description: 'Experience the power of Galaxy AI on the S25 Ultra with its 6.9-inch QHD+ display, Snapdragon 8 Elite, and a versatile quad-camera system headlined by a 200 MP sensor.',
      price: 829990,
      rating: 4.8,
      category: 'Smartphones',
      image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-sm-s938-3.jpg',
      images: [
        'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-sm-s938-3.jpg',
        'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-sm-s938-4.jpg',
        'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-ultra-sm-s938.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-seryi-133434844/'
    },
    {
      id: 4,
      name: 'Samsung Galaxy S25 5G 12GB/256GB Navy Blue',
      description: 'The Galaxy S25 features a refined compact design, Snapdragon 8 Elite, ProVisual Engine camera, and 7 years of OS updates. The ideal balance of performance and portability.',
      price: 449990,
      rating: 4.7,
      category: 'Smartphones',
      image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25.jpg',
      images: [
        'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25.jpg',
        'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-1.jpg',
        'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-2.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-5g-12-gb-256-gb-sinii-133432433/'
    },
    {
      id: 5,
      name: 'Samsung Galaxy S25 Ultra 5G 512GB Black',
      description: 'An AI-powerhouse in titanium armour. The S25 Ultra integrates Galaxy AI, a built-in S Pen, Snapdragon 8 Elite, and a 200 MP quad-camera suite for stunning results.',
      price: 899990,
      rating: 4.8,
      category: 'Smartphones',
      image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-sm-s938-1.jpg',
      images: [
        'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-sm-s938-1.jpg',
        'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-sm-s938-2.jpg',
        'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-sm-s938-4.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-512-gb-chernyi-133435341/'
    },
    {
      id: 6,
      name: 'Apple MacBook Air 13" M4 16GB/256GB',
      description: 'The world\'s best consumer laptop, now with the M4 chip. Up to 30 hours of battery life, a 13.6-inch Liquid Retina display, and Apple Intelligence built in — in a fanless, silent design.',
      price: 474795,
      rating: 4.9,
      category: 'Laptops',
      image: 'https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-hero-250305_big.jpg.large.jpg',
      images: [
        'https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-hero-250305_big.jpg.large.jpg',
        'https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-sky-blue-250305_big.jpg.large.jpg',
        'https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-lifestyle-on-the-go-250305_big.jpg.large.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mc6t4ru-a-138153200/'
    },
    {
      id: 7,
      name: 'Apple MacBook Air 13" M4 16GB/512GB',
      description: 'Double the storage with the M4 MacBook Air 13-inch. Handles demanding creative workflows effortlessly, streams for hours, and fits in any bag — all without a fan or noise.',
      price: 549990,
      rating: 4.8,
      category: 'Laptops',
      image: 'https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-lineup-250305_big.jpg.large.jpg',
      images: [
        'https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-lineup-250305_big.jpg.large.jpg',
        'https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-top-view-250305_big.jpg.large.jpg',
        'https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-side-view-250305_big.jpg.large.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-512-gb-macos-mw133-138242483/'
    },
    {
      id: 8,
      name: 'Apple MacBook Air 15" M4 16GB/256GB',
      description: 'The large-screen MacBook Air with M4 chip delivers a massive 15.3-inch Liquid Retina display, stellar speakers, and all-day battery — the biggest, best Air ever made.',
      price: 586800,
      rating: 4.8,
      category: 'Laptops',
      image: 'https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-lifestyle-at-home-250305_big.jpg.large.jpg',
      images: [
        'https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-lifestyle-at-home-250305_big.jpg.large.jpg',
        'https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-lifestyle-at-work-250305_big.jpg.large.jpg',
        'https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-multitasking-and-multidisplay-250305_big.jpg.large.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2025-16-gb-ssd-256-gb-macos-mw1j3-139195756/'
    },
    {
      id: 9,
      name: 'Apple MacBook Air 15" M4 24GB/512GB',
      description: 'Top-tier MacBook Air 15 with 24 GB of unified memory for even heavier multitasking. Perfect for developers, designers, and creators who want maximum performance in a thin chassis.',
      price: 699990,
      rating: 4.9,
      category: 'Laptops',
      image: 'https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-Liquid-Retina-display-250305_big.jpg.large.jpg',
      images: [
        'https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-Liquid-Retina-display-250305_big.jpg.large.jpg',
        'https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-Touch-ID-and-Magic-Keyboard-250305_big.jpg.large.jpg',
        'https://www.apple.com/newsroom/images/2025/03/apple-introduces-the-new-macbook-air-with-the-m4-chip-and-a-sky-blue-color/article/Apple-MacBook-Air-Desk-View-250305_big.jpg.large.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2025-24-gb-ssd-512-gb-macos-mc6k4ru-a-138171834/'
    },
    {
      id: 10,
      name: 'Apple AirPods Pro 2nd Generation',
      description: 'Featuring Active Noise Cancellation, Transparency mode, and Personalised Spatial Audio. The H2 chip delivers up to 2x more noise cancellation and Adaptive Audio that adjusts automatically.',
      price: 99990,
      rating: 4.7,
      category: 'Accessories',
      image: 'https://www.apple.com/newsroom/images/2024/09/apple-introduces-airpods-4/article/Apple-AirPods-hero-240909_big.jpg.large.jpg',
      images: [
        'https://www.apple.com/newsroom/images/2024/09/apple-introduces-airpods-4/article/Apple-AirPods-hero-240909_big.jpg.large.jpg',
        'https://www.apple.com/newsroom/images/2024/09/apple-introduces-airpods-4/article/Apple-AirPods-4-with-case-240909_big.jpg.large.jpg',
        'https://www.apple.com/newsroom/images/2024/09/apple-introduces-airpods-4/article/Apple-AirPods-lifestyle-240909_big.jpg.large.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-belyi-4804718/'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getCategories(): string[] {
    const cats = this.products.map(p => p.category);
    return ['All', ...new Set(cats)];
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
