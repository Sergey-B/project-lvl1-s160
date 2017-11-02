import { playGame, randomNum } from '..';

const isPrime = (num, i = Math.floor(Math.sqrt(num))) => {
  if (num < 2) {
    return false;
  }

  if (i < 2) {
    return true;
  }

  return !(num % i === 0) && isPrime(num, i - 1);
};

const rules = 'Answer "yes" if number prime otherwise answer "no".';
const makeQuestion = () => {
  const num = randomNum();

  return { question: num, answer: `${isPrime(num) ? 'yes' : 'no'}` };
};

export default () => { playGame(rules, makeQuestion); };
