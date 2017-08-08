import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopNavComponent } from './components/navbar/top-nav/top-nav.component';
import { SidebarComponent } from './components/navbar/sidebar/sidebar.component';
import { FooterComponent } from './components/navbar/footer/footer.component';
import { MainComponent } from './components/main/main/main.component';
import { MenuItemComponent } from './components/main/menu-item/menu-item.component';

import { MenuItem } from './components/main/menu-item/mitem';
import { MenuItemService } from  './components/main/menu-item/mitem.servece';
import { HttpService } from './components/http/customers.service';
import { DataService } from './components/datasharing/data.service';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    MenuItemComponent,


  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
  ],
  providers:[
    MenuItemService,
    HttpService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
