import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  errorMessage: string = '';
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      const user = users.find((u: any) => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        this.router.navigate(['/signup']); 
        this.errorMessage= '';
      } else {
        this.errorMessage = 'Invalid email or password';
      }
    } else {
      this.errorMessage = 'Please fill all the required fields';
    }
  }
}
