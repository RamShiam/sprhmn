/* 
Guess the number! 
*/

var winNumber = Math.floor(Math.random() * 100);

alert ("Welcome to The Number Guesser.\nYou have 5 tries!\nLet's see if you can guess the right number!");

for (counter = 0; counter <=10; counter++) 
{
var numberGuess = prompt ("Go ahead and guess a number between 1 and 100:");
parseInt(numberGuess);

  if (numberGuess == winNumber)
  {
    alert ("YOU GOT IT CORRECT!!!");
    break;
  }
  else if (numberGuess != winNumber);
  {
    alert ("Guess again!");
  }
}

if (numberGuess != winNumber)
{
alert ("You've reached the amount of tries allowed. Please play again.\n The correct number is: " + winNumber);
}

