import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NbCardModule, NbIconModule, NbStatusService, NbThemeModule, NbThemeService} from "@nebular/theme";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbActiveModal, NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbCardModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NbThemeModule,
    HttpClientModule,
    TranslateModule.forRoot( {
      loader: {
        provide : TranslateLoader,
        useFactory : HttpLoaderFactory,
        deps : [HttpClient]
      }
    })


  ],
  providers: [NbStatusService, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
