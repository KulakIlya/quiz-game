import View from './view';
class ResultsView extends View {
  render(getNumberOfCorrectAnswers, numberOfQuestions) {
    this._main.innerHTML = this._generateMarkup(
      getNumberOfCorrectAnswers,
      numberOfQuestions
    );
  }
  _generateMarkup(getNumberOfCorrectAnswers, numberOfQuestions) {
    return `<div class="container results">
      <h3 class="container--title">Quiz game</h3>
      <h2 class="results--title">Your result is ${getNumberOfCorrectAnswers}/${numberOfQuestions}</h2>
      <div class="btn-group">
        <button type="button" class="btn btn--primary btn--restart">
          Restart
        </button>
        <button type="button" class="btn btn--primary btn--menu">
          Back to menu
        </button>
      </div>
    </div>`;
  }

  addRestartHandler(handler) {
    this._main.addEventListener('click', ({ target }) => {
      const restartBtn = target.closest('.btn--restart');

      if (!restartBtn) return;

      handler();

      // this._numberOfCorrectAnswers = 0;
    });
  }
}

export default new ResultsView();
