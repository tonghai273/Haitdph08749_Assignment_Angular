import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {IndexComponent} from './index/index.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductManegerComponent} from './product-maneger/product-maneger.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ProductAddComponent} from './product-add/product-add.component';
import {ShopComponent} from './shop/shop.component';
import {ProductDetialComponent} from './product-detial/product-detial.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {IndexAdminComponent} from './index-admin/index-admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    IndexComponent,
    ProductManegerComponent,
    ProductAddComponent,
    ShopComponent,
    ProductDetialComponent,
    ProductEditComponent,
    NotFoundComponent,
    IndexAdminComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
