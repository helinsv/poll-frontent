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
  data: Poll[];

  constructor(private dataService: DataService) { }

  getQuestions(): void {
    this.dataService.getData().subscribe(async data => {
      this.data = data;
    });
  }

  ngOnInit(): void {
    this.getQuestions();
  }


}
