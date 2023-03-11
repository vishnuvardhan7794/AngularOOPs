import 'zone.js/dist/zone';
import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { ServicestestService } from './services/test.service';
import { HttpClientModule } from '@angular/common/http';
import { ChangesColorDirective } from './changes-color.directive';

@Component({
  selector: 'add-one-button',
  template: `
   <app-test1 (toggle)="toggle($event)"></app-test1><br/>
   <app-test2 *ngIf="show" [bgColor]="'blue'"></app-test2>
  `,
})
export class AppComponent {
  count = 0;
  show = false;
  toggle(e?: any) {
    this.show = e;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    ChangesColorDirective,
  ],
  exports: [],
  providers: [ServicestestService],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
