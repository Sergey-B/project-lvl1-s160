import readlineSync from 'readline-sync';
import even from './games/even';
import calc from './games/calc';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const whatsYourName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export const randomNum = (min = 0, max = 1000) => {
  const range = max - min;
  const randomInt = Math.floor(Math.random() * (range + 1)) + min;

  return randomInt;
};

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  return answer;
};

export const playGame = (rules, makeQuestion, checkAnswer) => {
  welcome();

  console.log(rules);
  console.log('\n');

  const name = whatsYourName();
  console.log('\n');

  for (let i = 0; i < 3; i += 1) {
    const { question: expression, answer: solution } = makeQuestion();
    const answer = askQuestion(expression);
    const result = checkAnswer(answer, solution);

    if (result === true) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'.`);
      console.log(`Let's try again, ${name}!`);

      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export { even };
export { calc };

export default () => {
  welcome();
  console.log('\n');
  whatsYourName();
};
