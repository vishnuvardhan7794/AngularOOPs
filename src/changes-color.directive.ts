import {
  Directive,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appChangesColor]',
})
export class ChangesColorDirective {
  @Input() bgColor = '';
  @Output() myColor = new EventEmitter();
  constructor(public ele: ElementRef) {}

  ngOnInit() {
    this.ele.nativeElement.style.backgroundColor = this.bgColor;
    this.ele.nativeElement.style.color = '#FFFFFF';
  }

  @HostListener('mouseover', ['$event'])
  public onMouseover(event: MouseEvent): void {
    this.myColor.emit(this.bgColor);
  }
}
