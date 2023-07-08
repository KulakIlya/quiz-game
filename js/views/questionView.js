import View from './view';

class QuestionView extends View {
  _currentQuestion;
  #btnNext;
  #correctAnswerText;

  #answersArr;

  render(question) {
    this._currentQuestion = question;

    this._main.innerHTML = this._generateQuestionMarkup(question);

    this.#answersArr = [...this._main.querySelectorAll('.btn--answer')];
  }

  _generateQuestionMarkup(question) {
    this._currentQuestion = question;

    const { questionText, answers, correctAnswer } = question;
    this.#correctAnswerText = correctAnswer;
    return `<div class="container question">
      <div class="wrapper">
        <h3 class="container--title">Quiz game</h3>
        <button type="button" class="btn btn--finish-now">
          <u>Finish now</u>
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
          Next
        </button>
        <button class="btn btn--primary btn--menu">Back to menu</button>
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
    this._main.addEventListener('click', ({ target }) => {
      const btnStart = target.closest('.btn--start');
      if (!btnStart) return;

      handler();
      this.#addAnswerChecker();
    });
  }

  addNextQuestionHandler(handler) {
    this._main.addEventListener('click', ({ target }) => {
      const btnNext = target.closest('.btn--next');
      if (!btnNext) return;

      handler();
      this.#toggleBtnNext();
    });
  }

  #addAnswerChecker() {
    this._main.addEventListener('click', ({ target }) => {
      const btnAnswer = target.closest('.btn--answer');

      this.#btnNext ??= this._main.querySelector('.btn--next');

      if (!btnAnswer) return;
      if (
        btnAnswer.value.toLowerCase() ===
        this._currentQuestion.correctAnswer.toLowerCase()
      ) {
        btnAnswer.classList.add('btn--correct');
        this.#toggleBtnNext();
        this.#disableAllAnswers();

        return;
      }

      const correctAnswer = this._main.querySelector(
        `[value="${this.#correctAnswerText}"]`
      );
      btnAnswer.classList.add('btn--wrong');
      correctAnswer.classList.add('btn--correct');
      this.#disableAllAnswers();
    });
  }

  #toggleBtnNext() {
    this.#btnNext.classList.toggle('btn--disabled');
    if (this.#btnNext.attributes.disabled) {
      this.#btnNext.removeAttribute('disabled');
      console.log(this.#btnNext);
      return;
    }

    this.#btnNext.setAttribute('disabled', '');
    console.log(this.#btnNext);
  }

  #disableAllAnswers() {
    this.#answersArr.forEach((answer) => answer.setAttribute('disabled', ''));
  }
}

export default new QuestionView();
