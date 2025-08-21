function sum(a, b, fnToCall) {
    let result = a + b;
    fnToCall(result);
}
function displayResult(data) {
    console.log("The sum of two numbers is ", data);
}
function displayResultPassive(data) {
    console.log(data, " is the sum of two numbers");
}

//we need to call only one function.
// const result = sum(2, 3);
// displayResult(result);

//we are only allowed to make changes in function call not in function defination

sum(2, 3, displayResult);
//callbacks
