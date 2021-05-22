// Polyfills if needed
// require('intersection-observer');

// import external dependencies
import './util/polyfills';
import 'jquery';
import 'bootstrap';

// Import everything from autoload
import './autoload/**/*'

import Dropzone from 'dropzone';

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import Detection from './util/Detection';
import adminDefault from './routes/admin-default';
import dashboard from './routes/dashboard';
import create from './routes/create';

window._detector = new Detection({
 detect: ['ie11'],
});
window._detector.init();

// /** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  'dashboard': dashboard,
  'create': create,
  'adminDefault': adminDefault,
});

// // Load Events
Dropzone.autoDiscover = false;
jQuery(document).ready(() => routes.loadEvents());
