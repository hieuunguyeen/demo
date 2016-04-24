
// Configs
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

// Controllers
import { MainController } from './main/main.controller';
import { QuestionController } from './components/question/question.controller';

// Directives
import { yesNoTemplate } from './components/question-template/yes-no/yesNoTemplate.directive';
import { multiAnswerTemplate } from './components/question-template/multiple-answer/multiAnswerTemplate.directive';

// Services
import { StatisticService } from './components/statistic/statistic.service';

angular.module('demo', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('QuestionController', QuestionController)
  .directive('yesNoTemplate', yesNoTemplate)
  .directive('multiAnswerTemplate', multiAnswerTemplate)
  .service('StatisticService', StatisticService);
