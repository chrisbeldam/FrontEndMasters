// const game = {
//     'suspects': [
//         {
//             name: 'Rusty',
//             color: 'Orange'
//         },
//         {
//             name: 'Miss Scarlet',
//             color: 'red'
//         }
//     ]
// }

// function loop(){
//     for(let i=0; i<game.suspects.length; i++){ // Objects themselves have no length but the array inside it does 
//         console.log(game.suspects[i]); // Need to get inside the array 'suspects'
//     }
// }

// for(key in obj){ // Special loop for objects
//     obj[key]
// }

// Loops through game-suspects-name/color
// function gameLoop(){
//     for(let i = 0; i<game.suspects.length; i++) { // Runs 2 times as there is 2 suspects
//         console.log('Outer Loop');
//         for(key in game.suspects[i]){ // Runs 4 times as there are two properties per suspect
//             console.log('Inner Loop');
//             if(game.suspects[i][key] === "Rusty"){
//                 console.log("Found it");
//             }
//             else {
//                 console.log('Next Time');
//             }
//         }
//     }
// }

// gameLoop()

var suspects = [
        {
            name: 'Rusty',
            color: 'Orange'
        },
        {
            name: 'Miss Scarlet',
            color: 'red'
        }
    ]

var firstColor = game.suspects[0].color;
var secondColor = game.suspects[1].color;

var [color1, color2] = [suspects[0].color, suspects[1].color];
var [{color: firstColor}, [{color: secondColor}]]; // First color property is assigned to firstColor variable, second color property to secondColor variable