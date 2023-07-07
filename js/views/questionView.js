import View from './view';

class QuestionView extends View {
  render(questionConfig) {
    this._main.innerHTML = this._generateQuestionMarkup(questionConfig);
  }

  _generateQuestionMarkup({ question, answers, correctAnswer }) {
    return `<div class="container question">
      <div class="wrapper">
        <h3 class="container--title">Quiz game</h3>
        <button type="button" class="btn btn--finish-now">
          <u>Finish now</u>
        </button>
      </div>
      <h2 class="question--text">${question}</h2>
      <ul class="answer-list">
        <li class="answer-list--item">
          <button type="button" class="btn btn--answer" value="answer-1">
            Answer-1
          </button>
        </li>
        <li class="answer-list--item">
          <button type="button" class="btn btn--answer" value="answer-2">
            Answer-2
          </button>
        </li>
        <li class="answer-list--item">
          <button type="button" class="btn btn--answer" value="answer-3">
            Answer-3
          </button>
        </li>
        <li class="answer-list--item">
          <button type="button" class="btn btn--answer" value="answer-4">
            Answer-4
          </button>
        </li>
      </ul>
  
      <button
        type="button"
        class="btn btn--primary btn--next btn--disabled"
        disabled
      >
        Next
      </button>
    </div>`;
  }

  addStartHandler(handler) {
    const btnStart = document.querySelector('.btn--start');

    btnStart.addEventListener('click', handler);
  }
}

export default new QuestionView();
