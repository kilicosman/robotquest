let features = require('./robotquest-features');
const R = features.SYMBOLS.robot;
const T = features.SYMBOLS.tree;
const F = features.SYMBOLS.flag;
const W = features.SYMBOLS.water;
const PLAY_BOARD = [
    [T,   T,    '.',   F],
    [T,   '.',  '.', '.'],
    ['.', '.',  '.', '.'],
    [R,   '.',  '.',   W]
];
let robot = {
    position: {
        line: 0,
        column: 0
    },
    head: 'up'
};

let moves = 0;
let turns = 0;

function move(robot, maxLineIndex, maxColumnIndex, nbOfMoves) {
    let line = robot.position.line;
    let column = robot.position.column;

    switch (robot.head) {
        case 'up':
            line = Math.min(maxLineIndex, line + 1);
            break;
        case 'down':
            line = Math.max(0, line - 1);
            break;
        case 'left':
            column = Math.max(0, column - 1);
            break;
        case 'right':
            column = Math.min(maxColumnIndex, column + 1);
            break;
    }

    robot.position.line = line;
    robot.position.column = column;

    nbOfMoves += 1;
    return nbOfMoves;
}


var prompt = require('prompt-sync')();
console.log(" Current position of robot head is"+" "+ robot.head);

let input = prompt("Move or turn?");
switch(input){
    case "t":
        input = prompt(" direction?? ");

       let turnDirection = input;
            if (turnDirection === 'r') {
                step = 'right'
            } else if (turnDirection === 'l') {
                step = 'left'; {
                console.log("Wrong input");
            }

    }
       function turn(turnDirection) {
           if (turnDirection !== 'left' && turnDirection !== 'right') {
               console.log('ignoring invalid turn', turnDirection);
           }

           switch (robot.head) {
               case 'up':
                   robot.head = turnDirection === 'left' ? 'left' : 'right';
                   break;
               case 'down':
                   robot.head = turnDirection === 'left' ? 'right' : 'left';
                   break;
               case 'left':
                   robot.head = turnDirection === 'left' ? 'down' : 'up';
                   break;
               case 'right':
                   robot.head = turnDirection === 'left' ? 'up' : 'down';
                   break;
           }

           turns += 1;


            }

        break;

    case "m":
        move();
        break;

}



console.log(input);
*/



}