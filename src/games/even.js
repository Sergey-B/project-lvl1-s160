import { playGame, randomNum } from '..';

const isEven = num => num % 2 === 0;

const rules = 'Answer "yes" if number even otherwise answer "no".';
const makeQuestion = () => {
  const random = randomNum(1, 100);
  return { question: `${random}`, answer: isEven(random) ? 'yes' : 'no' };
};

export default () => { playGame(rules, makeQuestion); };
