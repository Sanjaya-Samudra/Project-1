import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: ''
  };

  successMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) return;

    // ✅ Simulate signup logic
    console.log('Signup data:', this.user);
    this.successMessage = 'Successfully signed up! Redirecting to login...';

    // ✅ Redirect after 2 seconds
    setTimeout(() => {
      this.router.navigate(['/']);  // Make sure this matches your route
    }, 2000);
  }

}
