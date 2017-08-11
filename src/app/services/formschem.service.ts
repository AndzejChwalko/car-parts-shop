import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class FormSchemService {
	private http: Http;

	constructor(http: Http){
		this.http = http;
	}

	getSchema( path: string): any {
	    return this.http.get( path );
	  }
	
}