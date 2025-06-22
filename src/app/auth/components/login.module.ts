import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from '../state/auth.state';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([AuthState]),
    RouterModule.forChild(routes)

  ]
})
export class LoginModule { }

