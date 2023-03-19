function solve(list) {
  let adressbook = {};

  for (let line of list) {
    let [name, address] = line.split(':');
    adressbook[name] = address;
  }
  for(let key of Object.keys(adressbook).sort()){
    console.log(`${key} -> ${adressbook[key]}`)
  }
}

solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
