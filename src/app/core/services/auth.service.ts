import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/common/models/services/Customer.model';
import { Token } from 'src/app/common/models/services/Token.model';
import { CustomerAppService } from 'src/app/common/services/customer-app.service';
import { TokenAppService } from 'src/app/common/services/token-app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private customerAppService: CustomerAppService,
    private tokenAppService: TokenAppService,
    private router: Router) {

  }

  login(customer?: Customer, token?: Token) {
    this.customerAppService.customerApp = customer;
    this.tokenAppService.tokenApp = token;
    this.router.navigate(['/home/meter-devices']);
  }

  logout() {
    this.customerAppService.customerApp = undefined;
    this.tokenAppService.tokenApp = undefined;
    this.router.navigate(['login']);
  }
}
