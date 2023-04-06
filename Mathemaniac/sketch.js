let num1, num2, operator, result;
let score = 0;

function setup() {
  createCanvas(500, 500);
  generateQuestion();
}

function draw() {
  background(204, 204, 255);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill (0, 0, 0);
  textFont('Georgia');
  text("~Mathemaniac~", width/2, 50);
  textSize(20);
  text("Your score: " + score, width/2, 85);
  textSize(35);
  text(num1 + " " + operator + " " + num2 + " = ?", width/2, height/2);
  textSize(24);
  text("Press 'Enter' to submit your answer~", width/2, height - 50);
}

function keyPressed() {
  if (keyCode === ENTER) {
    let answer = parseInt(prompt("Enter your answer:"));
    checkAnswer(answer);
  }
}

function generateQuestion() {
  num1 = floor(random(1, 100));
  num2 = floor(random(1, 100));
  let operators = ['+', '-', '*'];
  operator = random(operators);
  
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
  }
}

function checkAnswer(answer) {
  if (answer === result) {
    score++;
    generateQuestion();
  } else {
    alert("Wrong answer! Try again.");
  }
}

