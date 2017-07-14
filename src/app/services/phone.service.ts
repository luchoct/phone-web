import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

import Phone from '../models/phone';

@Injectable()
export class PhoneService {

  constructor(private http: Http) {}

  getPhones(): Observable<Phone[]> {
    let headers: Headers = new Headers({ 'Accept': 'application/json'});
    let options: RequestOptions = new RequestOptions({ headers: headers });
    return this.http.get(environment.apiUrl + '/phones/', options)
      .map(res => res.json() || []);
  }
}
