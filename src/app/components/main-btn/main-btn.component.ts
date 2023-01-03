import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-btn',
  templateUrl: './main-btn.component.html',
})
export class MainBtnComponent {
  @Input() text: string = 'Button';
  @Input() link: string = '';

  constructor() {}
}
