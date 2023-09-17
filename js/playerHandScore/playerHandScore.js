function playerHandScore(hand) {
  const splittedHand = hand.split("");
  return splittedHand.reduce((acc, element) => {
    if (element === "K") {
      acc += 4;
    }
    if (element === "Q") {
      acc += 3;
    }
    if (element === "J") {
      acc += 2;
    }
    return acc;
  }, 0);
}

const handScore1 = "KQJ";
const handScore2 = "KKK";
const result1 = playerHandScore(handScore1);
const result2 = playerHandScore(handScore2);
console.log(result1);
console.log(result2);
