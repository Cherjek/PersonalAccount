import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecoveryConfirmComponent } from './components/recovery-confirm/recovery-confirm.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { RegistrationConfirmComponent } from './components/registration-confirm/registration-confirm.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'registration',
  component: RegistrationComponent
}, {
  path: 'registration-confirm/:userId',
  component: RegistrationConfirmComponent
}, {
  path: 'recovery',
  component: RecoveryComponent
}, {
  path: 'recovery-confirm',
  component: RecoveryConfirmComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
