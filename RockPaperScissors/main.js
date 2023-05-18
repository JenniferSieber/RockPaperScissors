// botChoice Randomized
function randomizedBotChoice() {
  let random = Math.random();
  if (random < .33) {
    return 'rock'
  }
  else if (random < .66) {
    return 'paper'
  }
  else {
    return 'scissors'
  }
}

//Check Win between passed player choice and randomized bot choice
function checkWin(playerChoice) {
  let botChoice = randomizedBotChoice()
  console.log(playerChoice, botChoice)
  //check wins
  if (
      playerChoice === 'rock' && 
      botChoice === 'scissors' || 
      playerChoice === 'paper' && 
      botChoice === 'rock' || 
      playerChoice === 'scissors' && 
      botChoice === 'paper'
    ) {
      console.log('Player Wins!')
    } 
    else if(playerChoice === botChoice) {
      console.log('Player Tied with Bot')
    }
    else {
      console.log('Bot Wins')
    }
}
//player choices in array for each game of rock paper scissors
function playGameXTimes(arr) {
  arr.forEach(choice => checkWin(choice))
}

playGameXTimes(['rock', 'paper', 'scissors', 'rock', 'paper', 'scissors'])