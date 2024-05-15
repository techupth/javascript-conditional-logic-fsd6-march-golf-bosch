//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

// Start coding here.
const isOnOrElse = (status) =>
  status == "On"
    ? "Light bulb is On."
    : status == "Off"
    ? "Light bulb is Off."
    : status == "Broken"
    ? "Light bulb is Broken."
    : "Please choose the correct input (On/Off/Broken)";

console.log(isOnOrElse(lightBulbStatus));
