import { Component } from "@angular/core";
import { ContactsInitProvider } from "../../providers/contacts/contacts-init";
import { PaymentCategoriesProvider, PaymentCategory } from "../../providers/payment-categories/payment-categories";
import { Contacts } from "../../types/Contacts";

/**
 * Generated class for the ShortcutsCarouselComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "shortcuts-carousel",
  templateUrl: "shortcuts-carousel.html",
})
export class ShortcutsCarouselComponent {

  categories: PaymentCategory[]
  categoryIconColor: PaymentCategoriesProvider['categoryIconColor']
  contacts:Contacts[]


  constructor(public paymentCategories: PaymentCategoriesProvider, public contactsService: ContactsInitProvider) {
    this.categories = paymentCategories.getCategoryArray()
    this.categoryIconColor = paymentCategories.categoryIconColor
    contactsService.contacts.then(data => this.contacts = data)
  }

  ngOnInit(){
  }
}