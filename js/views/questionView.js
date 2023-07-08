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
       ${answers.map((answer) => this.#generateAnswer(answer)).join('')}
      </ul>
  
      <button
        type="button"
        class="btn btn--primary btn--next "
        
      >
        Next
      </button>
    </div>`;
  }

  #generateAnswer(answer) {
    return `<li class="answer-list--item">
    <button type="button" class="btn btn--answer" value="${answer.toLowerCase()}">
      ${answer}
    </button>
  </li>`;
  }

  addStartHandler(handler) {
    this._main.addEventListener('click', ({ target }) => {
      const btnStart = target.closest('.btn--start');
      if (!btnStart) return;

      handler();
    });
  }

  addNextQuestionHandler(handler) {
    this._main.addEventListener('click', ({ target }) => {
      const btnNext = target.closest('.btn--next');
      if (!btnNext) return;

      handler();
    });
  }
}

export default new QuestionView();
