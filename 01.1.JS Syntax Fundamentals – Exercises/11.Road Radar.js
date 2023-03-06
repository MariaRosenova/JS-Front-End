function speedChecker(speed,area){
    let speedLimit = 0;
    let status = '';
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            if (speed<=130) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }
            else{
                difference = speed - speedLimit;

                if (difference<=20) {
                    status = 'speeding';
                }
                else if(difference<=40){
                    status = 'excessive speeding';
                }
                else{
                    status = 'reckless driving';
                }

                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;

        case 'interstate':
            speedLimit = 90;
            if (speed<=90) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }
            else{

                difference = speed - speedLimit;

                if (difference<=20) {
                    status = 'speeding';
                }
                else if(difference<=40){
                    status = 'excessive speeding';
                }
                else{
                    status = 'reckless driving';
                }

                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
        case 'city':
            speedLimit = 50;
            if (speed<=50) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }
            else{

                difference = speed - speedLimit;

                if (difference<=20) {
                    status = 'speeding';
                }
                else if(difference<=40){
                    status = 'excessive speeding';
                }
                else{
                    status = 'reckless driving';
                }

                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
        case 'residential':
            speedLimit = 20;
            if (speed<=20) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }
            else{
                
                difference = speed - speedLimit;

                if (difference<=20) {
                    status = 'speeding';
                }
                else if(difference<=40){
                    status = 'excessive speeding';
                }
                else{
                    status = 'reckless driving';
                }

                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
    }
}

speedChecker(120, 'interstate');

