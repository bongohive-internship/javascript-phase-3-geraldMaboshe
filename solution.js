//solutions to the exercises mentioned in the readme should be in this file.
function largerNumber(a, b) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
largerNumber(-3, -7);

function wholeNumbers() {
    for (var i = 0; i < 16; i++) {
        if (i % 2 == 0) {
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }
    }
}
wholeNumbers();

function sum() {
    var sum = 0;
    for (var i = 3; i <= 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    console.log(sum);
}
sum();

function assignGrade(grade) {
    if (grade > 91 && grade <= 100) {
        console.log("You got an A+");
    }
    else if (grade == 90 || grade == 91) {
        console.log("You got an A");
    } else if (grade == 88 || grade == 89) {
        console.log("You got a B");
    } else if (grade < 88 && grade >= 60) {
        console.log("You got a C");
    } else {
        console.log("You entered an invalid option! Please enter a number between 60 and 100");
    }
}
assignGrade(20);


