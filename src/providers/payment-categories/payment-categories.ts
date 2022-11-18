import { Injectable } from "@angular/core";

/*
  Generated class for the PaymentCategoriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaymentCategoriesProvider {

  categories: PaymentCategoriesList = {
    utilities: { name: "utilities", icon: "ph-fire-light", color: "#F3AF2A" },
    "topup": { name: "topup", icon: "ph-sim-card-light", color: "#F32A8A" },
  };

  categoryIconColor: string = "#FDFDFD";

  constructor() {
    
  }

  getCategoryArray() {
    return Object.values(this.categories);
  }
}

export type PaymentCategoriesList = {
  [x: string]: PaymentCategory;
};

export interface PaymentCategory {
  name: string;
  icon: string;
  color: string;
}
