const number_to_be_guessed=Math.floor(Math.random() * 100) + 1;
var totalguess = 10;
var guessattempt = 0;


while(totalguess > guessattempt){
 
  guessattempt++ ;
  const guessed_number = prompt('Enter the number :');
  var guessed_number =parseInt(guessed_number);
  if(Number.isNaN(a)){
  console.log("please enter a valid number:");
    return;
  }
  if(number_to_be_guessed==guessed_number){
    console.log('you have won the game in ', guessattempt , ' attempts!!')
    console.log('you score is :', ((totalguess - guessattempt )*10) + 10);
    return;
    
  }
  else if(number_to_be_guessed<guessed_number){
    console.log(guessed_number,' is greater then number to be guessed')
    console.log('You remaining attempts are: ', totalguess - guessattempt);
    
                }
  else{
    console.log(guessed_number,' is less then number to be guessed')
    console.log('You remaining attempts are: ', totalguess - guessattempt);
    

    
  }
    
}
 console.log('game lost')

