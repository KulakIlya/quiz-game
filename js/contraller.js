import { QUESTIONS } from './config';
import { generateRandomQuestion } from './helper';
import questionView from './views/questionView';
const questionsCopy = [...QUESTIONS];

const startHandler = () => {
  questionView.render(generateRandomQuestion(questionsCopy));
};

const init = () => {
  questionView.addStartHandler(startHandler);
};

init();
