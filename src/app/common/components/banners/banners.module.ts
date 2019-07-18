import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../material-module.module';
import { AvatarBannerComponent } from './avatar-banner/avatar-banner.component';
import { SecondaryBannerComponent } from './secondary-banner/secondary-banner.component';
import { TertiaryBannerComponent } from './tertiary-banner/tertiary-banner.component';
import { Routes, RouterModule } from '@angular/router';
import { SettingsBannerComponent } from './settings-banner/settings-banner.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AvatarBannerComponent,
    SecondaryBannerComponent,
    TertiaryBannerComponent,
    SettingsBannerComponent,
    ],
  imports: [
    MaterialModule,
    RouterModule,
    CommonModule 
  ],
  exports:[AvatarBannerComponent,SecondaryBannerComponent,TertiaryBannerComponent,SettingsBannerComponent]
})
export class BannersModule { }
