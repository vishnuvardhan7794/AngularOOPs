import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicestestService } from '../services/test.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component implements OnInit {
  count = 0;
  hideShow = false;
  @Output() toggle = new EventEmitter(false);
  constructor(public testService: ServicestestService) {}

  ngOnInit() {}
  testsub() {
    this.hideShow = !this.hideShow;
    this.toggle.emit(this.hideShow);
  }
  emitNewValue() {
    this.count = ++this.count;
    this.testService.emitValue.next(this.count);
  }
}
