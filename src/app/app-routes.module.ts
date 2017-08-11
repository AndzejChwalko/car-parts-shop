import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/* Own components import below */
import { CustomersComponent } from './components/entities/customers/customers.component';
import { CustomerDetailsComponent } from './components/entities/customers/details/customer.details.component';
import { ProductsComponent } from './components/entities/products/products.component';
import { ProductDetailsComponent } from './components/entities/products/details/product.details.component';
import { OrdersComponent } from './components/entities/orders/orders.component';
import { OrderDetailsComponent } from './components/entities/orders/details/order.details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{ path:'', redirectTo:'/home', pathMatch:'full' },
	{ path:'home', component: HomeComponent },

	{ path:'customers', component: CustomersComponent },
	{ path:'customers/:id', component: CustomerDetailsComponent },

	{ path:'products', component: ProductsComponent },
	{ path:'products/:id', component: ProductDetailsComponent },

	{ path:'orders', component: OrdersComponent },
	{ path:'orders/:id', component: OrderDetailsComponent }
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}