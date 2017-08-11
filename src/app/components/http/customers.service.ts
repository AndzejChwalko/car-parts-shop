import { Injectable} from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

	URL: string ='http://radiant-savannah-46939.herokuapp.com';
	result: string[];
	httpService: HttpClient;

	constructor(httpService: HttpClient){
		this.httpService = httpService;
	}


	doGet(url: string): any {
		return this.httpService.get( this.URL + url );
	}

	doGetOne( url: string ): any {
		return this.httpService.get( this.URL + url );
	}

	doPost(url: string, body: object): any {
		return this.httpService.post( this.URL + url, body );
	}
}