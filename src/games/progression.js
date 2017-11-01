import { playGame, randomNum } from '..';

const randomProgression = (length, start = randomNum(10, 100), diff = randomNum(2, 9)) => {
  const array = [];

  for (let i = 1; i <= length; i += 1) {
    const el = start + ((i - 1) * diff);
    array.push(el);
  }

  return array;
};

const rules = 'What number is missing in this progression?';
const makeQuestion = () => {
  const progression = randomProgression(10);
  const randomIndex = randomNum(0, 9);
  const answer = progression[randomIndex];

  progression[randomIndex] = '..';

  return { question: progression.join(' '), answer: `${answer}` };
};

export default () => { playGame(rules, makeQuestion); };
