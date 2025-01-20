import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoRootModule } from './transloco-root.module';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TranslocoRootModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Starter!';
}
