import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
})
export class NavLinkComponent {
  @Input() link: string = '/';
  @Input() text: string = 'Link';

  constructor() {}
}
