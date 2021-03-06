import can from 'can';
import Component from 'can/component/';
import 'can/map/define/';
import './style.less!';
import VM from './view-model';
import template from './template.stache!';
import 'components/page-excelColumn/';



can.Component.extend({
	tag: 'page-excelColumn',
	viewModel: VM,
	template: template,
	events: {
		'inserted': function() {
			console.log('loaded excel column modules');
		},
		'.columnNumber blur':function(el){
			console.log();
			this.viewModel.getExcelColumnCode(el[0].value);
		}
	}
});
