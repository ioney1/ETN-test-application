import { Component, Input } from "@angular/core";

/**
 * Generated class for the TransactionsReportComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "transactions-report",
  templateUrl: "transactions-report.html",
})
export class TransactionsReportComponent {
  @Input() data: { current: number[]; previous: number[] } = {
    current: [9000.45, 4599.55],
    previous: [232.45, 4232.34],
  };
  amounts: number[];
  barWidth: number[];

  constructor() {}

  ngOnInit() {
    let amounts = this.data.current

    let total = amounts.reduce((prev, next) => prev + next, 0)
    this.barWidth = amounts.map(value =>(value * 100)/total)
  }



  //create custom pipe to format the numbers into truncated forms for large values
}
