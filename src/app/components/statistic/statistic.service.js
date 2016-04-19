// import { config } from './statistic.config';

export class StatisticService {
  constructor($http, $httpParamSerializer) {

    'ngInject';

    this.$http = $http;
    this.$httpParamSerializer = $httpParamSerializer;
    // this.apiPath = config.apiPath;
    this.apiPath = 'http://localhost:8080/api';
  }

  uploadData(sessionData) {
    return this.$http.post(this.apiPath + '/session', this.$httpParamSerializer(sessionData), {
      headers: {
        'Content-Type' : 'application/json; charset=utf-8'
      }
    });
  }
}
