import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/intro/intro.component';
import { ResearchComponent } from './components/research/research.component';
import { FooterComponent } from './components/footer/footer.component';
import { InprogressComponent } from './components/inprogress/inprogress.component';
import { AboutComponent } from './components/about/about.component';
import { Research2015Component } from './components/research2015/research2015.component';
import { Research2017Component } from './components/research2017/research2017.component';
import { Research2018Component } from './components/research2018/research2018.component';
import { Research2020Component } from './components/research2020/research2020.component';
import { Research2021Component } from './components/research2021/research2021.component';
import { ResearchHistoricalComponent } from './components/research-historical/research-historical.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    ResearchComponent,
    FooterComponent,
    InprogressComponent,
    AboutComponent,
    Research2015Component,
    Research2017Component,
    Research2018Component,
    Research2020Component,
    Research2021Component,
    ResearchHistoricalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
