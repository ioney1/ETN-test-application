import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ContactsApiResponse } from "../../types/ContactsApi";

/*
  Generated class for the ContactsApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsApiProvider {
  url: string = "https://randomuser.me/api/";
  data: Promise<Object>

  constructor(public http: HttpClient) {
   this.data = this.getContacts().toPromise()
   this.data.then(data => console.log(data))

  }


  getContacts() {
    return this.http.get<ContactsApiResponse>(this.url, {
      responseType: "json",
      observe: "body",
      params: { results: "8", inc: "name,login,picture" },
    });
  }

}
