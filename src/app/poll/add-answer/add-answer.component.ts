import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.sass']
})


export class AddAnswerComponent implements OnInit {

  visible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  Remove() {
    this.visible = !this.visible;
  }

  Save() {
    this.visible = !this.visible;
  }




}
