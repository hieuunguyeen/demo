
export class QuestionController {

  constructor(StatisticService, $log, $location, $state) {
    'ngInject';
    // Injection
    this.StatisticService = StatisticService;
    this.$log = $log;
    this.$location = $location;
    this.$state = $state;

    // Props
    this.sessionQuestions = [];
  }

  setQuestion(questionId) {

    this.currentQuestion = {
      id: questionId,
      type: questionList[questionId].type,
      question: questionList[questionId].question,
      answer: questionList[questionId].answer.split('/'),
      nextQuestionId: questionList[questionId].nextQuestionId.split('/')
    }

    this.$log.log(this.currentQuestion);

    switch(this.currentQuestion.type) {
      case 'yn':
        this.$state.transitionTo("question.yn", { questionId: questionId });
        break;
      case 'multi':
        this.$state.transitionTo("question.multi", { questionId: questionId });
        break;
    }
  }

  addEntryToQueue(question, answer, nextQuestionId) {
    var entry = {
      question: question,
      answer: answer
    }
    this.sessionQuestions.push(entry);

    // Change question
    this.setQuestion(nextQuestionId);
  }

  submitSessionToServer() {
    this.StatisticService.uploadData(this.sessionQuestions);
  }
}

const questionList = [
  {
    'question': 'Do you have a car?',
    'answer': 'Yes/No',
    'type': 'yn',
    'nextQuestionId': '1/2'
  },
  {
    'question' : 'Do you want to get rid of your car?',
    'answer': 'Yes/No',
    'type': 'yn',
    'nextQuestionId': '0/2'
  },
  {
    'question': 'Where do you live?',
    'answer': 'Helsinki/Espoo/Vantaa',
    'type': 'multi',
    'nextQuestionId': '0/1'
  }
];
