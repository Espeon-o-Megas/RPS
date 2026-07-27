const playerOptions = ['rock', 'paper', 'scissors'];
const gamebox = document.querySelector('.gamebox');
let playerPick;
let botPick;
let playerScore =0;
let botScore =0;
let round = 1;

function announce (text) {
 let announcer = document.querySelector('.announcer')
 announcer.textContent=text+'!';
}
function removeCards () {
 for(let i=0; i<playerOptions.length; i++){
  let card = document.querySelector('.card');
  gamebox.removeChild(card);
 }
}


function thePlayerPicks () { 
 //cards are created
 for (i=0; i<playerOptions.length; i++) {
  let card = document.createElement('button');
  card.classList.add('card')
  card.textContent=playerOptions[i];
  card.addEventListener('click', (event)=>{
   let text = event.target.textContent;
   playerPick = text.toLowerCase();
   removeCards();
   announce ('You have chosen ' + playerPick);
   setTimeout(theBotPicks, 1000);
  })
  gamebox.appendChild(card);
 }
 announce ('round '+round+'. make a choice');
}

function theBotPicks() {
  botPick = playerOptions[Math.floor(Math.random()*3)];
  announce('The bot has chosen ' + botPick);
  setTimeout(andTheWinnerIs, 1000);
}

function andTheWinnerIs () {
  if (playerPick === botPick) {
   announce('draw! no points');
  } else if ((playerPick === 'rock' && botPick ==='scissors')||(playerPick === 'paper' && botPick === 'rock')||(playerPick === 'scissors' && botPick === 'paper')) {
   playerScore++;
   announce('victory! '+ playerPick + ' beats '+ botPick);
  } else if ((playerPick === 'rock' && botPick ==='paper')||(playerPick === 'paper' && botPick === 'scissors')||(playerPick === 'scissors' && botPick === 'rock')) {
   botScore++;
   announce('Defeat! '+ playerPick + ' loses to '+ botPick);
  } else {
   announce ('invalid inputs')
  }
 setTimeout(playNewRound, 1000);
}

function playNewRound() {
 if (round<5) {
  announce('Round '+round+' of 5. \nScore: '+playerScore+' to '+botScore);
  let newRoundButton = document.createElement('button');
  newRoundButton.classList.add('card');
  newRoundButton.textContent='play again?'
  newRoundButton.addEventListener('click', ()=>{
   thePlayerPicks();
   gamebox.removeChild(newRoundButton);
  });
  gamebox.appendChild(newRoundButton);
  round++;
 } else {
  announce('Final Score: '+playerScore+' to '+botScore);
  if (playerScore<botScore){
   announce(':( you lose');
  } else if (playerScore>botScore) {
   announce(':) you win!');
  } else if (playerScore=botScore) {
   announce('draw');
  } else {
   announce('winner unclear');
  }
  setTimeout(()=>{
  let newRoundButton = document.createElement('button');
  newRoundButton.classList.add('card');
  newRoundButton.textContent='start new game?'
  newRoundButton.addEventListener('click', ()=>{
   thePlayerPicks();
   gamebox.removeChild(newRoundButton);
  });
  gamebox.appendChild(newRoundButton);
  round=1;
  }, 1000);
 }
}

thePlayerPicks();