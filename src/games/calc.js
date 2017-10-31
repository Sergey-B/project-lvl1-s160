import { playGame, randomNum } from '..';

const rules = 'What is the result of the expression?';
const makeQuestion = () => {
  const num1 = randomNum(1, 20);
  const num2 = randomNum(1, 20);

  return { question: `${num1} + ${num2}`, answer: num1 + num2 };
};
const checkAnswer = (answer, solution) => parseInt(answer, 10) === parseInt(solution, 10);

export default () => { playGame(rules, makeQuestion, checkAnswer); };
