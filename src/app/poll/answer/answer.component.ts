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
  allVotes: number;
  @Output() votesReady = new EventEmitter<number>();
  color = '#c99e10';
  max_persent: number;

  getVote(answerComponent) {
    return answerComponent.vote++;
  }

  getVotes(answersArray) {
    let allVotes: number;
    allVotes = 0;
    for (let i = 0; i < answersArray.length; i++) {
      allVotes = allVotes + answersArray[i].vote;
    }
    this.allVotes = allVotes;
    this.votesReady.emit(this.allVotes);
  }

  getPercent(answersArray, allVotes) {
    let persent = [];
    let max;
    for (let i = 0; i < answersArray.length; i++) {
      answersArray[i].procent = answersArray[i].vote * 1000 / allVotes;
      persent[i] = answersArray[i].procent;
    }
    console.log(persent);
    max = this.getMax(persent);
    this.max_persent = max;

    /*for (let i = 0; i < answersArray.length; i++) {
      if (answersArray[i].procent === max) {
        this.color = '#008f46';
      } else {
        this.color = '#c99e10';
      }
    }*/
  }

  getMax(persent) {
    return Math.max.apply(Math, persent);
  }
 
}



