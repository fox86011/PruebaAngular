import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-company-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-info.html',
  styleUrls: ['./company-info.css']
})
export class CompanyInfoComponent {
  @Input() company!: Company;
}
