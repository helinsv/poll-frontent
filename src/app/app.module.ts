import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PollComponent } from './poll/poll.component';
import { QuestionComponent } from './poll/question.component';
import { AnswerComponent } from './poll/answer/answer.component';
import { AddAnswerComponent } from './poll/add-answer/add-answer.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddQuestionComponent } from './poll/add-question/add-question.component';

@NgModule({
  declarations: [
    AppComponent,
    PollComponent, QuestionComponent, AnswerComponent, AddAnswerComponent, AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
