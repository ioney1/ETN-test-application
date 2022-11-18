import { Component, Input } from '@angular/core';

/**
 * Generated class for the AppSectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-section',
  templateUrl: 'app-section.html'
})
export class AppSectionComponent {

  @Input() header: string = 'Header'
  @Input('link-text') linkText: string

  constructor() {
  }

}
