export function mapTemplate(MapService, $log) {

    'ngInject';

    let directive = {
        templateUrl: 'app/components/question-template/map/mapTemplate.html',
        restrict: 'E',
        controller: 'QuestionController',
        controllerAs: 'questionCtrl',
        link: (scope, element, attrs, controller) => {

            // Set question
            controller.setQuestion(controller.$state.params.questionId);

            // Create a map in the div #map
            var map = L.mapbox.map('map', 'mapbox.streets-basic', {
                    zoom: 10,
                    maxZoom: 11,
                    tileLayer: {
                        continuosWorld: false,
                        noWrap: true
                    },
                    center: [60.237733, 24.881095]
            });

            // Bind reverseGeo on click
            map.on('click', (e) => {
                MapService.reverseGeo(e.latlng.lat, e.latlng.lng)
                    .then((success) => {
                        if (!success.data) {
                            $log.log('Data error')
                        } else {
                            $log.log(success.data.features[0].place_name);
                            controller.addEntryToQueue(controller.currentQuestion.question, success.data.features[0].place_name, controller.currentQuestion.nextQuestionId[0]);
                        }
                    }, (err) => {
                        this.$log.log(err.data);
                    });
            });

        }
    }

    return directive;
}
