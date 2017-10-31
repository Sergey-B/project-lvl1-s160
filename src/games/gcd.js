import { playGame, randomNum } from '..';

const findGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return findGcd(num2, num1 % num2);
};

const rules = 'Find the greatest common divisor of given numbers.';
const makeQuestion = () => {
  const num1 = randomNum(1, 100);
  const num2 = randomNum(1, 100);

  return { question: `${num1} ${num2}`, answer: findGcd(num1, num2) };
};
const checkAnswer = (answer, solution) => parseInt(answer, 10) === parseInt(solution, 10);

export default () => { playGame(rules, makeQuestion, checkAnswer); };
