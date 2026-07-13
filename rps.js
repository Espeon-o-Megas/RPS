/* THE ROCK PAPER SCISSORS GAME!*/
function getPlayerPick () {
 let initPlayerPick = prompt ("Rock, Paper or Scissors?", 'paPer');
 let truePlayerPick = initPlayerPick.toLowerCase();
 return truePlayerPick;
};

function getBotPick () {
 let rand3 = Math.floor(Math.random() * 3);
 let BotPick;
 switch (rand3) {
  case 0: BotPick = 'rock'; break;
  case 1: BotPick = 'paper'; break;
  case 2: BotPick = 'scissors' ; break;
 }
 return BotPick;
};

function playGame () {
 let PlayerPoints = 0;
 let BotPoints = 0;

 function playBall (PPick, BPick) {
  if ((PPick === 'rock' && BPick === 'scissors')||(PPick === 'scissors' && BPick === 'paper')||(PPick === 'paper' && BPick === 'rock')) {
   PlayerPoints +=1;
   console.log('You Win, '+ PPick +' beats '+ BPick +'!'+'\nScore: ' + PlayerPoints+' to '+BotPoints);
  } else if ((PPick === 'rock' && BPick === 'paper')||(PPick === 'scissors' && BPick === 'rock')||(PPick === 'paper' && BPick === 'scissors')) {
   BotPoints += 1;
   console.log('You Lose, '+ PPick +' loses to '+ BPick +'!'+'\nScore: ' + PlayerPoints+' to '+BotPoints);
  } else if (PPick === BPick) {
   console.log('Draw, both picked '+PPick+'\nScore: ' + PlayerPoints+' to '+BotPoints);
  } else {
   console.log('No outcome, inputs invalid.'+'\nScore: ' + PlayerPoints+' to '+BotPoints);
  }
 }

 function Victor (score1, score2) {
  if (score1 > score2) {
   console.log('You are victorious!\nFinal Score: '+score1+' to '+score2+'!')
  } else if (score1 < score2) {
   console.log('You are defeated!\nFinal Score: '+score1+' to '+score2+'!')
  } else {
   console.log('No winner!\nFinal Score: '+score1+' to '+score2+'!')
  };
 }

 playBall(getPlayerPick(), getBotPick());
 playBall(getPlayerPick(), getBotPick());
 playBall(getPlayerPick(), getBotPick());
 playBall(getPlayerPick(), getBotPick());
 playBall(getPlayerPick(), getBotPick());
 Victor(PlayerPoints, BotPoints);
}

playGame ();