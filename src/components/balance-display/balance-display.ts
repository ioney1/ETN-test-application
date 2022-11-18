import { Component, Input } from '@angular/core';

/**
 * Generated class for the BalanceDisplayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'balance-display',
  templateUrl: 'balance-display.html'
})
export class BalanceDisplayComponent {

  @Input('percent-change') percentChange: number = 4.5
  @Input() alignment: 'left' | 'right' = 'left'
  @Input() value: number = 359000.00
  @Input() showFiat: boolean = false
  @Input() showIso: boolean = false
  @Input('text-class') textClass: string = 'h1'

  displayedText: string

  constructor() {
  }

  //If value > 100, 000 && textClass != 'h1', divide by 1000 and append k 
  ngOnInit(){

    //when not header text, shorten the value
    let value: number = this.value
    let suffix: string = ''

    if (this.value > 10000 && !this.textClass.includes('h1')){

      value = Math.round(this.value/1000)
      suffix = 'k'

    }

    this.value = value
    this.displayedText = value + suffix

  }

}
