'use strict';
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
console.log(PLAY_BOARD);
//const STEPS_TO_FLAG = ['move', 'turn-right', 'move', 'move', 'move', 'turn-left', 'move', 'move'];




let board1 = PLAY_BOARD.reverse();
// we play upside down, so the robot starts (0,0) in the bottom left
var STEPS_TO_FLAG;
STEPS_TO_FLAG = [];
let i=0;
let j=0;
let k=0;
let maxLineIndex1 = board1.length - 1;


let maxColumnIndex1 = board1[0].length - 1;


for(let a=1;a<5;a){

    if(i <maxColumnIndex1 && board1[i+1][j]==='.'){

        STEPS_TO_FLAG[k]= 'move';
        k++;

        i++;



    }else if(j<maxLineIndex1 && board1[i][j+1] ==='.'||board1[i][j+1] ===F){
        STEPS_TO_FLAG[k]= 'turn-right';
        k++;
        STEPS_TO_FLAG[k]= 'move';
        k++;
        STEPS_TO_FLAG[k]= 'turn-left';
        k++;
        j++;




    } else {
        a=5;


    }
}
let board2=PLAY_BOARD.reverse();

