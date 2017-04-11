import can from 'can';
import 'can/map/define/';
// import "bit-tabs";
import Component from 'can/component/';
import 'can/map/define/';
import './style.less!';
import VM from './view-model';
import template from './template.stache!';


can.Component.extend({
    tag: 'page-task',
    viewModel: VM,
    template: template,
    events: {
        'inserted': function() {
            console.log('loaded task modules');
        }

    }
});
