import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  template: ` <div class="votes">Кількість всіх голосів: <strong>{{allVotes}}</strong></div>
            `,
  styleUrls: ['./question.component.sass']
})

export class VoteComponent {  
  allVotes: number = 0;   
 // @Output() allVotes = new EventEmitter();
  
  clickAllVotes(){
    let allVotes = this.allVotes++;
  }

  
}
