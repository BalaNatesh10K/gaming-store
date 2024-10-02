import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [NgbCarouselModule, NavbarComponent, NgFor, CommonModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
}