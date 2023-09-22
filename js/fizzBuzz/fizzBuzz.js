function fizzBuzz(numbers) {
  return numbers.reduce((acc, element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      acc += "fizz";
    } else if (element % 3 === 0) {
      acc += "buzz";
    } else if (element % 5 === 0) {
      acc += "fizzbuzz";
    }
    return acc;
  }, "");
}

const numbers = [15, 3, 5, 9, 11, 12, 20];

console.log(fizzBuzz(numbers));
