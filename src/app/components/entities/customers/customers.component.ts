import { Component, OnInit } from '@angular/core';

import { DataService } from '../../datasharing/data.service';
import { HttpService } from '../../http/customers.service';
import { FormSchemService } from '../../../services/formschem.service';

const CUST_POST_URL: string = '/api/customers';
const ADD_FORM_PATH: string = 'assets/formschema/add.customer.form.schema.json';


@Component({
	selector:    'customers',
	templateUrl: './customers.component.html',
	styleUrls: [ './customers.component.css']
})
export class CustomersComponent implements OnInit {

	customers: string[];
	data: DataService;
	http: HttpService;
	form: FormSchemService;

	customerSchema = null;

	customerActions = {
		"createCustomer" : (property) => { 
			this.addCustomer(property.value);
			property.reset();
		}
	};

	constructor(data: DataService, http: HttpService, form: FormSchemService) {
		this.data = data;
		this.http = http;
		this.form = form;
	}

	ngOnInit(){
		this.form.getSchema( ADD_FORM_PATH ).subscribe( result => {
			this.customerSchema = result.json();
		});
		this.getAllCustomers();
	}

	getAllCustomers(): any {
		this.http.doGet( CUST_POST_URL ).subscribe( response => {
			this.customers = response;
		})
	}

	addCustomer(customer: object): any{
	  	this.http.doPost( CUST_POST_URL, customer ).subscribe( response => {
	  		this.http.doGet( CUST_POST_URL ).subscribe( response => {
	  			this.customers = response;
	  		} );
	  	});
  	}
  	greet(obj: any):void {
	  	if(obj.target.localName === 'button'){
	  		obj.target.className = 'btn btn-primary';
	  	console.log(obj);
	  }
	 }


}