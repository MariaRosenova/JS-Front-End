function orders(product, quantity) {
  let price = 0;
  let finalPrice = 0;
  switch (product) {
    case "coffee":
      price = 1.5;
      break;
    case "water":
      price = 1.0;
      break;
    case "coke":
      price = 1.4;
      break;
    case "snacks":
      price = 2.0;
      break;
  }
  finalPrice = price * quantity;
  return `${finalPrice.toFixed(2)}`;
}
console.log(orders("water", 5));
