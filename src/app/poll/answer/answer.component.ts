import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/*import { VoteComponent } from '../poll/vote.component';*/

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.sass']
})
export class AnswerComponent {
  @Input() answerComponent: string;
  @Input() id: number;
  @Input() answersArray: number;


}



