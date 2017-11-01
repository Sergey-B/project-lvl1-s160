import { playGame, randomNum } from '..';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const rules = 'Answer "yes" if number prime otherwise answer "no".';
const makeQuestion = () => {
  const num = randomNum();

  return { question: num, answer: `${isPrime(num) ? 'yes' : 'no'}` };
};

export default () => { playGame(rules, makeQuestion); };
