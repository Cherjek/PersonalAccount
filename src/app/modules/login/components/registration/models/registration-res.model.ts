import { Customer } from 'src/app/common/models/services/Customer.model';
import { Token } from 'src/app/common/models/services/Token.model';

export type RegistrationStatus =
  'SUCCESS' |
  'ALREADY_REGISTERED' |
  'BLOCKED' |
  'DISABLED';

export class RegistrationResponse {
  status: RegistrationStatus;
  customer?: Customer;

  constructor(options: {
    status: RegistrationStatus;
    customer?: Customer;
  }) {
    this.status = options.status;
    this.customer = options.customer;
  }
}
