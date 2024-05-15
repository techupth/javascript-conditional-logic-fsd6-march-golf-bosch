//Exercise 1
let lightBulbStatus = "On";

// Start coding here.
const isOn = (status) => {
  if (status == "On") {
    return "Light bulb is On.";
  } else {
    return "Light bulb is Off.";
  }
};

console.log(isOn(lightBulbStatus));
