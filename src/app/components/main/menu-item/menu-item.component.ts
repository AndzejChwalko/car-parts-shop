import { Component, Input } from '@angular/core';

import { MenuItem } from './mitem';

import { MenuItemService } from './mitem.servece';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  providers: [ MenuItemService ]
})
export class MenuItemComponent {

	@Input()
	item;
	
  constructor(){
  }

  
  setFaIcon():any{
  	if(this.item.faClass) {
  		return this.item.faClass;
  	}
  	return "";
  }

  setParent(): any{
  	return this.item.parent;
  }

}
