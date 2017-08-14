import { Customer } from '../customers/customer';
import { OrderItem } from './order.item';
import { OrderState } from './state.enum';

export class Order {
	id: number;
	code: string;
	customer: Customer;
	paid: boolean = false;
	state: OrderState;
	additions: string;
	products: OrderItem[] = [];
	createdAt: Date;
	updatedAt: Date;

	constructor( id?: number,
				 code?: string,
				 customer?: Customer,
				 paid?: boolean,
				 state?: OrderState,
				 additions?: string,
				 products?: OrderItem[],
				 createdAt?: Date,
				 updatedAt?: Date ){
		this.id = id;
		this.code = code;
		this.customer = customer;
		this.paid = paid;
		this.state = state;
		this.additions = additions;
		this.products = products;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	
}