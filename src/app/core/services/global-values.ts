/*
 * Класс используется как сервис для взаимосвязи между компонентами на разных уровнях
 *
 *
 *
 */

import { Injectable } from '@angular/core';
import { AppUser } from '../../common/models/forms/AppUser.model';

export const STORAGE_USER_APP_KEY = 'App.GlobalValues.storageUserApp';

@Injectable()
export class GlobalValues {
  private static _instance: GlobalValues;
  public static get Instance(): GlobalValues {
    if (!this._instance) {
      this._instance = new GlobalValues();
    }
    return this._instance;
  }

  _page: any; // любая информация с любым JSON объектом, для взаимодействия между компонентами <router-outlet>
  get Page(): any {
    if (this._page == null) {
      this._page = {};
    }

    return this._page;
  }
  set Page(pageVal: any) {
    if (this._page == null) {
      this._page = {};
    }

    Object.assign(this._page, pageVal);
  }

  // user
  private __userApp!: AppUser;
  get userApp(): AppUser {
    if (!this.__userApp) {
      const storage = localStorage.getItem(STORAGE_USER_APP_KEY);
      if (storage != null) {
        this.__userApp = Object.assign(new AppUser(), JSON.parse(storage));
      }
    }

    return this.__userApp;
  }
  set userApp(userApp: AppUser) {
    if (userApp != null) {
      localStorage.setItem(
        STORAGE_USER_APP_KEY,
        JSON.stringify(userApp)
      );
    } else {
      localStorage.removeItem(STORAGE_USER_APP_KEY);
    }

    this.__userApp = userApp;
  }
}
