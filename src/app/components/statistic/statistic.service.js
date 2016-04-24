export class StatisticService {
    constructor($http, $httpParamSerializer) {

        'ngInject';

        // Injection
        this.$http = $http;
        this.apiPath = 'http://localhost:8080/api';
        this.$httpParamSerializer = $httpParamSerializer;

        // Props
        this.sessionQueue = [];
    }

    queueEntry(entry) {
        this.sessionQueue.push(entry);
    }

    uploadData() {
        return this.$http.post(this.apiPath + '/session', this.$httpParamSerializer(this.sessionQueue), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }
}
