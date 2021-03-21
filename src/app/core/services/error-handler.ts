import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {
  public errorForm?: string;
  handleError(error: any) {
    this.errorForm = error.message;
    // throw error;
  }
}
