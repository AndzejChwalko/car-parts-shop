import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../datasharing/data.service';
import { HttpService } from '../../http/customers.service';
import { FormSchemService } from '../../../services/formschem.service';

import { FormGeneratorComponent } from '../../forms/form.component';
import { Customer } from './customer';

const CUST_POST_URL: string = '/api/customers';
const ADD_FORM_PATH: string = 'assets/formschema/add.customer.form.schema.json';


@Component({
	selector:    'customers',
	templateUrl: './customers.component.html',
	styleUrls: [ './customers.component.css']
})
export class CustomersComponent implements OnInit {

	@Input() customers: string[];
	private data: DataService;
	private http: HttpService;
	private form: FormSchemService;
	private router: Router;

	private showAddDialog: boolean = false;
	private customerInstance: Customer = new Customer();
	/* Form definition */
	customerSchema = null;

	customerActions = {
		"createCustomer" : (property) => { 
			this.addCustomer(property.value);
			property.reset();
			this.showAddDialog = false;
		},
		"resetForm" : (property) => {
			property.reset();
			this.showAddDialog = false;
		}
	};
	/* end form definition */

	constructor( data: DataService,
				 http: HttpService,
				 form: FormSchemService,
				 router: Router) {
		this.data = data;
		this.http = http;
		this.form = form;
		this.router = router;
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
	  		this.getAllCustomers();
	  	});
  	}
  	
  	goToDetailPage(obj: any) : void{
		this.router.navigate(['/customers', obj.id]);
	}


}