import { Company } from './models/company.model';
import { Branch } from './models/branch.model';
import { Product } from './models/product.model';

export const COMPANY: Company = {
  name: 'Fashion Trends',
  ruc: '1727267674001',
  address: 'Av. 6 de Diciembre y Granados',
  phone: '+593 96 308 8564',
  email: 'info@fashiontrends.ec'
};

export const BRANCHES: Branch[] = [
  { id: 's1', name: 'Sucursal Centro',   address: 'Calle A y B' },
  { id: 's2', name: 'Sucursal Norte',    address: 'Av. C y D' },
  { id: 's3', name: 'Sucursal Sur',      address: 'Av. E y F' },
  { id: 's4', name: 'Sucursal Valle',    address: 'Calle G y H' },
  { id: 's5', name: 'Sucursal Costa',    address: 'Av. I y J' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Camiseta Básica',
    category: 'Camisetas',
    stockByBranch: { s1: 12, s2: 8, s3: 5, s4: 10, s5: 7 }
  },
  {
    id: 'p2',
    name: 'Jeans Slim',
    category: 'Pantalones',
    stockByBranch: { s1: 4, s2: 3, s3: 6, s4: 2, s5: 5 }
  },
  {
    id: 'p3',
    name: 'Chaqueta Denim',
    category: 'Chaquetas',
    stockByBranch: { s1: 2, s2: 1, s3: 0, s4: 3, s5: 1 }
  },
  {
    id: 'p4',
    name: 'Vestido Floral',
    category: 'Vestidos',
    stockByBranch: { s1: 5, s2: 9, s3: 3, s4: 1, s5: 4 }
  }
];
