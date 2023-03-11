import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BaseComponent } from '../base/base.component';
import { ServicestestService } from '../services/test.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
})
export class Test2Component extends BaseComponent implements OnInit, OnDestroy {
  @Input() bgColor = '';
  current_value = 0;
  private subscriptions$ = new Subject();
  constructor(public testService: ServicestestService) {
    super();
    this.isNgOninit$.subscribe(
      (value) => {
        console.log('isNgOninit', value);
      },
      (err) => {
        // console.log('test.. completed');
      },
      () => {
        console.log('isNgOninit test.. completed');
      }
    );
  }

  ngOnInit() {
    super.ngOnInit();
    console.log('Test2Component, ngOnInit');
    this.current_value = this.testService.emitValue.value;
    this.testService.emitValue.pipe(takeUntil(this.subscriptions$)).subscribe(
      (value) => {
        this.current_value = value;
        console.log('Test2Component', value);
      },
      (err) => {
        console.log('test.. completed');
      },
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
  myColor($event) {
    console.log('$event', $event);
  }
  ngOnDestroy() {
    this.subscriptions$.next('');
    this.subscriptions$.complete();
    console.log('ngOnDestroy');
  }
}
