import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {

  transform(inputArray: Array<any>, searchText: any, desc: Array<any>): any {
  	if (inputArray && desc){
	    if(!searchText) {
	    	console.log('empty');
	    	return inputArray;
	    }

	    let arr = inputArray.filter(function(element){
	    	let flag = false;
	    	desc.forEach( function(key) {
	    		if( element[key].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1 ){
	    			flag = true;
	    		}
	    	});
	      return flag;
	    });

	    console.log(arr);
	    return arr;
	}
	return inputArray;
  }
}