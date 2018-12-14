import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Questions } from './questions';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass'],
  providers: [DataService]
})

export class QuestionComponent implements OnInit {
  votes: number = 0;
  data: Questions[];

  constructor(private dataService: DataService) {}

  getQuestions(): void {
    this.dataService.getData().subscribe(async data => {
      this.data = data;
    });
  }

  ngOnInit(): void {
      this.getQuestions();
  }

  showVotes(votes) {
    this.votes = votes;
  }

}
