import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from '../material-module.module';
import { SettingsPageComponent } from './settings-page.component';
import { MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannersModule } from '../common/components/banners/banners.module';

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BannersModule
  ],
  exports: [SettingsPageComponent]
})
export class SettingsPageModule { }

