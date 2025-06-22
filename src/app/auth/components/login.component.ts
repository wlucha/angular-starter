import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Login } from '../actions/auth.actions';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  loading = false;
  error = '';

  constructor(private store: Store, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }


  login(): void {
    if (this.loginForm.invalid) return;

    this.loading = true;
    this.error = '';
    const { username, password } = this.loginForm.value;

    this.store.dispatch(new Login({ username, password }))
      .subscribe({
        next: () => {
          this.loading = false;
        },
        error: (err) => {
          this.error = err.message || 'Unknown error';
          this.loading = false;
        }
      });
  }
}
