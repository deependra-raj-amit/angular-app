import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { fullName, email, password } = this.signupForm.value;
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = existingUsers.some((user: any) => user.email === email);
  
      if (userExists) {
        alert('A user with this email already exists. Please use a different email.');
        return;
      }
  
      existingUsers.push({ fullName, email, password });
      localStorage.setItem('users', JSON.stringify(existingUsers));
  
      alert('Signup successful!');
      this.router.navigate(['/login']);
    }
  }
  
  
}
