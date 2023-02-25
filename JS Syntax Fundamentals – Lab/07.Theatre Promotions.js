function solve(typeOfDay, age){
    let sum;
    switch(typeOfDay){
        case'Weekday':
        if(0 <= age && age <= 18){
            sum = 12;
            console.log(sum + '$');
        }
        else if(18 < age && age<= 64){
            sum = 18;
            console.log(sum + '$');
        }
        else if(64 < age && age <= 122){
            sum = 12;
            console.log(sum + '$');
        }
        else{
            console.log('Error!');
        }
        break;
        case'Weekend':
        if(0 <= age && age <= 18){
            sum = 15;
            console.log(sum + '$');
        }
        else if(18 < age && age<= 64){
            sum = 20;
            console.log(sum + '$');
        }
        else if(64 < age && age <= 122){
            sum = 15;
            console.log(sum + '$');
        }
        else{
            console.log('Error!');
        }
       
        break;
        case'Holiday':
        if(0 <= age && age <= 18){
            sum = 5;
            console.log(sum + '$');
        }
        else if(18 < age && age<= 64){
            sum = 12;
            console.log(sum + '$');
        }
        else if(64 < age && age <= 122){
            sum = 10;
            console.log(sum + '$');
        }
        else{
            console.log('Error!');
        }
       
        break;
    }
    

}

solve('Holiday', -12);