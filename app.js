const s1 = {}
const s2 = {}
const s3 = {}
const s4 = {}
const s5 = {}
const s6 = {}
const s7 = {}
const s8 = {}
const s9 = {}

const b1 = document.getElementById('s1')

function setKey(obj){
    obj.player = 'X'
    if((s1.player && s2.player && s3.player) ||
        (s4.player && s5.player && s6.player) ||
        (s7.player && s8.player && s9.player) ||
        (s1.player && s4.player && s7.player) ||
        (s2.player && s5.player && s8.player) ||
        (s3.player && s6.player && s9.player) ||
        (s1.player && s5.player && s9.player) ||
        (s7.player && s5.player && s3.player)){
        console.log('good test')
    }
}

function changeColor(obj){
    console.log(obj)
    //const button = obj.getElementById(`${obj}`)
    //button.setAttribute('class', 'red')
}

function btnStuff(obj){
    changeColor(obj)
    setKey(obj)
}

// 123, 456, 789, 147, 258, 369, 159, 753

const squares = [s1,s2, s3, s4, s5, s6, s7, s8, s9]



/* Planning
Create game round {
    for (i=1; i<=10, i++){

        function seeIfTheresAWinner

        if (i%2 !== 0){
           Button value goes to Player 1
        } else if (i%2 == 0){
            Button value goes to Player 2
        
        if (i=10){
            Game ends in draw
        }
    }
}

Create board objects
    when player clicks
        assigns player a value


First turn (game start loop, i =1)
    Player X clicks button
        button assigned player's sigil
Next turn (game loop, i++)
    Player O clicks button
        button assigned player's sigil
Repeat turns until a player gets 3 buttons in a row
    Row 1: 1, 2, 3
    Row 2: 4, 5, 6
    Row 3: 7, 8, 9
    Winning values:
        123, 456, 789, 147, 258, 369, 159, 753
OR End the game in a draw if no winners


Recommended Setup According to TOP
gameboard array

players object

game object
*/