import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'generated-form',
	templateUrl:'./form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormGeneratorComponent implements OnInit{

	@Input() schema;
	@Input() actions;
	@Input() validations;
	@Input() model;
	
	collapsed: boolean = false;
	@Input() width: number = 50;

	constructor(){

	}

	ngOnInit(){

	}

	getWidth(): string {
		return `w-${this.width}`;
	}


}