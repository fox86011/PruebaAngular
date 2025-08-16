import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { COMPANY, BRANCHES, PRODUCTS } from '../../mock-data';
import { Company } from '../../models/company.model';
import { Branch } from '../../models/branch.model';
import { Product } from '../../models/product.model';

@Injectable({ providedIn: 'root' })
export class InventoryService {
  getCompany() {
    return of<Company>(COMPANY);
  }
  getBranches() {
    return of<Branch[]>(BRANCHES);
  }
  getProducts() {
    return of<Product[]>(PRODUCTS);
  }
}
