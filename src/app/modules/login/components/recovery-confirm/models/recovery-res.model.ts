import { Customer } from 'src/app/common/models/services/Customer.model';

export type RecoveryConfirmStatus =
  | 'SUCCESS'
  | 'BLOCKED'
  | 'DISABLED'
  | 'BAD_CONFIRMATION_CODE'
  | 'ALREADY_CONFIRMED'
  | 'CUSTOMER_NOT_FOUND';

export class RecoveryConfirmResponse {
  status: RecoveryConfirmStatus;
  customer?: Customer;

  constructor(options: { status: RecoveryConfirmStatus; customer?: Customer }) {
    this.status = options.status;
    this.customer = options.customer;
  }
}
