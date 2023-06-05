function firstStep(input) {
  // Your code here
  return input.split("&");
}

function secondStep(input) {
  // Your code here\
  return input.map(arr => arr.split("="));
}

function thirdStep(input) {
  // Your code here
  return input.map(arr => arr.map( arr => arr.replace(/\+/g, " ") ));
}

function fourthStep(input) {
  // Your code here
  return input.map(arr => arr.map(str => decodeURIComponent(str)));
}

function fifthStep(input) {
  // Your code here
  let obj = {};

  input.map(arr => {
   obj[arr[0]] = arr[1];
  }, {});

  return obj;
}

function parseBody(str) {
  // Your code here
  let result;
  result = firstStep(str);
  result = secondStep(result);
  result = thirdStep(result);
  result = fourthStep(result);

  return fifthStep(result);
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};