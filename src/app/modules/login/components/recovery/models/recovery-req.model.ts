export class RecoveryRequest {
  phoneNumberOrEmail: string; 
  constructor(options: {
    phoneNumberOrEmail: string;
  }) {
    this.phoneNumberOrEmail = options.phoneNumberOrEmail;
  }
}