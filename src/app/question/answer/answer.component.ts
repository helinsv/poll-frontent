import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VoteComponent} from '../vote.component';

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

  getVote(answerComponent) {
    return answerComponent.vote++;
  }

  getVotes(answersArray) {
    let allVotes: number;
    allVotes = 0;
    for (let i = 0; i < answersArray.length; i++) {
      allVotes =  allVotes + answersArray[i].vote;
    }
    this.allVotes = allVotes;
    this.votesReady.emit(this.allVotes);
  }

  getPercent(answersArray, allVotes) {
    for (let i = 0; i < answersArray.length; i++) {
      answersArray[i].procent = answersArray[i].vote * 1000 / allVotes;
    }
  }

  /*maxPersent(answersArray) {
    let max: number;
    for (let i = 0; i < answersArray.length-1; i++) {
      if (answersArray[i].procent > answersArray[i + 1].procent) {
        max = answersArray[i];        
      } else {
        max = answersArray[i + 1];
      } 
      //answersArray[max].test = 'fgfgf';
    }
    console.log(max);
  }*/
}

