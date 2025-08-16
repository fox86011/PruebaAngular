import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { Branch } from '../../models/branch.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
 
  private _products = signal<Product[]>([]);
  private _branches = signal<Branch[]>([]);

  @Input() set products(value: Product[]) { this._products.set(value ?? []); }
  @Input() set branches(value: Branch[]) { this._branches.set(value ?? []); }

  branchesView = computed(() => this._branches());
  productsView = computed(() => this._products());

  totalStock = computed(() => {
    return this.productsView().reduce((acc: number, p: Product) => {
      const sum = Object.values(p.stockByBranch)
        .reduce((a: number, n: number) => a + n, 0);
      return acc + sum;
    }, 0);
  });

  stockFor(product: Product, branchId: string): number {
    return product.stockByBranch[branchId] ?? 0;
  }

  totalFor(product: Product): number {
    return Object.values(product.stockByBranch)
      .reduce((a: number, n: number) => a + n, 0);
  }
}
