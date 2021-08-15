import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PregnancyService } from './services/pregnancy.service';
import { PregnancyListComponent } from './components/pregnancy-list/pregnancy-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PregnancyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PregnancyService,
    DatePipe,

  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
