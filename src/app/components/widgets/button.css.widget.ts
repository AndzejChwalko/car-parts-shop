import { Component } from '@angular/core';

import { StringWidget } from 'angular2-schema-form';

@Component({
	selector: 'sf-button-css-widget',
	///template: `<button (click)="button.action($event)" class="btn btn-primary" style="color: #fff">{{button.label}}</button>`
	templateUrl: './button.widget.tmpl.html'
})

export class ButtonCssWidget extends StringWidget{
	constructor(){
		super();
		console.log('oifosidfjlsdkf');
	}
}
