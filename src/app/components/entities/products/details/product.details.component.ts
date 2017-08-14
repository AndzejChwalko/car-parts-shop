import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../http/customers.service';
import { Product } from '../product';
import { Location } from '@angular/common';
import { FormSchemService } from '../../../../services/formschem.service';


const URL: string = '/api';
const PATH_TO_SCHEMA: string = 'assets/formschema/update.product.form.schema.json';

@Component({
	selector:    'product',
	templateUrl: './product.details.component.html',
	styleUrls: [ './product.details.component.css']
})
export class ProductDetailsComponent implements OnInit {

	private route: Router;
	private location: Location;
	private http: HttpService;
	private formSchema: FormSchemService;
	private product: object;
	private keys: string[] = Object.keys( new Product() );

	private showEditDialog: boolean = false;
	private showYouSureDialog: boolean = false;
	private youSureDialogTitle: string = "Deleting entity";

	private schema = null;
	private actions = {
		"updateProduct": (property) => {
			this.http.doPut( (URL + this.route.url), property.value ).subscribe( result => {
				this.http.doGetOne ( URL + this.route.url ).subscribe( result => {
					this.product = result;
				});
			});
			this.showEditDialog = false;
		},
		"resetForm": (property) => {
			property.reset();
			this.showEditDialog = false;
		}
	}
	//private validators:

	constructor(router: Router, http: HttpService, location: Location, form: FormSchemService,) {
		this.route = router;
		this.http = http;
		this.location = location;
		this.formSchema = form;
	}

	ngOnInit(){
		this.formSchema.getSchema( PATH_TO_SCHEMA ).subscribe( result => {
			this.schema = result.json();
		});
		this.http.doGetOne( URL + this.route.url).subscribe( result => {
			this.product = result;
		});
	}

	goBack(){
		this.location.back();
	}

	deleteProduct(): void {
		this.http.doDelete( (URL + this.route.url )).subscribe( result => {
			this.showYouSureDialog = false;
			this.goBack();
		});
		
	}

	cancel(): void {
		this.showYouSureDialog = false;
	}
}