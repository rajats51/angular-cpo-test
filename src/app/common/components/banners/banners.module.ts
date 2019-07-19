import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../material-module.module';
import { Routes, RouterModule } from '@angular/router';
import { SettingsBannerComponent } from './settings-banner/settings-banner.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SettingsBannerComponent,
    ],
  imports: [
    MaterialModule,
    RouterModule,
    CommonModule 
  ],
  exports:[SettingsBannerComponent]
})
export class BannersModule { }
