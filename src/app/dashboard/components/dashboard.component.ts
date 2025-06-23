import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/auth/state/auth.state';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppMenuComponent } from "../../layout/app-menu.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [CommonModule, SharedModule, AppMenuComponent],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Select(AuthState.username) username$!: Observable<string | null>;
}
