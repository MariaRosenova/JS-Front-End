// function solve() {
//     const busContainer = document.querySelector('#info > span');
//     const departBtn = document.getElementById('depart');
//     const arriveBtn = document.getElementById('arrive');
//     const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
//     let nextStopId = 'depot';
//     let stopName = null;
    
//     //     _id: 'depot',
//     //     next: '0361',
//     //     name: 'Depot',
//     //   },
//     //   {
//         //     _id: '0361',
//         //     next: '1931',
//         //     name: 'Krasna Polyana',
        
//         debugger;
//     function depart() {
//         arriveBtn.disabled = false;
//         departBtn.disabled = true;
//         fetch(`${BASE_URL}${nextStopId}`)
//         .then((res) => res.json())
//         .then((nextStopInfo) => {
//             const {name, next} = nextStopInfo;
//             busContainer.textContent = `Next stop ${name}`
//             nextStopId = next;
//             console.log(nextStopInfo);
//         })
//         .catch((err) => {
//             busContainer.textContent = 'Error';
//             arriveBtn.disabled = true;
//         })
//         // when the bus is stopped
//         //only the button depart is enabled
//     }

//     async function arrive() {
//         arriveBtn.disabled = true;
//         departBtn.disabled = false;
//         // TODO:
//         //when the bus is moving 
//         //only the button arrive is enabled
//         //info box shows the name of upcoming stop
//         //Initially, the info box shows "Not Connected" and the "Arrive" button is disabled.
//     }

//     return {
//         depart,
//         arrive
//     };
// }

// let result = solve();
function solve() {
    const info = document.querySelector('.info')
    const [departBtn, arriveBtn] = document.querySelectorAll('input')
    const apiURL = 'http://localhost:3030/jsonstore/bus/schedule/'
    let [departId, departLocation] = ['depot', null]

    departBtn.innerHTML =
    function depart() {
        fetch(`${apiURL}${departId}`).then(x => x.json()).then(x => {
            departLocation = x['name']
            info.textContent = `Next stop ${departLocation}`
            departId = x['next']
            departBtn.disabled = true
            arriveBtn.disabled = false
        }).catch()
    }

    async function arrive() {
        info.textContent = `Arriving at ${departLocation}`
        departBtn.disabled = false
        arriveBtn.disabled = true

    }


    return {
        depart,
        arrive
    };
}

let result = solve();
