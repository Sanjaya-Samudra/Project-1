import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  successMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    
    this.successMessage = 'Login Successfull! Redirecting to Home...';

    // ✅ Redirect after 2 seconds
    setTimeout(() => {
      this.router.navigate(['/home']);  // Make sure this matches your route
    }, 1000);
  }

}
