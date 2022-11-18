import { Component, Input } from '@angular/core';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'component-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input() title: string;
  @Input() isHome:boolean = false

  constructor() {
  }

}
