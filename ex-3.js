//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";
let message;

//Start coding here
message =
  lightBulbStatus === "On"
    ? "Light bulb is On."
    : "Please choose the correct input (On/Off)";
message =
  lightBulbStatus === "Off"
    ? "Light bulb is Off."
    : "Please choose the correct input (On/Off)";

console.log(message);
