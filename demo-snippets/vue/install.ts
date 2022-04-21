import Vue from 'nativescript-vue';
import SekkBarPlugin from '@nativescript-community/ui-range-seek-bar/vue';
import Basic from './Basic.vue';

export function installPlugin() {
    Vue.use(SekkBarPlugin);
}

export const demos = [{ name: 'Basic', path: 'basic', component: Basic }];
