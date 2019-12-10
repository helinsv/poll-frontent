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
  btn_add_note: string = "Add note";
  public note = '';

  constructor(private dataService: DataService) { }

  getQuestions(): void {
    this.dataService.getData().subscribe(async data => {
      this.data = data;
    });
  }

  ngOnInit(): void {
    this.getQuestions();
  }

  /*GetAnswer(data){
    this.goodbye = data;
  }*/

  GetNote(data) {
    this.note =  data;
    if (this.note === undefined || this.note == null || this.note.length <= 0) {
      this.note = '';
      this.btn_add_note = 'Add note';
    } else {
      this.note = 'Your note: '+ ' ' + data;
      this.btn_add_note = 'Change note';
    }
}

}
