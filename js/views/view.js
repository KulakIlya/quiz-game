export default class View {
  _main = document.querySelector('.main-content');

  updateQuestion(question) {
    const newMarkup = this._generateQuestionMarkup(question);
    console.log(newMarkup);

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newDOMElements = [...newDOM.querySelectorAll('*')];

    const oldDOMElements = [...this._main.querySelectorAll('*')];

    newDOMElements.forEach((elem, index) => {
      const currentElement = oldDOMElements[index];
      if (!elem.isEqualNode(currentElement))
        currentElement.innerHTML = elem.innerHTML;
    });
  }
}
