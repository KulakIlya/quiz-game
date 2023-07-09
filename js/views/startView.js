import View from './view';
class StartView extends View {
  #startBtn = document.querySelector('.btn--start');

  render() {
    this._main.innerHTML = this._generateMarkup();
  }
  _generateMarkup() {
    return `<div class="container start-menu">
      <h1 class="main-title">Quiz Game</h1>
      <button type="button" class="btn btn--primary btn--start">Почати!</button>
    </div>`;
  }

  addEventHandler(handler) {
    this.#startBtn.addEventListener('click', handler);
  }
}

export default new StartView();
