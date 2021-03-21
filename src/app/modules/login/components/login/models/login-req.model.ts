export class LoginRequest {
  password: string;
  phoneNumberOrEmail: string;
  constructor(options: {
    password: string;
    phoneNumberOrEmail: string;
  }) {
    this.password = options.password;
    this.phoneNumberOrEmail = options.phoneNumberOrEmail;
  }
}