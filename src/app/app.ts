import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './views/home/home.routes';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home';
import { CardsComponent } from './views/home/cards/cards';
import { SidenavComponent } from './views/home/sidenav/sidenav';
import { ChartComponent } from './views/home/chart/chart';
import { provideCharts, BaseChartDirective, withDefaultRegisterables } from 'ng2-charts';
import { SliderComponent } from './views/home/slider/slider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './views/home/table/table';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './views/home/tabs/tabs';

@NgModule({
  declarations: [
    TabsComponent,
    HomeComponent,
    CardsComponent,
    ChartComponent,
    TableComponent,
    SliderComponent,
    SidenavComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    CarouselModule,
    HomeRoutingModule,
    BaseChartDirective,
    BrowserAnimationsModule,
  ],
  providers: [provideCharts(withDefaultRegisterables())],
  bootstrap: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
