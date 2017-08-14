import { Product } from '../products/product';

export class OrderItem {
	product: Product;
	count: number;

	constructor( product: Product,
				 count: number){
		this.product = product;
		this.count = count;
	}
}