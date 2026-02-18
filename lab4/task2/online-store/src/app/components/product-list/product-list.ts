import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCard } from '../product-card/product-card';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [NgFor, NgIf, FormsModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory = 'All';
  searchQuery = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.categories = this.productService.getCategories();
    this.filteredProducts = [...this.products];
  }

  onSearchChange(): void {
    this.applyFilter();
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.applyFilter();
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.filteredProducts = [...this.products];
  }

  onShare(event: { product: Product; platform: 'whatsapp' | 'telegram' }): void {
    const encodedUrl = encodeURIComponent(event.product.link);
    const encodedName = encodeURIComponent(event.product.name);
    let shareUrl = '';

    if (event.platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=Check out this product: ${encodedUrl}`;
    } else {
      shareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedName}`;
    }

    window.open(shareUrl, '_blank');
  }

  trackById(_index: number, product: Product): number {
    return product.id;
  }

  private applyFilter(): void {
    this.filteredProducts = this.products.filter(p => {
      const matchesCategory =
        this.selectedCategory === 'All' || p.category === this.selectedCategory;
      const q = this.searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }
}
