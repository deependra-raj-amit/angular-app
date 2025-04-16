import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  forgotPasswordForm: FormGroup;
  resetPasswordForm: FormGroup;
  errorMessage: string = '';
  successMessage: string= '';
  showResetField: boolean = false;
  userEmail: string = '';
  userName: string = ''
  forgotPasswordField: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.resetPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    const enteredEmail = this.forgotPasswordForm.value.email;
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    const userIndex = existingUsers.findIndex((user: any) => user.email === enteredEmail);

    if (userIndex !== -1) {
      this.errorMessage = '';
      this.userEmail = enteredEmail;
      this.showResetField = true;
    } else {
      this.showResetField = false;
      this.errorMessage = 'User with this email does not exist.';
    }
  }

  onResetPassword() {
    const newPassword = this.resetPasswordForm.value.newPassword;
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    const userIndex = existingUsers.findIndex((user: any) => user.email === this.userEmail);

    this.userName = existingUsers[userIndex].fullName;

    if (userIndex !== -1) {
      existingUsers[userIndex].password = newPassword;
      localStorage.setItem('users', JSON.stringify(existingUsers));
      this.successMessage = `Hello ${this.userName}! Your password for ${this.userEmail} 
      has been changed successfully.
      Thankyou!`;
      this.showResetField = false;
      this.forgotPasswordField = false;
      this.forgotPasswordForm.reset();
      this.resetPasswordForm.reset();
      
    }
  }
}
