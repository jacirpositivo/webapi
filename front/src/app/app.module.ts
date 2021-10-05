import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HighchartsChartModule } from 'highcharts-angular';


import { ChartpieComponent } from './componentes/charts/chartpie/chartpie.component';
import { ChartlineComponent } from './componentes/charts/chartline/chartline.component';
import { ChartbarComponent } from './componentes/charts/chartbar/chartbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartpieComponent,
    ChartlineComponent,
    ChartbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
