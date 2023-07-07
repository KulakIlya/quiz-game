import View from './view';
class StartView extends View {
  _restartBtn = document.querySelector('.btn--start');

  render() {
    this._main.innerHTML = this._generateMarkup();
  }
  _generateMarkup() {
    return `<div class="container start-menu">
      <h1 class="main-title">Quiz Game</h1>
      <button type="button" class="btn btn--primary btn--start">Start!</button>
    </div>`;
  }

  addEventHandler(handler) {
    this._restartBtn.addEventListener('click', handler);
  }
}
