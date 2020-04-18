import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ProductManegerComponent} from './product-maneger/product-maneger.component';
import {ShopComponent} from './shop/shop.component';
import {ProductDetialComponent} from './product-detial/product-detial.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {IndexAdminComponent} from './index-admin/index-admin.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {
    path: 'add',
    component: ProductAddComponent
  },
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'admin',
    component: IndexAdminComponent,
    children: [
      {path: '', redirectTo: 'product', pathMatch: 'full'},
      {path: 'product', component: ProductManegerComponent},
      {path: 'addproduct', component: ProductAddComponent},
      {path: 'product/edit/:productID', component: ProductEditComponent}
    ]
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'detail/:productID',
    component: ProductDetialComponent,
    pathMatch: 'full'
  },
  {
    path: 'product/edit/:productID',
    component: ProductEditComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
