import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-question',
  template: ` <h2 >{{question}}</h2>
   `,
  styleUrls: ['./poll.component.sass']
})

export class QuestionComponent {
  @Input() question: string;
}
