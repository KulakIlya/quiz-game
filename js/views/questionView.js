import View from './view';

class QuestionView extends View {
  _currentQuestion;

  #correctAnswerText;
  _answersArr;

  _startBtnHandler;
  _btnNextQuestionHandler;

  _numberOfCorrectAnswers;

  render(question) {
    this._currentQuestion = question;
    this._numberOfCorrectAnswers = 0;

    this._main.innerHTML = this._generateQuestionMarkup(question);

    this._answersArr = [...this._main.querySelectorAll('.btn--answer')];

    this._addAnswerChecker();
  }

  getNumberOfCorrectAnswers() {
    return this._numberOfCorrectAnswers;
  }

  _generateQuestionMarkup(question) {
    const { questionText, answers, correctAnswer } = question;
    this.#correctAnswerText = correctAnswer;
    console.log(this.#correctAnswerText);
    return `<div class="container question">
      <div class="wrapper">
        <h3 class="container--title">Quiz game</h3>
        <button type="button" class="btn btn--finish-now">
          <u>Закінчити</u>
        </button>
      </div>
      <h2 class="question--text">${questionText}</h2>
      <ul class="answer-list">
        ${answers.map((answer) => this.#generateAnswer(answer)).join('')}
      </ul>

      <div class="btn-group">
        <button
          type="button"
          class="btn btn--primary btn--next btn--disabled"
          disabled
        >
          Наступне
        </button>
        <button class="btn btn--primary btn--menu">Повернутися в меню</button>
      </div>
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
    this._startBtnHandler = ({ target }) => {
      const btnStart = target.closest('.btn--start');
      if (!btnStart) return;

      handler();
    };

    this._main.addEventListener('click', this._startBtnHandler);
  }

  addNextQuestionHandler(handler) {
    this._btnNextQuestionHandler = ({ target }) => {
      const btnNext = target.closest('.btn--next');
      if (!btnNext) return;

      handler();
      this.#toggleBtnNext(btnNext);

      this._answersArr = [...this._main.querySelectorAll('.btn--answer')];
    };
    this._main.addEventListener('click', this._btnNextQuestionHandler);
  }

  addFinishNowHandler(handler) {
    this._main.addEventListener('click', ({ target }) => {
      const finishNowBtn = target.closest('.btn--finish-now');

      if (!finishNowBtn) return;
      handler();
    });
  }

  _addAnswerChecker() {
    this._main.removeEventListener('click', this.#answersHandler);
    this._main.addEventListener('click', this.#answersHandler);
  }

  #toggleBtnNext(btn) {
    // console.log(btn);
    btn.classList.toggle('btn--disabled');
    if (btn.attributes.disabled) {
      btn.removeAttribute('disabled');

      return;
    }

    btn.setAttribute('disabled', '');
  }

  #disableAllAnswers() {
    this._answersArr.forEach((answer) => answer.setAttribute('disabled', ''));
  }

  #answersHandler = ({ target }) => {
    const btnAnswer = target.closest('.btn--answer');

    if (!btnAnswer) return;
    if (
      btnAnswer.value.toLowerCase() ===
      this._currentQuestion.correctAnswer.toLowerCase()
    ) {
      btnAnswer.classList.add('btn--correct');
      this.#toggleBtnNext(this._main.querySelector('.btn--next'));
      this.#disableAllAnswers();
      this._numberOfCorrectAnswers += 1;

      return;
    }

    const correctAnswer = this._main.querySelector(
      `[value="${this.#correctAnswerText.toLowerCase()}"]`
    );

    btnAnswer.classList.add('btn--wrong');
    correctAnswer.classList.add('btn--correct');
    this.#disableAllAnswers();
  };
}

export default new QuestionView();
