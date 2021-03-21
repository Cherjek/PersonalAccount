import { Customer } from 'src/app/common/models/services/Customer.model';
import { Token } from 'src/app/common/models/services/Token.model';

export type LoginStatus =
  'SUCCESS' |
  'BAD_USER_OR_PASSWORD' |
  'REGISTRATION_NOT_FINISHED' |
  'BLOCKED' |
  'TOO_MANY_FAILED_ATTEMPTS';

export class LoginResponse {
  status: LoginStatus;
  token?: Token;
  customer?: Customer;

  constructor(options: {
    status: LoginStatus;
    token?: Token;
    customer?: Customer;
  }) {
    this.status = options.status;
    this.token = options.token;
    this.customer = options.customer;
  }
}
