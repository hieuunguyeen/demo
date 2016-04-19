
export class StatisticService {
  constructor($http, $httpParamSerializer) {

    'ngInject';

    this.$http = $http;
    this.apiPath = 'http://localhost:8080/api';
    this.$httpParamSerializer = $httpParamSerializer;
  }

  uploadData(sessionData) {
    return this.$http.post(this.apiPath + '/session', this.$httpParamSerializer(sessionData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
}
