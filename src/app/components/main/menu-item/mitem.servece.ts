import { Injectable } from '@angular/core';

import { ITEMS } from './mitem.mock';

@Injectable()
export class MenuItemService {
	getItems() {
		return ITEMS;
	}
}