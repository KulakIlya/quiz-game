import { QUESTIONS } from './config';
import { generateRandomQuestion } from './helper';
import questionView from './views/questionView';
const questionsCopy = [...QUESTIONS];

const startHandler = () => {
  questionView.render(generateRandomQuestion(questionsCopy));
};

const nextQuestionHandler = () => {
  const a = generateRandomQuestion(questionsCopy);

  questionView.updateQuestion(a);
};

const init = () => {
  questionView.addStartHandler(startHandler);
  questionView.addNextQuestionHandler(nextQuestionHandler);
};

init();
