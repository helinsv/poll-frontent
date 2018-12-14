import { Component, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {Questions} from './questions';
/*import {Answers} from './answers';*/
/*class questions {
  id: number;
  question: string;
  
} 

data: questions[]; */

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})

export class QuestionComponent {
  //private apiUrl = 'http://localhost:3000/api/questions';

  data: any = [];
  votes: number = 0;

  constructor(private http: Http) {
    this.getQuestions();
    this.getData();
  }

  getData() {
    return this.http.get(`${environment.apiUrl}`).pipe(map(r => r.json()));
  }

  getQuestions() {
    this.getData().subscribe(async data => {
      this.data = data;
    });
  }

  showVotes(votes) {
    this.votes = votes;
  }

}
