import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { CustomerDataComponent } from './pages/customer-data/customer-data.component';
// import { EmptyRouteComponent } from './empty-route/empty-route.component';
// import { MainPageComponent } from './features/main-page/main-page.component';
// import { Page1Component } from './features/page1/page1.component';

const routes: Routes = [
  {
    path: 'ng14/customer-data',
    component: CustomerDataComponent
  },
  {
    path: 'ng14/product',
    loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)
  },
  {
    path: '**',
    component: EmptyRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  exports: [RouterModule]
})
export class AppRoutingModule { }
