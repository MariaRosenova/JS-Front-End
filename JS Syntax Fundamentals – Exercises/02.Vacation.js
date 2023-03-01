function solve(groupOfPeople, typeOfTheGroup, dayOfTheWeek){
    let price=0;
    let totalPrice=0
    switch (typeOfTheGroup) {
        case 'Students':
                if (dayOfTheWeek==='Friday') {
                    price=8.45;
                    price*=groupOfPeople;
                }
                else if(dayOfTheWeek==='Saturday'){
                    price=9.80;
                    price*=groupOfPeople;
                }
                else if(dayOfTheWeek==='Sunday'){
                    price=10.46;
                    price*=groupOfPeople;
                }
            break;
        case 'Business':
                if (dayOfTheWeek==='Friday') {
                    price=10.90;
                    price*=groupOfPeople;
                }
                else if(dayOfTheWeek==='Saturday'){
                    price=15.60;
                    price*=groupOfPeople;
                }
                else if(dayOfTheWeek==='Sunday'){
                    price=16;
                    price*=groupOfPeople;
                }
            break;
        case 'Regular':
                if (dayOfTheWeek==='Friday') {
                    price=15;
                    price*=groupOfPeople;
                }
                else if(dayOfTheWeek==='Saturday'){
                    price=20;
                    price*=groupOfPeople;
                }
                else if(dayOfTheWeek==='Sunday'){
                    price=22.50;
                    price*=groupOfPeople;
                }
            break;
    }
        if (groupOfPeople>=30 && typeOfTheGroup==='Students') {
            totalPrice = price-(price*0.15);
            console.log(`Total price: ${totalPrice.toFixed(2)}`)
        }
        else if(groupOfPeople>=100 && typeOfTheGroup==='Business'){
            groupOfPeople-=10;
            totalPrice = groupOfPeople*price;
            console.log(`Total price: ${totalPrice.toFixed(2)}`)

        }
        else if((groupOfPeople>=10 && groupOfPeople<=20) && typeOfTheGroup==='Regular')
        {
            totalPrice = price-(price*0.05);
            console.log(`Total price: ${totalPrice.toFixed(2)}`)
        }
        else{
            totalPrice = price;
            console.log(`Total price: ${price.toFixed(2)}`)
        }
    }
    
            solve(40,
                "Regular",
                "Saturday");
                