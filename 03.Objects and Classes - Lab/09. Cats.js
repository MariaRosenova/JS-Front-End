function solve(list){
    let meow = {};
  for (const line of list) {
    let [name, age] = line.split(' ');
    meow[name] = age;
  }  

  for(let key in meow){
    console.log(`${key}, age ${meow[key]} says Meow`)
  }
}

solve(['Candy 1', 'Poppy 3', 'Nyx 2']);