import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module.module';
import { UtilityService } from './common/services/date/utility.service';
import { ApiService } from './common/services/api-service/api.service';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SettingsPageModule } from './settings-page/settings-page.module';
@NgModule({
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    SettingsPageModule,
    PageNotFoundModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [UtilityService, ApiService],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }
