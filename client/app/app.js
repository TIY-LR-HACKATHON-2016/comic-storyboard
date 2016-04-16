import angular from 'angular';
import uiRouter from 'angular-ui-router';

import comic from './modules';

let App = angular.module('app', [
  'ui.router',

  'tiy.comic'
]);

function config($urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
}

App.config(config);
