import { Injectable } from '@angular/core';
import { Token } from '../models/services/Token.model';

export const keySorage = 'TOKEN_APP';

@Injectable({
  providedIn: 'root'
})
export class TokenAppService {
  // token
  private __tokenApp!: Token | undefined;
  get tokenApp(): Token | undefined {
    if (!this.__tokenApp) {
      const storage = localStorage.getItem(keySorage);
      if (storage != null) {
        this.__tokenApp = new Token(JSON.parse(storage));
      }
    }

    return this.__tokenApp;
  }
  set tokenApp(tokenApp: Token | undefined) {
    if (tokenApp != null) {
      localStorage.setItem(keySorage, JSON.stringify(tokenApp));
    } else {
      localStorage.removeItem(keySorage);
    }

    this.__tokenApp = tokenApp;
  }
}
