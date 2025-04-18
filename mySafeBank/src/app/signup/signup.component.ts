import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  signupForm: FormGroup;
  values: any; 

    constructor(private fb: FormBuilder, private router: Router) {
      this.signupForm = this.fb.group({
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required,Validators.pattern('^\\+?\\d{1,4}?[-.\\s]?\\d{10}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        terms: [false, Validators.requiredTrue]
      });
    }
    errorMessage: string = '';
    userExistsMessage: string = '';
  onSubmit() {
    if (this.signupForm.valid) {
      this.values = this.signupForm.value;
      console.log(this.values);

    

      const { fullName, email, password, phone } = this.signupForm.value;
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = existingUsers.some((user: any) => user.email === email);
  
      if (userExists) {
        this.userExistsMessage = 'A user with this email already exists. Please use a different email.';
        return;
      }
      const accountNumber = Math.floor(Math.random() * 10000000000);
      existingUsers.push({ fullName, email, password, accountNumber, phone});
      localStorage.setItem('users', JSON.stringify(existingUsers));
      this.errorMessage = '';
      alert('Signup successful!');
      this.router.navigate(['/login']);
    }
    else {
      this.errorMessage = 'Please fill all the required fields correctly'
    }
  }
  
  
}
