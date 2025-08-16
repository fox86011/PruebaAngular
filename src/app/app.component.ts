import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryService } from './services/inventory/inventory';
import { Company } from './models/company.model';
import { Branch } from './models/branch.model';
import { Product } from './models/product.model';
import { CompanyInfoComponent } from './components/company-info/company-info';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CompanyInfoComponent, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  company = signal<Company | null>(null);
  branches = signal<Branch[]>([]);
  products = signal<Product[]>([]);

  constructor(private inv: InventoryService) {}

  ngOnInit(): void {
    this.inv.getCompany().subscribe(c => this.company.set(c));
    this.inv.getBranches().subscribe(b => this.branches.set(b));
    this.inv.getProducts().subscribe(p => this.products.set(p));
  }
}
