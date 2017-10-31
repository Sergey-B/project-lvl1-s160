import { playGame, randomNum } from '..';

const isEven = num => num % 2 === 0;

const rules = 'Answer "yes" if number even otherwise answer "no".';
const makeQuestion = () => {
  const random = randomNum(1, 100);
  return { question: `${random}`, answer: isEven(random) ? 'yes' : 'no' };
};
const checkAnswer = (answer, solution) => {
  if (answer !== 'yes' && answer !== 'no') {
    return false;
  }

  return answer === solution;
};

export default () => { playGame(rules, makeQuestion, checkAnswer); };
