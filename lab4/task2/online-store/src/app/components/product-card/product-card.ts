import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [NgFor, NgClass],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard implements OnChanges {
  @Input() product!: Product;
  @Output() shareRequested = new EventEmitter<{ product: Product; platform: 'whatsapp' | 'telegram' }>();

  selectedImage = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product) {
      this.selectedImage = this.product.image;
    }
  }

  selectImage(url: string): void {
    this.selectedImage = url;
  }

  shareWhatsApp(): void {
    this.shareRequested.emit({ product: this.product, platform: 'whatsapp' });
  }

  shareTelegram(): void {
    this.shareRequested.emit({ product: this.product, platform: 'telegram' });
  }

  getStarIndices(): number[] {
    return [1, 2, 3, 4, 5];
  }

  isFullStar(i: number): boolean {
    return i <= Math.floor(this.product.rating);
  }

  isHalfStar(i: number): boolean {
    return i === Math.ceil(this.product.rating) && this.product.rating % 1 >= 0.5;
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('ru-KZ').format(price) + ' ₸';
  }
}
