import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class ServicestestService {
  public emitValue = new BehaviorSubject<number>(0);
  constructor(public http: HttpClient) {}
  public getDetails() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
  }
}
