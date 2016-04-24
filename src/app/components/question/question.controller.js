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
            nextQuestionId: questionList[questionId].nextQuestionId.split('/')
        }

        // Change state
        switch (this.currentQuestion.type) {
            case 'yn':
                this.$state.transitionTo("question.yn", {
                    questionId: questionId
                });
                break;
            case 'multi':
                this.$state.transitionTo("question.multi", {
                    questionId: questionId
                });
                break;
        }

        this.$log.log('i ran');
        // Send data when page reload
        this.$window.onbeforeunload = function() {
            return this.$window.alert('Submit ' + this.currentQuestion.id);
        }
    }

    addEntryToQueue(question, answer, nextQuestionId) {
        var entry = {
            question: question,
            answer: answer
        }
        this.StatisticService.queueEntry(entry);

        // Change question
        this.setQuestion(nextQuestionId);
    }

    submitSessionToServer() {
        this.StatisticService.uploadData();
    }
}

const questionList = [{
    'id': '0',
    'question': 'Do you have a car?',
    'answer': 'Yes/No',
    'type': 'yn',
    'nextQuestionId': '1/2'
}, {
    'id': '1',
    'question': 'Do you want to get rid of your car?',
    'answer': 'Yes/No',
    'type': 'yn',
    'nextQuestionId': '0/2'
}, {
    'id': '2',
    'question': 'Where do you live?',
    'answer': 'Helsinki/Espoo/Vantaa/Sipoo',
    'type': 'multi',
    'nextQuestionId': '0/1/1/1'
}];
