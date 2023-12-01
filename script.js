//establish global variables and objects
let stepStatus = 1;
let stepOneArray = [];
let stepTwoArray = [];
let solutionArray =[];
let answer = "";
let operation = "";
let holdOver = "";

//create number/button listeners
let numberOne = document.querySelector("#one");
    numberOne.addEventListener('click', () => {
        checkStatus(1);
    }
    )

let numberTwo = document.querySelector("#two");
    numberTwo.addEventListener('click', () => {
        checkStatus(2);
    }
    )

let numberThree = document.querySelector("#three");
    numberThree.addEventListener('click', () => {
        checkStatus(3);
    }
    )

let numberFour = document.querySelector("#four");
    numberFour.addEventListener('click', () => {
        checkStatus(4);
    }
    )

let numberFive = document.querySelector("#five");
    numberFive.addEventListener('click', () => {
        checkStatus(5);
    }
    )

let numberSix = document.querySelector("#six");
    numberSix.addEventListener('click', () => {
        checkStatus(6);
    }
    )

    let numberSeven = document.querySelector("#seven");
    numberSeven.addEventListener('click', () => {
        checkStatus(7);
    }
    )

    let numberEight = document.querySelector("#eight");
    numberEight.addEventListener('click', () => {
        checkStatus(8);
    }
    )

    let numberNine = document.querySelector("#nine");
    numberNine.addEventListener('click', () => {
        checkStatus(9);
    }
    )

let numberZero = document.querySelector("#zero");
    numberZero.addEventListener('click', () => {
        checkStatus(0);
    }
    )

let decimalPoint = document.querySelector("#decimal");
    decimalPoint.addEventListener('click', () => {
        if (stepStatus == 3) {
            stepOneArray.splice(0, stepOneArray.length);
            stepTwoArray.splice(0, stepTwoArray.length);
            stepStatus = 1;
            stepOneArray.push(".");
        } else if (stepStatus == 1) {
            if (stepOneArray.includes(".")) {

            } else stepOneArray.push(".")
       } else if (stepStatus == 2) {
        if(stepTwoArray.includes(".")) {

        } else stepTwoArray.push(".")
       }
        }
    )

//create operator listeners
let plus = document.querySelector("#addition");
    plus.addEventListener('click', () => {
        if (stepStatus == 1 ) {
            operation = "addition";
            stepStatus = 2;
        } else if(stepStatus == 2) {
            operate(addition);
        } else if(stepStatus == 3) {
            valueSwap();
            operation = "addition";

        }
    })

let minus = document.querySelector("#subtract");
    minus.addEventListener('click', () => {
        if (stepStatus == 1 ) {
            operation = "subtract";
            stepStatus = 2;
        } else if (stepStatus == 2) {
            operate(subtract);
        } else if (stepStatus == 3) {
            valueSwap();
            operation = "subtract";
        }
    })

let multiply = document.querySelector("#multiply");
    multiply.addEventListener('click', () => {
        if (stepStatus == 1) {
            operation = "multiply";
            stepStatus = 2;
        } else if (stepStatus == 2) {
            operate(multiply);
        } else if (stepStatus == 3) {
            valueSwap();
            operation = "multiply";
        }
    })

let divide = document.querySelector("#divide");
    divide.addEventListener('click', () => {
        if (stepStatus == 1) {
            operation = "divide";
            stepStatus = 2;
        } else if(stepStatus == 2) {
            operate(divide);
        } else if (stepStatus == 3) {
            valueSwap();
            operation = "divide"
        }
    })

let percent = document.querySelector("#percentage");
    percent.addEventListener('click', () => {
        if (stepStatus == 1) {
            operation = "percentage";
            stepStatus = 2;
        } else if(stepStatus == 2) {
            operate(percentage);
        } else if (stepStatus == 3) {
            valueSwap();
            operation = "percentage"
        }
    })

let inverse = document.querySelector("#inverse");
    inverse.addEventListener('click', () => {
        if(stepStatus == 1 || stepStatus == 3) {
                let numberOne = parseFloat(stepOneArray.join(""));
                     stepOneArray.splice(0, stepOneArray.length);
                    let newEntry = inverseValue(numberOne);
                    stepOneArray.push(newEntry);
                    }
            else if (stepStatus == 2) {
                let numberTwo = parseFloat(stepTwoArray.join(""));
                    stepTwoArray.splice(0, stepTwoArray.length);
                    let newEntryTwo = inverseValue(numberTwo);
                    stepTwoArray.push(newEntryTwo);
                }
        }
    )

//create operate function
function operate(operation) {
    let solution = 0;
    let firstNumbers = parseFloat(stepOneArray.join(''));
    let secondNumbers = parseFloat(stepTwoArray.join(''));

    switch(operation) {
        case addition,
            "addition":
            solution = (firstNumbers + secondNumbers);
            break;
        case subtract,
            "subtract":
            solution = (firstNumbers - secondNumbers);
            break;
        case multiply,
            "multiply":
            solution = (firstNumbers * secondNumbers);
            break;
        case divide,
            "divide":
            solution = (firstNumbers / secondNumbers);
            break;
        case percentage,
             "percentage":
             solution = ((firstNumbers / 100) * secondNumbers);
    }
    holdOver = secondNumbers;
    stepOneArray.splice(0, stepOneArray.length);
    stepTwoArray.splice(0, stepTwoArray.length);
    stepOneArray.push(solution);
    stepStatus = 3;
    answer = solution;
    
}

//create equal listener
let equals = document.querySelector("#equals");
    equals.addEventListener('click', () => {
        if (stepStatus == 1) {

        } else if (stepStatus == 2) {
            operate(operation)
        } else if (stepStatus == 3) {
            stepOneArray.splice(0, stepOneArray.length);
            stepOneArray.push(answer);
            stepTwoArray.push(holdOver);
            operate(operation);
        }
     
    })


//create clear listener
let clearButton = document.querySelector("#clear");
    clearButton.addEventListener('click', () => {
        stepOneArray.splice(0, stepOneArray.length);
        stepTwoArray.splice(0, stepTwoArray.length);
        stepStatus = 1;
    })

//create display
window.addEventListener('click', () => {
    let display = document.querySelector("#solutionBox")
    if(stepStatus == 1) {
        if (stepOneArray.length == 0) {
            display.innerText = 0
        } else display.innerText = stepOneArray.join('');
    } else if (stepStatus == 2) {
        if (stepTwoArray.length == 0) {
            display.innerText = stepOneArray.join('');
        } else display.innerText = stepTwoArray.join('');
    } else if (stepStatus == 3) {
            display.innerText = stepOneArray.join('');
    }
})

//checking for inputs and what stage the user is in calculating to see if arrays need to be filled, emptied, etc
function checkStatus(number) {
    if (stepStatus == 3) {
        stepOneArray.splice(0, stepOneArray.length);
        stepTwoArray.splice(0, stepTwoArray.length);
        stepStatus = 1;
        stepOneArray.push(number);
    } else if (stepStatus == 1) {
    stepOneArray.push(number)
   } else if (stepStatus == 2) {
    stepTwoArray.push(number)
   }
    }

//function to adjust array values for further calculations
function valueSwap() {
    stepOneArray.splice(0, stepOneArray.length);
    stepOneArray.push(answer);
    stepTwoArray.splice(0, stepTwoArray.length);
    stepStatus = 2;
}

//function to inverse positive to negative
function inverseValue(number) {
    return (number * -1);
}

