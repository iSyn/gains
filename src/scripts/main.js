let Game = {}

Game.state = {

    strength: 0,
    currentPosition: 1 // 1 = up, 0 = down

}

updateStrength = ( amt ) => {
    let strengthAmount = document.querySelector('#strength-amt')
    Game.state.strength += amt
    strengthAmount.innerHTML = Game.state.strength
}

handlePress = ( e ) => {
    if ( e.keyCode == 38 || e.key == 'ArrowUp' ) {
        if ( Game.state.currentPosition == 0 ) {
            Game.state.currentPosition = 1
            updateStrength(1)
        }
    } else if ( e.keyCode == 40 || e.key == 'ArrowDown' ) {
        if ( Game.state.currentPosition == 1 ) {
            Game.state.currentPosition = 0
            updateStrength(1)
        }
    }
}

window.onkeyup = handlePress