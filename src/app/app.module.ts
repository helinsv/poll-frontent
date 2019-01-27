import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PollComponent } from './poll/poll.component';
import { QuestionComponent } from './poll/question.component';
import { AnswerComponent } from './poll/answer/answer.component';
import { VoteComponent } from './poll/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    PollComponent, QuestionComponent, AnswerComponent, VoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
