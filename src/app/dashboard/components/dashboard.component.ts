import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/auth/state/auth.state';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [CommonModule, SharedModule,],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Select(AuthState.username) username$!: Observable<string | null>;
}
