import { Customer } from 'src/app/common/models/services/Customer.model';
import { Token } from 'src/app/common/models/services/Token.model';

export type RegistrationConfirmStatus =
  'SUCCESS' |
  'BAD_CONFIRMATION_CODE' |
  'CUSTOMER_NOT_FOUND' |
  'ALREADY_CONFIRMED' |
  'BLOCKED' |
  'DISABLED';

export class RegistrationConfirmResponse {
  status: RegistrationConfirmStatus;
  customer?: Customer;
  token?: Token;

  constructor(options: {
    status: RegistrationConfirmStatus;
    token?: Token;
    customer?: Customer;
  }) {
    this.status = options.status;
    this.token = options.token;
    this.customer = options.customer;
  }
}
