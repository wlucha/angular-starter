import { Component } from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NgSwitch, NgSwitchDefault, NgSwitchCase],
})
export class AppComponent {
  title = 'angular-starter';
}
