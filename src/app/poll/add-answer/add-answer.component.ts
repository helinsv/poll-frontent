import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Poll, Question, Answer } from '../poll';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.sass']
})


export class AddAnswerComponent implements OnInit {
  visible: boolean = false;

  //answer: Poll[];
  pollAnswerForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private dataService: DataService) {
    this.pollAnswerForm = this.formbuilder.group({
      Answer: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  @Output() new_answer: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  Remove() {
    this.pollAnswerForm.reset();
  }

  Save(unic_answer) {
    this.visible = !this.visible;
    if (!this.visible) {
      this.new_answer.emit(unic_answer);
      this.pollAnswerForm.reset();
    }
  }




  AddAnswer(unic_answer) {
    //const answer: Answer = {
     // id: 5,
     // answer: this.pollAnswerForm.controls.Answer.value,
    //};
    //this.pollAnswerForm.reset();
    //this.dataService.AddAnswer(answer);

    //this.new_answer.emit(this.goodbye);
    //this.onChange.emit(unic_answer);

   // this.new_answer.emit(unic_answer);
}

}
