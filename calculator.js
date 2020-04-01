const add = { 
  num1: 3,
  num2: 5,
  operation: 'add',
}

const subtract = { 
  num1: 3,
  num2: 5,
  operation: 'subtract',
}

const multiply = { 
  num1: 3,
  num2: 5,
  operation: 'multiply',
}

const divide = { 
  num1: 3,
  num2: 5,
  operation: 'divide',
}

const addSign = { 
  num1: 3,
  num2: 5,
  operation: '+',
}

const subtractSign = { 
  num1: 3,
  num2: 5,
  operation: '-',
}

const multiplySign = { 
  num1: 3,
  num2: 5,
  operation: '*',
}

const divideSign = { 
  num1: 3,
  num2: 5,
  operation: '/',
}
const divideZero = { 
  num1: 3,
  num2: 0,
  operation: '/',
}
const badData = { 
  num1: 3,
  num2: "bad",
  operation: '+',
}

const badOperation = { 
  num1: 3,
  num2: 5,
  operation: 'bad',
}



const operations = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/'];

const valid = function(input) {
  if (operations.includes(input.operation) && Number.isInteger(input.num1) && Number.isInteger(input.num2)) {
    return true;
  }else {
   console.log('Please check your inputs! Are your numbers integars? Is your operation: add, subtract, multiply, or divide?');
   return false;
  //  process.exit(1)
  }
}

const calculate = function(input){
  if (valid(input)) {
    switch (input.operation){
      case 'add':
      case '+':
        console.log(`Your answer to ${input.num1} plus ${input.num2} is ${input.num1 + input.num2}`);
        break;

      case 'subtract':
      case '-':
        console.log(`Your answer to ${input.num1} minus ${input.num2} is ${input.num1 - input.num2}`);
        break;

      case 'divide':
      case '/':
        if(input.num2 === 0){
          console.log('You can\'t divide by zero');
          break;
        }else{
          console.log(`Your answer to ${input.num1} divided by ${input.num2} is ${input.num1 / input.num2}`);
          break;
        }
     
      case 'multiply':
      case '*':
        console.log(`Your answer to ${input.num1} times ${input.num2}  is ${input.num1 * input.num2}`); 
        break;      
    }
  }
}


calculate(add);
calculate(subtract);
calculate(multiply);
calculate(divide);
calculate(addSign);
calculate(subtractSign);
calculate(multiplySign);
calculate(divideSign);
calculate(divideZero);
calculate(badData);
calculate(badOperation);
