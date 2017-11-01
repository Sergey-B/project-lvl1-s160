import { playGame, randomNum } from '..';

const balanceNum = (num) => {
  const arrayInt = num.toString().split('').map(n => parseInt(n, 10)).sort();

  if (Math.max(...arrayInt) - Math.min(...arrayInt) <= 1) {
    return arrayInt.join('');
  }

  const indexMax = arrayInt.indexOf(Math.max(...arrayInt));
  const indexMin = arrayInt.indexOf(Math.min(...arrayInt));

  arrayInt[indexMax] -= 1;
  arrayInt[indexMin] += 1;

  return balanceNum(parseInt(arrayInt.join(''), 10));
};

const rules = 'Balance the given number.';
const makeQuestion = () => {
  const num = randomNum(1, 5000);
  return { question: `${num}`, answer: `${balanceNum(num)}` };
};

export default () => { playGame(rules, makeQuestion); };
