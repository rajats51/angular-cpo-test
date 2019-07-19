import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*import { LoginPageComponent } from './login-page/login-page.component';
import { SolutionsCatalogComponent } from './solutions-catalog/solutions-catalog.component';
import { ProspectComponent } from './prospect/prospect.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import {CreatePasswordComponent} from './password/create-password/create-password.component';
import {ChangePasswordComponent} from './password/change-password/change-password.component';*/
import { SettingsPageComponent } from './settings-page/settings-page.component';
const routes: Routes = [
  /*{ path: 'prospect',          loadChildren: './prospect/prospect.module#ProspectModule' },
  { path: 'solutions-catalog', component: SolutionsCatalogComponent },
  { path: 'popup',             component: PopupDialogComponent },
  { path: 'createpassword/:from',    component: CreatePasswordComponent},
  { path: 'changepassword',    component: ChangePasswordComponent },
  // { path: 'password',          loadChildren: './password/password.module#PasswordModule' },
  { path: 'verify',            loadChildren: './verify/verify.module#VerifyModule' },*/
  { path: 'settings', component: SettingsPageComponent },
  { path: '', component: SettingsPageComponent },
  { path: '**', redirectTo: '/pagenotfound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
