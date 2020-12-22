import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogComponent } from './main/catalog/catalog.component';
import { CardComponent } from './main/catalog/card/card.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { AboutComponent } from './main/catalog/about/about.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { DisclaimerComponent } from './main/disclaimer/disclaimer.component';
import { FaqComponent } from './main/faq/faq.component';
import { RecoverComponent } from './main/recover/recover.component';
import { RegistrationComponent } from './main/registration/registration.component';
import { GamePageComponent } from './main/game-page/game-page.component';
import { CommentsComponent } from './main/game-page/comments/comments.component';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {DeactivateGuard} from './guards/deactivate.guard';
import { LoginComponent } from './navbar/login/login.component';
import { SubscribesComponent } from './main/profile/subscribes/subscribes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CatalogComponent,
    CardComponent,
    CategoriesListComponent,
    AboutComponent,
    ContactsComponent,
    DisclaimerComponent,
    FaqComponent,
    RecoverComponent,
    RegistrationComponent,
    GamePageComponent,
    CommentsComponent,
    LoginComponent,
    SubscribesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [DataService, DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
