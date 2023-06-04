//constant variable
const pie = 3.14159265;

//Default Parameters
function defaultParameters (a,b,c=0 ) {
    console.log(a+b+c);
}

defaultParameters(1,2,3);

//Function Declaration
function myFunction () {
    console.log(`Doing stuff`);
}

//Function Expression
var myFunctionVariable = function() {
    console.log(`Doing portable stuff`);
}

//Using arrows to only take up one line
var mySimpleFunction = () => console.log("Lean mean function machine");

mySimpleFunction;

//myFunction();
//myFunctionVariable();


//constant
const Car ={
    name: "Imprezza",
    milage: 20910,
}
Car.milage++;
var miles = Car.millage;
//console.log(Car);
//Car = {};

//constant array
const constantArray = [2, 3, 4,];
//console.log(`Before: ${constantArray} whatever else I want`);
constantArray.push(1);
//console.log("After: " + constantArray);
constantArray.pop();
//console.log("After 2: " + constantArray);
//constantArray[1,2,3,4];

//let vs. var
var buttons = document.getElementsByTagName('button');

for ( let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        alert('Button ' + i + ' was clicked!')
    })
}