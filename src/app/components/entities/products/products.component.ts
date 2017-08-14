import { Component, OnInit, Input} from '@angular/core';

import { FormGeneratorComponent } from '../../forms/form.component';
import { Product } from './product';

import { DataService } from '../../datasharing/data.service';
import { HttpService } from '../../http/customers.service';
import { FormSchemService } from '../../../services/formschem.service';
import { Router } from '@angular/router';

const PRODUCT_POST_URL: string = '/api/products';

const PATH_TO_SCHEMA: string = 'assets/formschema/add.form.schema.json';


@Component({
	selector:    'products',
	templateUrl: './products.component.html',
	styleUrls: [ './products.component.css']
})
export class ProductsComponent implements OnInit {

	@Input() products: string[];
	productInstance: Product = new Product();
	private data: DataService;
	private http: HttpService;
	private formSchema: FormSchemService;
	private router: Router;

	private showAddDialog: boolean = false;

	
	/* Form definition */
	productSchema = null;

	productActions = {
		"createProduct": (property) => {
			this.addProduct(property.value);
			property.reset();
			this.showAddDialog = false;
		},
		"resetForm": (property) => {
			property.reset();
			this.showAddDialog = false;
		}
	}
	/* form definition end */

	constructor(data: DataService, http: HttpService, form: FormSchemService, router: Router) {
		this.data = data;
		this.http = http;
		this.formSchema = form;
		this.router = router;
	}

	ngOnInit(){
		this.formSchema.getSchema( PATH_TO_SCHEMA ).subscribe( result => {
			this.productSchema = result.json();
		});
		this.getAllProducts();
	}

	

	getAllProducts(): any{
		this.http.doGet( PRODUCT_POST_URL ).subscribe( result => {
			this.products = result;
			console.log(this.products);
		});
	}

	addProduct(obj: object): any{
		this.http.doPost( PRODUCT_POST_URL, obj ).subscribe( result => {
			this.getAllProducts();
		})
	}

	goToDetailPage(obj: any) : void{
		this.router.navigate(['/products', obj.id]);
	}

}