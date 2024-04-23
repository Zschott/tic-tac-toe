function gameBoard(){
    const rows = 3
    const columns = 3
    const board = []
}

/*function player(box1, box2, box3,
                 box4, box5, box6,
                 box7, box8, box9){
    const box1 = false
    const box2 = false
    const box3 = false
    const box4 = false
    const box5 = false
    const box6 = false
    const box7 = false
    const box8 = false
    const box9 = false
    return {box1, box2, box3, box4, box5, box6, box7, box8, box9}
}
*/

const button1 = document.getElementById('b1')
const button2 = document.getElementById('b2')

const players = [player1]

const player1 = {
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
    box7: false,
    box8: false,
    box9: false
}

function test(player){
    player.box1 = true
    player.box2 = true
    player.box3 = true

    if(player.box1 && player.box2 && player.box3){
        console.log("Worked")
    } else {
        console.log("Didn't work")
    }
}

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
*/