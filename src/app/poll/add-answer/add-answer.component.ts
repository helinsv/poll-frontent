import { Component, OnInit} from '@angular/core';
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

  pollAnswerForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private dataService: DataService) {
    this.pollAnswerForm = this.formbuilder.group({
      Answer: ['', [Validators.required, Validators.minLength(3)]]
    });
  }


  ngOnInit() {
  }

  Remove() {
    this.pollAnswerForm.reset();
  }

  Save() {
    this.visible = !this.visible;
    if (!this.visible) {
      this.AddAnswer();
    }
  }

  AddAnswer() {
    const poll: Poll = {
      id: 5,
      answer: this.pollAnswerForm.controls.Answer.value,
    };
    this.pollAnswerForm.reset();
    this.dataService.AddAnswer(poll);
}


}
