import { Component, Input } from '@angular/core';

/**
 * Generated class for the LinkButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'link-button',
  templateUrl: 'link-button.html'
})
export class LinkButtonComponent {

  @Input() text: string = 'More';

  constructor() {
  }

}
