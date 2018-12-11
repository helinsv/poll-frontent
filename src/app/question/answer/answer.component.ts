import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.sass']
})
export class AnswerComponent{
  //allVotes: number = 0;  

  @Input() answerComponent: string;
  @Input() id: number;
  @Input() answersArray: number;
  @Input() allVotes: number;

  getVote(answerComponent){    
    let vote =  answerComponent.vote++;    
    //let allVotes = this.allVotes++;     
  }
  
  getPercent(answersArray, allVotes) {
    for (var i = 0; i < answersArray.length; i++) {
      answersArray[i].procent = answersArray[i].vote * 100 / allVotes;
    } 
  }
}

