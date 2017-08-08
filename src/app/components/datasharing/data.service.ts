import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	private httpGetResult = new BehaviorSubject<string[]>([]);
	currentHttpGetResult = this.httpGetResult.asObservable();

	constructor(){

	}

	reciveHttpGetResult(result: string[]){
		this.httpGetResult.next(result);

	}
}