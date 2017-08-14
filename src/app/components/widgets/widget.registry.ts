import { SelectFromArrayWidget } from '../../components/widgets/select.widget';
import { DefaultWidgetRegistry } from 'angular2-schema-form';

export class OwnWidgetRegistry extends DefaultWidgetRegistry {

	constructor(){
		super();
		console.log('We is here');
		this.register('arrselect', SelectFromArrayWidget);
		console.log(this);
	}
}