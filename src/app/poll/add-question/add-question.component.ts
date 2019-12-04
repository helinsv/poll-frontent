import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Poll, Question, Answer } from '../poll';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.sass']
})
export class AddQuestionComponent implements OnInit {
  visible: boolean = false;

  pollQuestionForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private dataService: DataService) {
    this.pollQuestionForm = this.formbuilder.group({
      Question: ['', [Validators.required, Validators.minLength(3)]]
    });

  }

  ngOnInit() {
  }


  Remove() {
    this.pollQuestionForm.reset();
  }

  Save() {
    this.visible = !this.visible;
    if (!this.visible) {
      this.AddQuestion();
    }
  }

  AddQuestion() {
    const poll: Poll = {
      id: 5,
      question: this.pollQuestionForm.controls.Question.value,
    };
    this.dataService.AddQuestion(poll);
    this.pollQuestionForm.reset();
  }

}
