function countElements(elements) {
  const object = {};
  for (let i = 0; i <= elements.length - 1; i++) {
    object[elements[i]] = 0;
  }
  for (let i = 0; i <= elements.length - 1; i++) {
    object[elements[i]] += 1;
  }
  return object;
}

const abra = "abracadabra";
const splitAbra = abra.split("");

const result1 = countElements(["e", "k", "e", "z", "i", "z"]);
console.log(result1);
const result2 = countElements(splitAbra);
console.log(result2);
