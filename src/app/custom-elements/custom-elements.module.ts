import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CommonModule } from '@angular/common';
import { EditorsModule } from 'src/app/modules/controls/editors/editors.module';

import { CELoginComponent } from './login/login.component';
import { CERegistrationComponent } from './registration/registration.component';
import { CERecoveryComponent } from './recovery/recovery.component';
import { DynamicsFormModule } from '../dynamics-form-control/dynamics-forms.module';
import { RouterModule } from '@angular/router';
import { CERegistrationConfirmComponent } from './registration-confirm/registration-confirm.component';
import { CEHomeComponent } from './home/home.component';
import { CERecoveryConfirmComponent } from './recovery-confirm/recovery-confirm.component';
import { SharedControlsModule } from '../modules/shared/controls/shared-controls.module';
import { CEMeteringDevicesCreateComponent } from './metering-devices-create/metering-devices-create.component';
import { SharedDirectivesModule } from '../modules/shared/directives/shared-directives.module';


@NgModule({
  declarations: [
    CELoginComponent, 
    CERegistrationComponent, 
    CERecoveryComponent,
    CERegistrationConfirmComponent,
    CERecoveryConfirmComponent,
    CEHomeComponent,
    CEMeteringDevicesCreateComponent
  ],
  imports: [
    CommonModule, 
    RouterModule, 
    DynamicsFormModule, 
    EditorsModule,
    SharedControlsModule,
    SharedDirectivesModule
  ]  
})
export class CustomElementsModule {
  constructor(public injector: Injector) {
    if (!customElements.get('login-element')) {
      // Convert to a custom element.
      const loginElement = createCustomElement(CELoginComponent, {
        injector,
      });
      // Register the custom element with the browser.
      customElements.define('login-element', loginElement);
    }
    if (!customElements.get('registration-element')) {
      // Convert to a custom element.
      const registrationElement = createCustomElement(CERegistrationComponent, {
        injector,
      });
      // Register the custom element with the browser.
      customElements.define('registration-element', registrationElement);
    }
    if (!customElements.get('registration-confirm-element')) {
      // Convert to a custom element.
      const registrationConfirmElement = createCustomElement(CERegistrationConfirmComponent, {
        injector,
      });
      // Register the custom element with the browser.
      customElements.define('registration-confirm-element', registrationConfirmElement);
    }
    if (!customElements.get('recovery-element')) {
      // Convert to a custom element.
      const recoveryElement = createCustomElement(CERecoveryComponent, {
        injector,
      });
      // Register the custom element with the browser.
      customElements.define('recovery-element', recoveryElement);
    }
    if (!customElements.get('recovery-confirm-element')) {
      // Convert to a custom element.
      const recoveryConfirmElement = createCustomElement(CERecoveryConfirmComponent, {
        injector,
      });
      // Register the custom element with the browser.
      customElements.define('recovery-confirm-element', recoveryConfirmElement);
    }
    if (!customElements.get('home-element')) {
      // Convert to a custom element.
      const homeElement = createCustomElement(CEHomeComponent, {
        injector,
      });
      // Register the custom element with the browser.
      customElements.define('home-element', homeElement);
    }
    if (!customElements.get('metering-devices-create-element')) {
      // Convert to a custom element.
      const meteringDevicesCreateComponent = createCustomElement(CEMeteringDevicesCreateComponent, {
        injector,
      });
      // Register the custom element with the browser.
      customElements.define('metering-devices-create-element', meteringDevicesCreateComponent);
    }
  }
}
