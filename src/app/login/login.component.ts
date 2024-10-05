import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass,CommonModule,NgIf, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    // Add any necessary properties and methods for handling form submission
    onLogin(form: any) {
      console.log('Login form submitted', form);
      // Handle login logic here
    }
  
    onSignUp(form: any) {
      console.log('Sign-up form submitted', form);
      // Handle sign-up logic here
    }
}
