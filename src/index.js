import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const getName = () => {
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

export const playGame = (rules, makeQuestion) => {
  welcome();

  console.log(rules);
  console.log('\n');

  const name = getName();
  console.log('\n');

  const playRound = (i) => {
    const { question: expression, answer: correctAnswer } = makeQuestion();
    const answer = askQuestion(expression);

    if (answer === correctAnswer) {
      console.log('Correct!');

      if (i === 1) {
        console.log(`Congratulations, ${name}!`);
        return;
      }

      playRound(i - 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  };

  playRound(3);
};

export default () => {
  welcome();
  console.log('\n');
  getName();
};
