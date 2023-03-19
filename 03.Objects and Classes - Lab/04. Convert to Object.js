function solve(jsonStr) {
    let data = JSON.parse(jsonStr);

    for (const key in data) {
        console.log(`${key}: ${data[key]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}'
); //JSON -> STRING