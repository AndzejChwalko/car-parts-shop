import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
	name: 'smartdate'
})
export class SmartDatePipe implements PipeTransform{
	emptyDate: Date = new Date();

	constructor( private datePipe: DatePipe){}

	transform(obj: string, args:any): any {
		if (args.field.toLowerCase() === 'createdat' || args.field.toLowerCase() === 'updatedat'){
			return this.datePipe.transform(obj, args.format);
		}
		return obj;
	}
}
