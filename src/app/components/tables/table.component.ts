import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgModel, NgForm } from '@angular/forms';

@Component({
	selector:'generated-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css']
})
export class TableGeneratorComponent implements OnInit, AfterViewInit{

	@Input() instance: object;
	@Input() objs: object[];
	keys: string[] = [];

	// for sorting
	column: string = '#';
	isDesc: boolean = false;
	direction: number;

	//for search
	searchText: string;

	constructor(
		private router: Router
		){

	}

	ngOnInit(){
		this.keys = Object.keys(this.instance);
	}

	ngAfterViewInit() {
		console.log( this.objs );
	}

	greet(obj: object): void {
		console.log(obj);
	}

	
	goToDetailPage(obj: any) : void{
		this.router.navigate([this.router.url, obj.id]);
		
	}

	sort(property: any){
	    this.isDesc = !this.isDesc; //change the direction    
	    this.column = property;
	    this.direction = this.isDesc ? 1 : -1;

	    
	}


}