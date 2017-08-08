import { Component, OnInit, EventEmitter } from '@angular/core';
import { MenuItemComponent } from '../../main/menu-item/menu-item.component';
import { MenuItem } from '../../main/menu-item/mitem';
import { Observable } from 'rxjs/Observable';
import { MenuItemService } from '../../main/menu-item/mitem.servece';
import { HttpService } from '../../http/customers.service';
import { DataService } from '../../datasharing/data.service';


import 'rxjs/add/observable/of';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {

	http: HttpService;
	items: MenuItem[]; 
	dataServ: DataService;

  constructor(mitemService: MenuItemService, http: HttpService, data: DataService) {
  	this.items = mitemService.getItems();
  	this.http = http;
  	this.dataServ = data;
   }

  ngOnInit() {
  }

  greeting(): any {
  	this.http.doGet('/api/customers').subscribe( data => {
			this.dataServ.reciveHttpGetResult( data );
		}, 
		err => {
			console.log(err);
		});;
  }



}
