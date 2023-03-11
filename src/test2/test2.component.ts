import { Component, OnInit, OnDestroy } from '@angular/core';
import { asapScheduler, Subject, takeUntil } from 'rxjs';
import { ServicestestService } from '../services/test.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
})
export class Test2Component implements OnInit, OnDestroy {
  current_value = 0;
  private subscriptions$ = new Subject();
  constructor(public testService: ServicestestService) {}

  ngOnInit() {
    this.current_value = this.testService.emitValue.value;
    this.testService.emitValue.pipe(takeUntil(this.subscriptions$)).subscribe(
      (value) => {
        this.current_value = value;
        console.log('Test2Component', value);
      },
      () => {},
      () => {
        console.log('test.. completed');
      }
    );
    this.testService.getDetails().subscribe(
      (value) => {
        console.log('getDetails', value);
      },
      () => {},
      () => {
        console.log('getDetails.. completed');
      }
    );
  }
  ngOnDestroy() {
    this.subscriptions$.next('');
    this.subscriptions$.complete();
    console.log('ngOnDestroy');
  }
}
