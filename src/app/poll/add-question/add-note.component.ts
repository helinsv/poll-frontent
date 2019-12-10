import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Poll, Question, Answer } from '../poll';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.sass']
})
export class AddNoteComponent implements OnInit {
  visible: boolean = false;
  question: Question[];
  btn_close: string = "Add note";

  @Input() btn_add_note: string;
  @Output() new_note: EventEmitter<string> = new EventEmitter();

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


  AddQuestion(add_note) {

      this.new_note.emit(add_note);

  }

  Close() {
    this.visible = !this.visible;
    this.btn_close = 'Close';
    if (!this.visible) {
      this.pollQuestionForm.reset();
      this.btn_close = 'Add note';
    }
  }

}
