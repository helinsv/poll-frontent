import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-vote',
  template: ` <div class="votes" >Кількість всіх голосів: <strong>{{votes}}</strong></div>
   `,
  styleUrls: ['./question.component.sass']
})

export class VoteComponent {
  @Input() votes: number;
}
