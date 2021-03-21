import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorsModule } from '../controls/editors/editors.module';

import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    EditorsModule
  ]
})
export class LoginModule { }
