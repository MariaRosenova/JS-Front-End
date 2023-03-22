function odd(list) {
    let tracker = {};
    list = list.split(' ');
    for (let line of list) {
        line = line.toLowerCase();
        if (!tracker[line]) {
            tracker[line] = 0;
        }
        tracker[line] ++;
    }
    let result = [];
    let sortedArray = Object.entries(tracker).sort((a,b) => b[1] - a[1]);
    for (let [key, value] of sortedArray) {
        if (value % 2 !== 0) {
            result.push(key);
        }
    }
    console.log(result. join(' '));
}
odd("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
