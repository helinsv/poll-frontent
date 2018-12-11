import { Component, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/*class questions {
  id: number;
  question: string;
  answers: {
    id: number;
    answer: string;
    vote: number;
    procent: number;
  }  
} 

data: questions[]; */
  
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})

export class QuestionComponent {
  /*@Input() data: any [];   */

  private apiUrl = 'http://localhost:3000/api/questions';
  data: any = [];

  constructor(private http: Http) {   
    this.getQuestions();
    this.getData();    
  }

  getData(){
    return this.http.get(this.apiUrl).pipe(map(r => r.json()));    
  }

  getQuestions(){
    this.getData().subscribe(data => {
      this.data = data
    })
  }

  /*------
  =====
    answer component
  =====
  --------
 

  votes: number = 0; 
  procent: number = 0; 
 
  clickVote(answer){
    var votes = this.votes++;
    var vote =  answer.vote++ 
    this.procent = vote*100/votes;     
  }

  getValue(array, votes) {
    for (var i = 0; i < array.length; i++) {
      array[i].procent = array[i].vote * 100 / votes;
    } 

  } */

}
