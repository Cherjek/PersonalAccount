import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export async function loginModuleFactory() {
  const m = await import(
    './modules/login/login.module'
  );
  return m.LoginModule;
}

export async function homeModuleFactory() {
  const m = await import(
    './modules/home/home.module'
  );
  return m.HomeModule;
}

export const testPage = async () => {
  return (await import('./modules/test-page/test-page.module')).TestPageModule;
};


const routes: Routes = [{ 
  path: '', redirectTo: 'login', pathMatch: 'full'
}, {
  path: '',
  loadChildren: loginModuleFactory,
  // data: { access: 'TC_START', modulePath: modConstant.TariffCalc },
  // canActivate: [CanAccessGuard]
}, {
  path: '',
  loadChildren: homeModuleFactory,
}, {
  path: 'test-page',
  loadChildren: testPage,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
