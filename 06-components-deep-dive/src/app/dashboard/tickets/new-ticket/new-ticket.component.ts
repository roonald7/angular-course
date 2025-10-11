import { Component, ElementRef, output, viewChild } from '@angular/core';
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
  addTicket = output<{title: string; text: string}>();
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(ticketTitle: string, ticketDescription: string) {
    this.addTicket.emit({title: ticketTitle, text: ticketDescription});
    this.form().nativeElement.reset();
  }
}
