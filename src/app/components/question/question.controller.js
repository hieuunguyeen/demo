export class QuestionController {

    constructor(StatisticService, $log, $location, $state, $window) {
        'ngInject';
        // Injection
        this.StatisticService = StatisticService;
        this.$log = $log;
        this.$location = $location;
        this.$state = $state;
        this.$window = $window;
    }

    setQuestion(questionId) {
        this.currentQuestion = {
            id: questionId,
            type: questionList[questionId].type,
            question: questionList[questionId].question,
            answer: questionList[questionId].answer.split('/'),
            nextQuestionId: questionList[questionId].nextQuestionId.split('/'),
            checkboxAnswer: []
        }
    }

    toggleCheckboxAnswer(item) {
        var index = this.currentQuestion.checkboxAnswer.indexOf(item);
        if (index === -1) {
            this.currentQuestion.checkboxAnswer.push(item)
        } else {
            this.currentQuestion.checkboxAnswer.splice(index, 1)
        }
    }

    addEntryToQueue(question, answer, nextQuestionId) {
        var entry = {
            question: question,
            answer: answer
        }

        // Add question to queue
        this.StatisticService.queueEntry(entry);

        // Change question
        this.changeState(nextQuestionId);
    }

    submitSessionToServer() {
        this.StatisticService.uploadData();
    }

    changeState(id) {
        // Change current question info
        this.setQuestion(id);

        // route
        switch (this.currentQuestion.type) {
            case 'yn':
                this.$state.transitionTo('question.yn', {
                    questionId: id
                });
                break;
            case 'multi':
                this.$state.transitionTo('question.multi', {
                    questionId: id
                });
                break;
            case 'checkbox':
                this.$state.transitionTo('question.checkbox', {
                    questionId: id
                });
                break;
        }
    }
}

// Question list
const questionList = [{
    'id'            : '0',
    'question'      : 'Do you have a car?',
    'answer'        : 'Yes/No',
    'type'          : 'yn',
    'nextQuestionId': '1/2'
}, {
    'id'            : '1',
    'question'      : 'Do you want to get rid of your car?',
    'answer'        : 'Yes/No',
    'type'          : 'yn',
    'nextQuestionId': '0/2'
}, {
    'id'            : '2',
    'question'      : 'Where do you live?',
    'answer'        : 'Helsinki/Espoo/Vantaa/Sipoo',
    'type'          : 'multi',
    'nextQuestionId': '0/1/3/4'
}, {
    'id'            : '3',
    'question'      : 'Choose on map your living location',
    'answer'        : '',
    'type'          : 'map',
    'nextQuestionId': '4'
}, {
    'id'            : '4',
    'question'      : 'What vehicle(s) do you have?',
    'answer'        : 'Car/Motorcycle/Bike/Airplane',
    'type'          : 'checkbox',
    'nextQuestionId': '0'
}];
