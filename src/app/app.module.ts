import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { RouterComponent } from './components/router/router.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [   
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    RouterComponent,
    ContactsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RouterComponent]
})
export class AppModule { }
