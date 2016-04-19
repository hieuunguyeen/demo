export class QuestionController {
  constructor(StatisticService, $log) {
    'ngInject';

    this.sessionQuestions = [];
    this.StatisticService = StatisticService;
    this.$log = $log;
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
    this.$log.log(this.sessionQuestions);
  }

  submitSessionToServer() {
    this.StatisticService.uploadData(this.sessionQuestions);
  }
}
