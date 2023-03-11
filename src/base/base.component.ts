import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent implements OnInit {
  protected isNgOninit$ = new Subject();
  constructor() {}

  ngOnInit() {
    this.isNgOninit$.next('i am base component');
  }
}
