import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'poll';
  private apiUrl = 'http://localhost:3000/api/questions';
  data: any = [];

  constructor(private http: Http) {
    console.log('hello');
    this.getQuestions();
    this.getData();
  }

  getData(){
    return this.http.get(this.apiUrl)
    .pipe(map(r => r.json()))
      
  }

  getQuestions(){
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }
}




