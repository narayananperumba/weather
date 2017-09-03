import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { enableProdMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RoundPipe } from './round.pipe';
import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
