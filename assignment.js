// < !----------- ▓▒▒▒▒▒▒▒▒▒▒▒ FIRST PROBLEM START ▒▒▒▒▒▒▒▒▒▒▒▓ ------------->
// <!------------------ 🚩 CUBE NUMBER FUNCTION START 💭 ---------------------->
function cubeNumber(number) {
  if (typeof number != "number" || number <= 0) {
    return "Invalid input! please enter a valid input."; //Error handling message for invalid input.
  } else {
    //CUBE NUMBER CALCULATION
    const resultOfCube = number ** 3;
    return resultOfCube; //final result of calculation.
  }
}
const getCubeNumber = cubeNumber(4);
console.log(getCubeNumber);
// <!------------------- 🚩 CUBE NUMBER FUNCTION END 💭 ----------------------->
// < !------------ ▓▒▒▒▒▒▒▒▒▒▒▒ FIRST PROBLEM END ▒▒▒▒▒▒▒▒▒▒▒▓ -------------->

// < !------------ ▓▒▒▒▒▒▒▒▒▒▒▒ SECOND PROBLEM START ▒▒▒▒▒▒▒▒▒▒▒▓ ------------>
// <!----------------- 🚩 MATCHFINDER FUNCTION START 💭 --------------------->
let string1 = "Peter Parker";
let string2 = "Pet";

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string" || string1 === "" || string2 === "") {
    return "Invalid input! Please enter valid non-empty strings."; // Improved error handling message for invalid input.
  } else {
    if (string1.indexOf(string2) !== -1) {
      return true;
    } else {
      return false;
    }
  }
}
const getMatchFinder = matchFinder(string1, string2);
console.log(getMatchFinder);
// <!------------------- 🚩 MATCHFINDER FUNCTION END 💭 ---------------------->
// < !------------ ▓▒▒▒▒▒▒▒▒▒▒▒ SECOND PROBLEM END ▒▒▒▒▒▒▒▒▒▒▒▓ -------------->

// < !------------ ▓▒▒▒▒▒▒▒▒▒▒▒ THIRD PROBLEM START ▒▒▒▒▒▒▒▒▒▒▒▓ ------------->
// <!----------------- 🚩 PICNICBUDGET FUNCTION START 💭 -------------------->
function sortMaker(arr) {
  if (typeof persons != "number" || persons <= 0) {
    return "Invalid input! please enter a positive number."; //Error handling message for invalid input.
  } 
}
const totalPicnicAmount = picnicBudget(250);
console.log(totalPicnicAmount);
// <!------------------ 🚩 PICNICBUDGET FUNCTION END 💭 --------------------->
// < !------------ ▓▒▒▒▒▒▒▒▒▒▒▒ THIRD PROBLEM END ▒▒▒▒▒▒▒▒▒▒▒▓ --------------->

//< !------------ ▓▒▒▒▒▒▒▒▒▒▒▒ FOURTH PROBLEM START ▒▒▒▒▒▒▒▒▒▒▒▓ ------------>
//<!----------------- 🚩 ODDFRIEND FUNCTION START 💭 -------------------->

const addressObj = { street: 10, house: "15A", society: "Earth Perfect" };
function findAddress(addressObj) {
  if (typeof friends != "object") {
    return "Invalid input! please enter a valid input."; //Error handling message for invalid input.
  }
}
const myBestFriend = oddFriend(friendsName);
console.log(myBestFriend);

// <!------------------ 🚩 ODDFRIEND FUNCTION END 💭 --------------------->
// < !------------- ▓▒▒▒▒▒▒▒▒▒▒▒ FOURTH PROBLEM END ▒▒▒▒▒▒▒▒▒▒▒▓ -------------->

//< !------------ ▓▒▒▒▒▒▒▒▒▒▒▒ FIFTH PROBLEM START ▒▒▒▒▒▒▒▒▒▒▒▓ ------------>
//<!----------------- 🚩 CAN PAY FUNCTION START 💭 -------------------->
var pricesOfChips = [1, 5, 5];
var totalDue = 10;

function canPay(changeArray, totalDue) {
  if (pricesOfChips.length === 0) {
    return "Invalid input! please enter a valid input."; //Error handling message for invalid input.
  }
  let sum = 0;
  for (let i = 0; i < changeArray.length; i++) {
    sum += changeArray[i];
  }
  if (sum === totalDue || sum >= totalDue) {
    return true;
  } else {
    return false;
  }
}

const totalCanPay = canPay(pricesOfChips, totalDue);
console.log(totalCanPay);
// <!------------------ 🚩 CAN PAY FUNCTION END 💭 --------------------->
// < !------------- ▓▒▒▒▒▒▒▒▒▒▒▒ FIFTH PROBLEM END ▒▒▒▒▒▒▒▒▒▒▒▓ -------------->
