// computer move
function playGame(playerInput) {
  clearMessages();

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else {
      return 'nożyce';
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  /*if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else {
  computerMove = 'nożyce';
} */

  printMessage('Mój ruch to: ' + computerMove);

  // player move
  /*let playerInput = prompt(
    'Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'
  );*/

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  /*if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
} else {
  playerMove = 'nieznany ruch';
}*/

  printMessage('Twój ruch to: ' + playerMove);

  // results comparison

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage(
      'Mój ruch to: ' + argComputerMove + ' , Twój ruch to: ' + argPlayerMove
    );
    console.log('moves:', argComputerMove, argPlayerMove);
    if (argComputerMove == argPlayerMove) {
      printMessage('REMIS!');
    } else if (
      (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
      printMessage('Ty wygrywasz!');
    } else {
      printMessage('Przegrywasz!');
    }
  }

  /*let result = displayResult(computerMove,playerMove)*/
  displayResult(computerMove, playerMove);

  /*if (computerMove == playerMove) {
  printMessage('REMIS!');
} else if (computerMove == 'kamień' && playerMove == 'papier' || computerMove == 'papier' && playerMove == 'nożyce' || computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce' || computerMove == 'papier' && playerMove == 'kamień' || computerMove == 'nożyce' && playerMove == 'papier') {
  printMessage('Przegrywasz!');
} else {
  printMessage('Coś poszło nie tak!');
}*/
}

document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});
