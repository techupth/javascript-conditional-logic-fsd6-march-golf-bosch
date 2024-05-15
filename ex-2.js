//Exercise 2
let lightBulbStatus = "On";
// Start coding here.

const isOn = (status) => {
  if (status == "On") {
    return "Light bulb is On.";
  } else if (status == "Off") {
    return "Light bulb is Off.";
  } else if (status == "Broken") {
    return "Light bulb is Broken.";
  } else {
    return "Please choose the correct input (On/Off/Broken)";
  }
};

console.log(isOn(lightBulbStatus));
