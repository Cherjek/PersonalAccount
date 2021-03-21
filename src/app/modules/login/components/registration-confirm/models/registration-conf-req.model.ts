export class RegistrationConfirmRequest {
  confirmationCode: string; 
  customerId: number;
  constructor(options: {
    confirmationCode: string; 
    customerId: number;
  }) {
    this.confirmationCode = options.confirmationCode;
    this.customerId = options.customerId;
  }
}
