import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../input-investment.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input-component.component.html',
  styleUrl: './user-input-component.component.css'
})
export class UserInputComponentComponent {
  private investmentService = inject(InvestmentService);  
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration()
    });
  }
}
