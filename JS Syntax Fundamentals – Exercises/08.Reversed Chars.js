function reverse(firstP, secondP, thirdP) {
    let array = [];
    let arr=[firstP, secondP, thirdP];
    arr.reverse();

   for(let index = 0; index<arr.length; index++){
        array += [index + ' '];
   }

   for(let index=0; index<array.length; index++){
        console.log(array[index]);
   }
}
//4ti slide v powerpoint :)
// obicham te i bravo za usiliqta ti dnes!
// gordeq se s teb

reverse(3,2,1);