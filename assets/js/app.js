window._ = require('lodash');

try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {}

import Vue from 'vue';
import Dexie from 'dexie';
import App from './App.vue';

const db = new Dexie("TextRepo");
db.version(1).stores({ notes: "++id, title, note, created_at, updated_at" });

new Vue({
    render: h => h(App)
}).$mount('#app');