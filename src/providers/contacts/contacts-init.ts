import { Injectable } from "@angular/core";
import { Contacts } from "../../types/Contacts";
import { WalletApiProvider } from "../wallet/wallet-api";
import { ContactsApiProvider } from "./contacts-api";

/*
  Generated class for the ContactsInitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsInitProvider {
  key_wallet: 'etnk4khoaUQQYWWgKXgAF6ZKyX8URa1Ad1AgXCoPYQViWHKwAVhhNASVAcJDMuVbsRaCX49So64oY8aSZ4mvPqxu1xfXEAjye8';
  contacts: Promise<Contacts[]>

  constructor(
    public contactData: ContactsApiProvider,
    public walletData: WalletApiProvider
  ) {

    let key_wallet = 'etnk4khoaUQQYWWgKXgAF6ZKyX8URa1Ad1AgXCoPYQViWHKwAVhhNASVAcJDMuVbsRaCX49So64oY8aSZ4mvPqxu1xfXEAjye8'
    const extractData = this.contactData.getContacts().toPromise()

    const getRandomBool = () =>  Math.random() < 0.3 ? false : true

    this.contacts = extractData.then(data => {
      return data.results.map((item, i) => {
        const {name, login, picture} = item

        return {
          firstName: name.first,
          lastName: name.last,
          walletAddress: i == 0 ? key_wallet : 'etn' + login.sha1,
          imageUrl: getRandomBool() ? picture.thumbnail : ''
        } as Contacts
      }
      )
    })
  }

  logContacts() {
    this.contacts.then(data => console.log(data))
  }
}



