import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../http/customers.service';
import { Customer } from '../customer';
import { Location } from '@angular/common';
import { FormSchemService } from '../../../../services/formschem.service';


const URL: string = '/api';
const PATH_TO_SCHEMA: string = 'assets/formschema/update.customer.form.schema.json';

@Component({
	selector:    'customer',
	templateUrl: './customer.details.component.html',
	styleUrls: [ './customer.details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

	private router: Router;
	private	http: HttpService;
	private location: Location;
	private form: FormSchemService;

	private customer:  Customer;
	private keys: string[] = Object.keys( new Customer() );

	private showEditDialog: boolean = false;
	private showYouSureDialog: boolean = false;
	private youSureDialogTitle: string = "Deleting entity";

	private schema = null;
	private actions = {
		"updeteCustomer": (property) => {
			this.http.doPut( (URL + this.router.url), property.value ).subscribe( result => {
				this.customer = result;
				this.showEditDialog = false;
		});
		},
		"resetForm": (property) => {
			this.showEditDialog = false;
		}
	}

	constructor( router: Router,
				 http: HttpService,
				 form: FormSchemService,
				 location: Location) {
		this.router = router;
		this.http = http;
		this.form = form;
		this.location = location;
	}

	ngOnInit(){
		this.getSchema( PATH_TO_SCHEMA );
		this.getCustomer();
	}

	

	getSchema( url: string ): void {
		this.form.getSchema( PATH_TO_SCHEMA ).subscribe( result => {
			this.schema = result.json();
		});
	}

	getCustomer( ): void {
		this.http.doGetOne( URL + this.router.url ).subscribe( result => {
			this.customer = result;
		}); 
	}


	deleteCustomer( ): void {
		this.http.doDelete( (URL + this.router.url )).subscribe( result => {
			this.cancel();
			this.goBack();
		});
	}

	goBack():void {
		this.location.back();
	}

	cancel(): void {
		this.showYouSureDialog = false;
	}
}