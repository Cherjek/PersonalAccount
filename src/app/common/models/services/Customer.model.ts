export class Customer {
  id?: number;
  address?: string;
  surname: string;
  firstName: string;
  middleName: string;
  password: string;
  email: string;
  phoneNumber: string;
  constructor(options: {
    id?: number;
    address?: string;
    surname: string;
    firstName: string;
    password: string;
    middleName?: string;
    email?: string;
    phoneNumber?: string;
  }) {
    this.id = options.id;
    this.address = options.address;
    this.surname = options.surname;
    this.firstName = options.firstName;
    this.password = options.password;
    this.middleName = options.middleName || '';
    this.email = options.email || '';
    this.phoneNumber = options.phoneNumber || '';
  }
}