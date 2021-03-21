import { Injectable } from '@angular/core';
import { Customer } from '../models/services/Customer.model';

export const keySorage = 'USER_APP';

@Injectable({
  providedIn: 'root',
})
export class CustomerAppService {
  // user
  private __customerApp?: Customer;
  get customerApp(): Customer | undefined {
    if (!this.__customerApp) {
      const storage = localStorage.getItem(keySorage);
      if (storage != null) {
        this.__customerApp = new Customer(JSON.parse(storage));
      }
    }

    return this.__customerApp;
  }
  set customerApp(customerApp: Customer | undefined) {
    if (customerApp != null) {
      localStorage.setItem(keySorage, JSON.stringify(customerApp));
    } else {
      localStorage.removeItem(keySorage);
    }

    this.__customerApp = customerApp;
  }
}
