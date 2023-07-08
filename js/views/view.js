export default class View {
  _main = document.querySelector('.main-content');

  updateQuestion(question) {
    this._currentQuestion = question;

    const newMarkup = this._generateQuestionMarkup(question);

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newDOMElements = [
      ...newDOM.querySelector('.container').querySelectorAll('*'),
    ];

    const oldDOMElements = [
      ...this._main.querySelector('.container').querySelectorAll('*'),
    ];

    newDOMElements.forEach((elem, index) => {
      const currentElement = oldDOMElements[index];

      if (
        !elem.isEqualNode(currentElement) &&
        !elem.classList.contains('btn--next') &&
        !elem.classList.contains('btn--menu') &&
        !elem.classList.contains('btn-group')
      )
        currentElement.innerHTML = elem.innerHTML;
    });
  }
}
