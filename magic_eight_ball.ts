let userName = 'Neal';
let userQuestion = 'Will I have steak for breakfast, lunch, and dinner tomorrow?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

userName ? console.log(`Hello my name is ${userName}`) : console.log('Hello!');

console.log(`${userName} asked \"${userQuestion}\"`);

if (randomNumber === 0) {
    eightBall = 'It is certain';
} else if (randomNumber === 1) {
    eightBall = 'It is decidely so';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
 } else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
  eightBall = 'Signs point to yes';
} else {
    console.log('Please try again.');
}
console.log(`The Magic Eightball's Answer: ${eightBall}`);