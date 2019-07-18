import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from '../material-module.module';
import { SettingsPageComponent } from './settings-page.component';
import { MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule }        from '../common/components/header/header.module';
import { ProgressbarModule } from '../common/components/progressbar/progressbar.module';
import { FooterModule } from './../common/components/footer/footer.module';
import { BannersModule } from '../common/components/banners/banners.module';
import {HomeModule} from '../home/home.module';
import { CpoTaskCardModule } from "../common/components/cpo-task-card/cpo-task-card.module";
import { SidenavMenuModule } from '../common/components/sidenav-menu/sidenav-menu.module';

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressbarModule,
    HeaderModule,
    SidenavMenuModule,
    FooterModule,
    BannersModule,
    HomeModule,
    CpoTaskCardModule
  ],
  exports: [SettingsPageComponent]
})
export class SettingsPageModule { }

