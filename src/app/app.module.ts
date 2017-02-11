import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

//web-api

import { InMemoryWebApiModule } from '../in-memory-web-api.module';
import { InMemoryDbService }  from '../in-memory-backend.service';
import { InMemoryBackendService  }  from '../in-memory-backend.service';
import { InMemoryDataService }  from '../in-memory-data.service';

//web-api end

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeroService } from './service/hero.service';




@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),//web-api
      AppRoutingModule

  ],
  providers: [
      HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
