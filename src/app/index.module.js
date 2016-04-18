
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';

angular.module('demo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController);
