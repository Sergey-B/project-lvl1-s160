import { playGame, randomNum } from '..';

const randomProgression = (length, start = randomNum(10, 100), diff = randomNum(2, 9)) => {
  const res = [...Array(10)].map((num, idx) => start + (idx * diff));
  return res;
};

const rules = 'What number is missing in this progression?';
const makeQuestion = () => {
  const progression = randomProgression(10);
  const randomIndex = randomNum(0, 9);
  const answer = progression[randomIndex];

  const question = progression.map((num, idx) => {
    if (idx === randomIndex) {
      return '..';
    }
    return num;
  }).join(' ');

  return { question, answer: `${answer}` };
};

export default () => { playGame(rules, makeQuestion); };
