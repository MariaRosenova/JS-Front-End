function loadingBar(number) {
  let array = [];
  let checker = 0;
  let difference = 0;

  checker = number / 10;
  for (let i = 1; i <= checker; i++) {
    array.push("%");
  }
  checker = number / 10;
  for (let index = 1; index <= 10 - number / 10; index++) {
    array.push(".");
  }

  if (number == 100) {
    console.log("100% Complete!");
  } else {
    console.log(`${number}% [${array.join("")}]`);
    console.log("Still loading...");
  }
}
loadingBar(10);
