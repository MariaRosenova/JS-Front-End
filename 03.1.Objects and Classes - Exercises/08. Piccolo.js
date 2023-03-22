function piccolo(list) {
  let parking = new Set();
  for (let car of list) {
    let [direction, number] = car.split(" ");
    if (direction === "IN") {
      parking.add(number);
    } else {
      parking.delete(number);
    }
  }

  if (!parking.size === 0) {
    console
      .log([...parking])
      .sort()
      .join("\n");
  } else {
    console.log("Parking Lot is Empty");
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
