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
    var entry = {
      question: question,
      answer: answer
    }
    this.sessionQuestions.push(entry);
    this.$log.log(entry);
  }

  submitSessionToServer() {
    this.StatisticService.uploadData(this.sessionQuestions);
  }
}
