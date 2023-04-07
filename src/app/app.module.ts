import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnComponent } from './componenets/btn/btn.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnComponent,
    BoardsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
