export class Product{
	id: number;
	code: string;
	name: string;
	description: string;
	cost:number;
	createdAt: Date;
	updatedAt: Date;

	constructor(
				id?: number,
				code?: string,
				name?: string,
				description?: string,
				cost?:number,
				createdAt?: Date,
				updatedAt?: Date ){
		this.id = id;
		this.code = code;
		this.name = name;
		this.description = description; 
		this.cost = cost;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}