import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const whatsYourName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const randomNum = (min, max) => {
  const range = max - min;
  const randomInt = Math.floor(Math.random() * (range + 1)) + min;

  return randomInt;
};

const askQuestion = (num) => {
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  return answer;
};

const isEven = num => num % 2 === 0;

const checkAnswer = (answer, rightAnswer) => {
  if (answer !== 'yes' && answer !== 'no') {
    return false;
  }

  return (answer === 'yes') === rightAnswer;
};

export const even = () => {
  welcome();

  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('\n');

  const name = whatsYourName();
  console.log('\n');

  for (let i = 0; i < 3; i += 1) {
    const num = randomNum(1, 1000);
    const answer = askQuestion(num);
    const result = checkAnswer(answer, isEven(num));

    if (result === true) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);

      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default () => {
  welcome();
  console.log('\n');
  whatsYourName();
};
