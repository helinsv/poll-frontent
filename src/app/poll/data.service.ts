
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Poll } from './poll';

@Injectable()

export class DataService {

    constructor(private http: Http) {
    }

    getData(): Observable<Poll[]> {
        return this.http.get(`${environment.apiUrl}`).pipe(map(r => r.json()));
    }

    AddQuestion(poll: Poll): Observable<Poll[]> {
      //musicevent.id = this.events.length;
      //this.events.push(musicevent);
      this.http.post(`${environment.apiUrl}`, poll);
      console.log('Adding new item1: ', poll);
    }

    AddAnswer(poll: Poll): Observable<Poll[]> {
      //musicevent.id = this.events.length;
      //this.events.push(musicevent);
      this.http.post(`${environment.apiUrl}`, poll);
      console.log('Adding new item1: ', poll);


    }


}
