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

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      const user = users.find((u: any) => u.email === email && u.password === password);

      if (user) {
        alert('Login successful!');
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        this.router.navigate(['/dashboard']); // You can change route as needed
      } else {
        alert('Invalid email or password');
      }
    }
  }
}
