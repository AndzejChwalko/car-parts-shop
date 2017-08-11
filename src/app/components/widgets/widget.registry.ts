import { ButtonCssWidget } from '../../components/widgets/button.css.widget';
import { DefaultWidgetRegistry } from 'angular2-schema-form';

export class OwnWidgetRegistry extends DefaultWidgetRegistry {

	constructor(){
		super();
		console.log('We is here');
		this.register('cssbutton', ButtonCssWidget);
		console.log(this);
	}
}