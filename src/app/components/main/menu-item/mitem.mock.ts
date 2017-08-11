import { MenuItem  } from './mitem';


export const ITEMS: MenuItem[] = [
	{label:'Customers', faClass:'fa-users', href:'/customers', parent:'#sidebar'},
	{label:'Products', faClass:'fa-cubes', href:'/products', parent:'#sidebar'},
	{label:'Orders', faClass:'fa-usd', href:'/orders', parent:'#sidebar'}
];