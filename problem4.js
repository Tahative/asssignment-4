function sortMaker(arr) {
    // if (arr.length !== 2) {
    //   return "Invalid"; // Array must contain exactly two numbers
    // }
  
    const num1 = arr[0];
    const num2 = arr[1];
  
    if (num1 < 0 || num2 < 0) {
      return "Invalid input!"; //Error handling message for invalid input.
    }
  
    if (num1 === num2) {
      return "equal";
    } else {
      const descendingOrder = [num1, num2].sort((a, b) => b - a);
      return descendingOrder.join(" ");
    }
}
    console.log(sortMaker([4 , -4]));