const btnRefs = {
  startBtn: document.querySelector('.btn--start'),
};

const init = () => {
  const { startBtn } = btnRefs;

  startBtn.addEventListener('click', () => {
    main.innerHTML = generateQuestionMarkup(questions[0]);
  });
};

init();
