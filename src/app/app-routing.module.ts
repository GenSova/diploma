import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './main/catalog/catalog.component';
import {ContactsComponent} from './main/contacts/contacts.component';
import {DisclaimerComponent} from './main/disclaimer/disclaimer.component';
import {FaqComponent} from './main/faq/faq.component';
import {RecoverComponent} from './main/recover/recover.component';
import {RegistrationComponent} from './main/registration/registration.component';
import {GamePageComponent} from './main/game-page/game-page.component';
import {DeactivateGuard} from './guards/deactivate.guard';
import {SubscribesComponent} from './main/profile/subscribes/subscribes.component';

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
    path: 'game-page/:id',
    component: GamePageComponent
  },
  {
    path: 'subscribes',
    component: SubscribesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
  providers: [DeactivateGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
