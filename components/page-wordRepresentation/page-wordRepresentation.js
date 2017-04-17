import can from 'can';
import Component from 'can/component/';
import 'can/map/define/';
import './style.less!';
import VM from './view-model';
import template from './template.stache!';
import 'components/page-wordRepresentation/';



can.Component.extend({
	tag: 'page-wordRepresentation',
	viewModel: VM,
	template: template,
	events: {
		'inserted': function() {
			console.log('loaded word representation modules');


		}
	}
});
