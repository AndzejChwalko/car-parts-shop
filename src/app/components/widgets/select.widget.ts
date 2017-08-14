import { Component, Input,/* OnInit */} from '@angular/core';
import { SelectWidget } from 'angular2-schema-form/dist/defaultwidgets/select/select.widget';
//import { HttpService } from '../http/customers.service';

@Component({
	selector:'select-from-array',
	templateUrl: './select.widget.html'
})
export class SelectFromArrayWidget extends SelectWidget /*implements OnInit*/ {
	@Input() keyValue;
	@Input() descriptionKey;
	@Input() oneOf: object[];

	/*constructor( private http: HttpService){
		super();
	}

	ngOnInit():void {

	}*/
}