import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { AppRoutingModule } from './app-routing.module';
import { EQualMonitorComponent } from './e-qual-monitor/e-qual-monitor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import { ResultComponent } from './result/result/result.component';
import { ResponseVOComponent } from './responseVO/response-vo/response-vo.component';
import { TitleComponent } from './title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    ResultComponent,

    EQualMonitorComponent,

    PageNotFoundComponent,

    ResponseVOComponent,

    TitleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
