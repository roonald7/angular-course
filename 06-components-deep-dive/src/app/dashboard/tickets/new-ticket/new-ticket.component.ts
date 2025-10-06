import { Component, ElementRef, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(ticketTitle: string, ticketDescription: string) {
    console.log('Ticket Submitted\nTitle: ', ticketTitle, '\nDescription: ', ticketDescription);

    this.form().nativeElement.reset();
  }
}
