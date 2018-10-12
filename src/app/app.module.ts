import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import {ActionsService} from "./services/actions.service";
import { CanvasComponent } from './components/canvas/canvas.component';
import {NavigationService} from "./services/navigation.service";
import { HomeComponent } from './components/canvas/home/home.component';
import { HistoryComponent } from './components/canvas/history/history.component';
import { CardComponent } from './components/canvas/common/card/card.component';
import {CardLoaderService} from "./services/card-loader.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CanvasComponent,
    HomeComponent,
    HistoryComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [ActionsService,
    NavigationService,
    CardLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
