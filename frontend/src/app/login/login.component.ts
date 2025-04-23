import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  loggedIn: boolean = false;

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
      const userExists = users.find((u: any) => u.email === email );

      const options: Intl.DateTimeFormatOptions = { 
                        day: '2-digit', 
                        month: '2-digit', 
                        year: 'numeric', 
                        hour: '2-digit', 
                        minute: '2-digit', 
                        second: '2-digit', 
                        hour12: true,
                      }; 

      const loginTime = new Date().toLocaleString('en-GB', options);



      if (user) {
        user.loginTime = loginTime;
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        localStorage.setItem('loginTime', JSON.stringify(loginTime))
        this.router.navigate(['/dashboard']); 
        this.errorMessage= '';
        
      } else {
        this.errorMessage = 'Invalid email or password';
      }

      if(!userExists){
        this.errorMessage = 'User with this email does not exist, please signup'
      }

    } else {
      this.errorMessage = 'Please fill all the required fields';
    }
    this.loggedIn = true;
  }
}
