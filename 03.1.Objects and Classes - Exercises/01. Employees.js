function listOfEmployees(list) {
  let personalNumber = {};
  for (let name of list) {
    let splitName = name.split('');
    personalNumber[name] = splitName.length;
  }

  for(let key in personalNumber){
    console.log(`Name: ${key} -- Personal Number: ${personalNumber[key]}`)
  }
}

listOfEmployees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
