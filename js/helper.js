export const generateRandomQuestion = (questionArr) => {
  const randomIndex = Math.floor(Math.random() * questionArr.length);
  const question = questionArr[randomIndex];
  questionArr.splice(randomIndex, 1);
  return question;
};
