export class QuestionController {
  constructor(StatisticService, $log) {
    'ngInject';

    this.StatisticService = StatisticService;
    this.$log = $log;

    this.sessionQuestions = [];
  }

  setQuestion(question, answer) {
    this.currentEntry = {
      question: question,
      answer: answer
    }
    // this.$log.log('Im running');
  }

  addEntryToQueue(question, answer) {
    this.sessionQuestions.push({
      question: question,
      answer: answer
    });
    submitSessionToServer(this.StatisticService, (this.sessionQuestions));
  }
}

function submitSessionToServer(StatisticService, data) {
  StatisticService.uploadData(data);
}
