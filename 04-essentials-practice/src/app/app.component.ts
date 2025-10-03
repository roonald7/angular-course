import { Component, computed, inject } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { UserInputComponentComponent } from "./user-input-component/user-input-component.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponentComponent, InvestmentResultsComponent],
})
export class AppComponent {
  
}
