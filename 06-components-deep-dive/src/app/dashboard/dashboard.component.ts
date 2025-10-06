import { Component, Type } from '@angular/core';

import { ServerStatusComponent } from "./server-status/server-status.component";
import { TrafficInfoComponent } from "./traffic-info/traffic-info.component";
import { DashboardItemComponent } from "./dashboard-item/dashboard-item.component";
import { TicketsComponent } from "./tickets/tickets.component";

interface DashboardItem {
  imagePath: string;
  imageAlt: string;
  title: string;
  component: Type<any>;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ServerStatusComponent, TrafficInfoComponent, DashboardItemComponent, TicketsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  dashboardItems: DashboardItem[] = [
    {
      imagePath: 'status.png',
      imageAlt: 'A signal symbol',
      title: 'Server Status',
      component: ServerStatusComponent
    },
    {
      imagePath: 'globe.png',
      imageAlt: 'A globe',
      title: 'Traffic',
      component: TrafficInfoComponent
    },
    {
      imagePath: 'list.png',
      imageAlt: 'A list of items',
      title: 'Support Tickets',
      component: TicketsComponent
    }
  ]
}
