export class StatisticService {
    constructor($http, $httpParamSerializer, $log) {

        'ngInject';

        // Injection
        this.$http = $http;
        this.apiPath = 'http://146.185.138.86:8080/api';
        this.$httpParamSerializer = $httpParamSerializer;
        this.$log = $log;

        // Props
        this.sessionQueue = [];
    }

    queueEntry(entry) {
        this.sessionQueue.push(entry);
        this.$log.log(this.sessionQueue);
    }

    uploadData() {
        return this.$http.post(this.apiPath + '/session', this.$httpParamSerializer(this.sessionQueue), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }
}
