import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule, 
    AsyncPipe,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule, 
    AsyncPipe
    // add shared components, pipes, directives here
  ]
})
export class SharedModule {}
