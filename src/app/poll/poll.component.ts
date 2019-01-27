import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Poll } from './poll';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.sass'],
  providers: [DataService, ]
})

export class PollComponent implements OnInit {
  votes: number = 0;
  data: Poll[];
  visible: boolean = false;
  answer: Poll = new Poll();

  constructor(private dataService: DataService) { }

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

  toggle_block() {
    this.visible = !this.visible;
  }

  




}
