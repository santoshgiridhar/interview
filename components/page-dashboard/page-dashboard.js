import can from 'can';
import 'can/map/define/';

import Component from 'can/component/';
import 'can/map/define/';
import './style.less!';
import VM from './view-model';
import template from './template.stache!';

import 'components/page-excelColumn/';
import 'components/page-wordRepresentation/';
import 'components/page-cssButton/';
import 'components/page-cssGradient/';

can.Component.extend({
    tag: 'page-dashboard',
    viewModel: VM,
    template: template,
    events: {
        'inserted': function() {
            console.log('loaded dashboard modules');
        }
    }
});
