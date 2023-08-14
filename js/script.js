// computer move
{
  let playerWins = 0;
  let computerWins = 0;
  const playGame = function (playerInput) {
    clearMessages();

    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return 'kamień';
      } else if (argMoveId == 2) {
        return 'papier';
      } else {
        return 'nożyce';
      }
    };

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    // player move

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    // results comparison

    const displayResult = function (argComputerMove, argPlayerMove) {
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
        playerWins = playerWins + 1;
      } else {
        printMessage('Przegrywasz!');
        computerWins = computerWins + 1;
        /*computerWins+=1; to samo co wyzej*/
        /*computerWins++; zwiekszenie o 1*/
      }
      printMessage('player ' + playerWins + ' : ' + computerWins + ' computer');
    };

    displayResult(computerMove, playerMove);
  };

  document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
  });

  document
    .getElementById('play-scissors')
    .addEventListener('click', function () {
      playGame(3);
    });
}
