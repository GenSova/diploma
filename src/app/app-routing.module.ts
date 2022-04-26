import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './main/catalog/catalog.component';
import {ContactsComponent} from './main/contacts/contacts.component';
import {DisclaimerComponent} from './main/disclaimer/disclaimer.component';
import {FaqComponent} from './main/faq/faq.component';
import {RecoverComponent} from './main/recover/recover.component';
import {RegistrationComponent} from './main/registration/registration.component';
import {BookPageComponent} from './main/book-page/book-page.component';
import {DeactivateGuard} from './guards/deactivate.guard';
import {SubscribesComponent} from './main/profile/subscribes/subscribes.component';
import {ProfileComponent} from './main/profile/profile.component';
import {AboutComponent} from './main/about/about.component';
import {MapComponent} from './main/map/map.component';
import {DesiredComponent} from './main/profile/desired/desired.component';
import {StockComponent} from './main/profile/stock/stock.component';
import {UnwantedComponent} from './main/profile/unwanted/unwanted.component';
import {FilteredCategoryComponent} from './main/filtered-category/filtered-category.component';
import {DonationComponent} from './main/donation/donation.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    canDeactivate: [DeactivateGuard]
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'recover',
    component: RecoverComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canDeactivate: [DeactivateGuard]
  },
  {
    path: 'book-page/:id',
    component: BookPageComponent
  },
  {
    path: 'subscribes',
    component: SubscribesComponent
  },
  {
    path: 'desired',
    component: DesiredComponent
  },
  {
    path: 'stock',
    component: StockComponent
  },
  {
    path: 'unwanted',
    component: UnwantedComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'filtered-category/:categoryName',
    component: FilteredCategoryComponent
  },
  {
    path: 'donation',
    component: DonationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
  providers: [DeactivateGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
