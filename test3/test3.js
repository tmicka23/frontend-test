/**
 * @TODO:
 * Write a function that compute the sum of the numbers in a given
 * list using a for-loop.
 */
function forLoopSum(list) {
  let output = 0;
  for (let i = 0; i < list.length; i++) {
    output += list[i];
  }
  return output;
}

/**
 * @TODO:
 * Write a function that compute the sum of the numbers in a given
 * list using a foreach-loop.
 */
function forEachLoopSum(list) {
  let output = 0;
  list.forEach((li) => (output += li));
  return output;
}

/**
 * @TODO:
 * Write a function that compute the sum of the numbers in a given
 * list using a while-loop.
 */
function whileLoopSum(list) {
  let output = 0;
  let i = 0;
  while (i <= list.length) {
    output = list[i];
    i++;
  }
  return output;
}

/**
 * @TODO:
 * Write a function that compute the sum of the numbers in a given
 * list using a recursive function.
 */
function recursiveSum(list) {
  return null;
}
