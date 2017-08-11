import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'entity-view',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.html']
})
export class CardComponent implements OnInit {

	@Input() keys: string[];
	@Input() object;

	constructor(){}

	ngOnInit(){

	}
}