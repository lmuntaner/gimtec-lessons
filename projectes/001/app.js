let text = 'hello world';
let text2 = 'bye bye';
let numberOne = 2;
let numberTwo = 10;


// console.log(numberOne + numberTwo);
// console.log('2' + '3');

let yell = (word) => {
  console.log(word + '!!!!');
};

// yell('hi cruel world');
// yell(text);
// yell(text2);

let person = {
  name: 'Pai pai',
  age: 324,
};

console.log(person.age);

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let x = 20;

let renderBackground = () => {
  context.fillStyle = 'black'; 
  context.fillRect(0, 0, 300, 300);
};

let renderBall = () => {
  context.beginPath();
  context.arc(x, 20, 10, 0, 2 * Math.PI, false);
  context.fillStyle = 'blue';
  context.fill();
}

renderBackground();
renderBall();

setInterval(() => {
  renderBackground();
  renderBall();
  x = x+1;
}, 16);






