import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  categories = [
    { name: 'Consoles', subcategories: ['PlayStation', 'Xbox', 'Nintendo'] },
    { name: 'Games', subcategories: [] },
    { name: 'Accessories', subcategories: ['Controllers', 'Headphones', 'Monitors'] },
    { name: 'Others', subcategories: ['Desk Decor', 'Controller Caps', 'Headphone Stands', 'Console Stands'] }
  ];

  selectedSubcategories: string[] = [];
  selectedCategory: string = '';

  onCategoryChange(event: Event): void {
    const selected = (event.target as HTMLSelectElement).value;
    this.selectedCategory = selected;
    
    const category = this.categories.find(cat => cat.name === selected);
    this.selectedSubcategories = category?.subcategories || [];
  }

  onSubmit(productForm: NgForm) {
    if (productForm.valid) {
      console.log('Form Details:', productForm.value);
      // Optionally reset the form
      productForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
