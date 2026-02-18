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
      image: 'https://placehold.co/600x600/1d1d1f/f5f5f7?text=iPhone+16',
      images: [
        'https://placehold.co/600x600/1d1d1f/f5f5f7?text=iPhone+16+Front',
        'https://placehold.co/600x600/2d2d2d/f5f5f7?text=iPhone+16+Back',
        'https://placehold.co/600x600/3d3d3d/f5f5f7?text=iPhone+16+Side'
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
      image: 'https://placehold.co/600x600/111827/f9fafb?text=S25+Ultra',
      images: [
        'https://placehold.co/600x600/111827/f9fafb?text=S25+Ultra+Front',
        'https://placehold.co/600x600/1f2937/f9fafb?text=S25+Ultra+Back',
        'https://placehold.co/600x600/374151/f9fafb?text=S25+Ultra+S-Pen'
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
      image: 'https://placehold.co/600x600/6b7280/f9fafb?text=S25+Ultra+Gray',
      images: [
        'https://placehold.co/600x600/6b7280/f9fafb?text=Gray+Front',
        'https://placehold.co/600x600/9ca3af/1f2937?text=Gray+Back',
        'https://placehold.co/600x600/d1d5db/1f2937?text=Gray+Side'
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
      image: 'https://placehold.co/600x600/1e3a5f/f0f9ff?text=Galaxy+S25',
      images: [
        'https://placehold.co/600x600/1e3a5f/f0f9ff?text=S25+Front',
        'https://placehold.co/600x600/1d4ed8/f0f9ff?text=S25+Back',
        'https://placehold.co/600x600/3b82f6/f0f9ff?text=S25+Side'
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
      image: 'https://placehold.co/600x600/0a0a0a/f5f5f5?text=S25+Ultra+Black',
      images: [
        'https://placehold.co/600x600/0a0a0a/f5f5f5?text=Black+Front',
        'https://placehold.co/600x600/1a1a1a/f5f5f5?text=Black+Back',
        'https://placehold.co/600x600/2a2a2a/f5f5f5?text=Black+Detail'
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
      image: 'https://placehold.co/600x600/e8e8ed/1d1d1f?text=MacBook+Air+13',
      images: [
        'https://placehold.co/600x600/e8e8ed/1d1d1f?text=Air+13+Open',
        'https://placehold.co/600x600/d1d1d6/1d1d1f?text=Air+13+Closed',
        'https://placehold.co/600x600/c7c7cc/1d1d1f?text=Air+13+Side'
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
      image: 'https://placehold.co/600x600/f0ede8/1d1d1f?text=MacBook+Air+13+512',
      images: [
        'https://placehold.co/600x600/f0ede8/1d1d1f?text=Starlight+Open',
        'https://placehold.co/600x600/e8e2d9/1d1d1f?text=Starlight+Closed',
        'https://placehold.co/600x600/ddd6ce/1d1d1f?text=Starlight+Side'
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
      image: 'https://placehold.co/600x600/1c2127/e2e8f0?text=MacBook+Air+15',
      images: [
        'https://placehold.co/600x600/1c2127/e2e8f0?text=Midnight+Open',
        'https://placehold.co/600x600/252d35/e2e8f0?text=Midnight+Closed',
        'https://placehold.co/600x600/2e3640/e2e8f0?text=Midnight+Side'
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
      image: 'https://placehold.co/600x600/e5e5ea/1d1d1f?text=Air+15+24GB',
      images: [
        'https://placehold.co/600x600/e5e5ea/1d1d1f?text=Silver+Open',
        'https://placehold.co/600x600/d8d8de/1d1d1f?text=Silver+Closed',
        'https://placehold.co/600x600/cbcbd2/1d1d1f?text=Silver+Detail'
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
      image: 'https://placehold.co/600x600/f5f5f7/1d1d1f?text=AirPods+Pro',
      images: [
        'https://placehold.co/600x600/f5f5f7/1d1d1f?text=AirPods+Case',
        'https://placehold.co/600x600/ebebf0/1d1d1f?text=AirPods+Earbuds',
        'https://placehold.co/600x600/e1e1e6/1d1d1f?text=AirPods+Detail'
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
