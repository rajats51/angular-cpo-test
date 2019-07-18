import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpoSelectComponent } from './cpo-select.component';
import {MaterialModule} from '../../../material-module.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CpoSelectComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    CommonModule,
    CpoSelectComponent
  ]
})
export class CpoSelectModule { }
