
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

}
