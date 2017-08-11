export class Product{
	id: number;
	code: string;
	name: string;
	description: string;
	cost:number;

	constructor(
				id?: number,
				code?: string,
				name?: string,
				description?: string,
				cost?:number){
		this.id = id;
		this.code = code;
		this.name = name;
		this.description = description; 
		this.cost = cost;
	}
}