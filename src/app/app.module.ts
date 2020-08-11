import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule }      from 'ngx-bootstrap/modal';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { CollapseModule }   from 'ngx-bootstrap/collapse';
import { PopoverModule }    from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { HighchartsChartModule } from 'highcharts-angular';


import { AppComponent }                                             from './app.component';
import { SocketService }                                            from './app.service';
import { ChatComponent }                                            from './chat/chat.component';
import { ActiveDevicesComponent }                                   from './active-devices/active-devices.component';
import { FavoritDevicesComponent }                                  from './favorit-devices/favorit-devices.component';
import { DevicesComponent, ObjNgFor, isEmpty }                      from './devices/devices.component';
import { SwitchButtonComponent, ShutterComponent, DimmerComponent } from "./device/device.component";
import { HomeComponent }                                            from './home/home.component';
import { GroupsComponent }                                          from './groups/groups.component';
import { GlobalObjectsService }                                     from "./app.service.global";
import { CountdownsComponent }                                      from './countdowns/countdowns.component';
import { TimersComponent }                                          from './timers/timers.component';
import { TimerHeaderComponent }                                     from './timer-header/timer-header.component';
import { TimerShowComponent }                                       from './timer-show/timer-show.component';
import { AlertsComponent }                                          from "./alerts/alerts.component";
import { ChartComponent }                                           from './chart/chart.component';

import { VariablesComponent } from './variables/variables.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent
    ,ChatComponent
    ,ActiveDevicesComponent
    ,FavoritDevicesComponent
    ,DevicesComponent
    ,SwitchButtonComponent
    ,ShutterComponent
    ,DimmerComponent
    ,HomeComponent
    ,DevicesComponent
    ,ObjNgFor
    ,isEmpty
    ,GroupsComponent
    ,CountdownsComponent
    ,TimersComponent
    ,TimerHeaderComponent
    ,TimerShowComponent
    ,AlertsComponent, ChartComponent, VariablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule.forRoot(),
    DatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    HighchartsChartModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'devices',
        component: DevicesComponent
      },
      {
        path: 'timers',
        component: TimersComponent
      },
      {
        path: 'editTimer',
        loadChildren: "./timer-edit/timer-edit.module#TimerEditModule"
      },
      {
        path: 'chart',
        component: ChartComponent
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ],{
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64] // [x, y] - adjust scroll offset
    }),
    BrowserAnimationsModule
  ],
  exports:[RouterModule],
  providers: [
    SocketService
    ,GlobalObjectsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
