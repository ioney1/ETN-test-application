import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the PercentChangeBadgeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'percent-change-badge',
  templateUrl: 'percent-change-badge.html'
})
export class PercentChangeBadgeComponent {

  @Input() value: number = -4.3
  @Input() alignment:'left' | 'right' = 'right'
  
  icon:string = 'ph-arrow-up-right'
  class: 'negative' | 'positive' | 'neutral'
  transform: NgStyle['_ngStyle']


  constructor() {
  }

  ngOnInit(){
    if(this.value <  0){
      this.class = 'negative'
    } else if (this.value > 0){
      this.class = 'positive'
    } else {
      this.class = 'neutral'
      this.icon = 'ph-arrow-right'
    }

   this.transform = {
    'transform': `rotate(${transformations[this.class] * transformations[this.alignment]}deg) scaleX(${transformations[this.alignment]})`
   }

   this.value = Math.abs(this.value)
    
  }

}

enum transformations{
  'left' = 1,
  'right' = -1,
  'negative' = 90,
  'positive' = 0,
  'neutral' = 0
}