import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [NgFor, NgClass, CommonModule, NgIf,LoginComponent]
})
export class NavbarComponent {
  categories = [
    { name: 'Consoles', subcategories: ['PlayStation', 'Xbox', 'Nintendo'] },
    { name: 'Games', subcategories:[] },
    { name: 'Accessories', subcategories: ['Controllers', 'Headphones', 'Monitors'] },
    { name: 'Others', subcategories: ['Desk Decor', 'Controller Caps', 'Headphone Stands', 'Console Stands'] }
  ];

  showLoginPopover: boolean = false;

  toggleLoginPopover() {
    this.showLoginPopover = !this.showLoginPopover;
  }
}
