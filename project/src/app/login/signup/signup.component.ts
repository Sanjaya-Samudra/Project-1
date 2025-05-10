import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

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

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) return;
    console.log('Signup successful:', this.user);
    // Send to server...
  }

}
