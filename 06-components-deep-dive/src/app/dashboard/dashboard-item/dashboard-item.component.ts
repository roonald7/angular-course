import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  host: {
    class: "dashboard-item"
  }
})
export class DashboardItemComponent {
  imagePath = input.required<string>();
  imageAlt = input.required<string>();
  title = input.required<string>();
}
