import { QUESTIONS } from './config';
import { generateRandomQuestion } from './helper';
import questionView from './views/questionView';
import resultsView from './views/resultsView';
import startView from './views/startView';
let questionsCopy = [...QUESTIONS];

const startHandler = () => {
  if (QUESTIONS.length) {
    questionView.render(generateRandomQuestion(questionsCopy));
    return;
  }

  resultsView.render(0, 0);
};

const nextQuestionHandler = () => {
  if (questionsCopy.length) {
    questionView.updateQuestion(generateRandomQuestion(questionsCopy));
    return;
  }

  resultsView.render(
    questionView.getNumberOfCorrectAnswers(),
    QUESTIONS.length
  );
};

const backToMenuHandler = () => {
  questionsCopy = [...QUESTIONS];
  startView.render();
};

const finishNowHandler = () => {
  resultsView.render(
    questionView.getNumberOfCorrectAnswers(),
    QUESTIONS.length
  );

  questionsCopy = [...QUESTIONS];
};

const restartHandler = () => {
  questionsCopy = [...QUESTIONS];

  questionView.render(generateRandomQuestion(questionsCopy));
};

const init = () => {
  questionView.addStartHandler(startHandler);
  questionView.addNextQuestionHandler(nextQuestionHandler);
  questionView.addBackToMenuHandler(backToMenuHandler);
  questionView.addFinishNowHandler(finishNowHandler);

  resultsView.addRestartHandler(restartHandler);
};

init();
