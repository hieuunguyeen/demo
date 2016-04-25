export class MapService {

    constructor($http, $log) {

        'ngInject';

        // Injection
        this.$http = $http;
        this.$log = $log;

        // Mapbox token
        L.mapbox.accessToken = 'pk.eyJ1IjoiYmxhY2tldmlsMjQ1IiwiYSI6ImNpbmZ4azVwMjAwOGx3N2x5eTVqcnRqMDcifQ.1RkuWJo0gZZYBshsYJY1Zg';

        this.accessToken = L.mapbox.accessToken;
    }

    reverseGeo(lat, lon) {
        var mode = 'mapbox.places';
        const url = 'https://api.mapbox.com/geocoding/v5/' + mode + '/' + lon + ',' + lat + '.json?access_token='+         this.accessToken;

        return this.$http.get(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
