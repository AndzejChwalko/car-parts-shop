import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { NgbModule }           from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule, Http, Response } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';

import { AppComponent }      from './app.component';
import { TopNavComponent }   from './components/navbar/top-nav/top-nav.component';
import { SidebarComponent }  from './components/navbar/sidebar/sidebar.component';
import { FooterComponent }   from './components/navbar/footer/footer.component';
import { MainComponent }     from './components/main/main/main.component';
import { MenuItemComponent } from './components/main/menu-item/menu-item.component';
import { FormGeneratorComponent } from './components/forms/form.component';
import { TableGeneratorComponent } from './components/tables/table.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';

import { ButtonCssWidget }   from './components/widgets/button.css.widget';
import { SelectFromArrayWidget }   from './components/widgets/select.widget';
import { OwnWidgetRegistry } from './components/widgets/widget.registry';

import { MenuItem }        from './components/main/menu-item/mitem';
import { MenuItemService } from  './components/main/menu-item/mitem.servece';
import { HttpService }     from './components/http/customers.service';
import { DataService }     from './components/datasharing/data.service';
import { FormSchemService } from './services/formschem.service';

import { CustomersComponent } from './components/entities/customers/customers.component';
import { CustomerDetailsComponent } from './components/entities/customers/details/customer.details.component';
import { ProductsComponent } from './components/entities/products/products.component';
import { ProductDetailsComponent } from './components/entities/products/details/product.details.component';
//import { Product } from './components/entities/products/product';

import { CapitalizePipe } from './utils/capitalize.pipe';
import { OrderrByPipe } from './utils/orderby.pipe';
import { SearchPipe } from './utils/search.pipe';
import { HighlightPipe } from './utils/highligh.pipe';
import { SmartDatePipe } from './utils/date.pipe';

import { OrdersComponent } from './components/entities/orders/orders.component';
import { OrderDetailsComponent } from './components/entities/orders/details/order.details.component';
import { HomeComponent } from './components/home/home.component';

/* Routing */
import { AppRoutingModule }from './app-routes.module'

/* Angular2-schema-form */
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'angular2-schema-form';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    MenuItemComponent,
    ButtonCssWidget,
    CustomersComponent,
    CustomerDetailsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    OrdersComponent,
    OrderDetailsComponent,
    HomeComponent,
    FormGeneratorComponent,
    TableGeneratorComponent,
    CapitalizePipe,
    OrderrByPipe,
    SearchPipe,
    HighlightPipe,
    CardComponent,
    ModalComponent,
    SmartDatePipe,
    SelectFromArrayWidget
   // Product

  ],
  imports: [
    HttpModule,
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    SchemaFormModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers:[
    //Http,
    MenuItemService,
    HttpService,
    DataService,
    FormSchemService,
    {provide: WidgetRegistry, useClass: OwnWidgetRegistry},
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
