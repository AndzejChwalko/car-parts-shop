export class Customer {
	id: number;
	fullname: string;
	phone: string;
	additions: string;
	createdAt: Date;
	updatedAt: Date;

	constructor( id?: number,
				 fullname?: string,
				 phone?: string,
				 additions?: string,
				 createdAt?: Date,
				 updatedAt?: Date){
		this.id = id;
		this.fullname = fullname;
		this.phone = phone;
		this.additions = additions;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}