function solve(typeOfFruit,grams,price)
{
    let totalPrice = (grams*price)/1000;
    let weight = grams/1000;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${typeOfFruit}.`)
}
solve('orange', 2500, 1.80);