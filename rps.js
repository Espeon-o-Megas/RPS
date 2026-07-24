const playerOptions = ['rock', 'paper', 'scissors'];
const gamebox = document.querySelector('.gamebox');
let playerPick;
let botPick;
let playerScore =0;
let botScore =0;

function announce (text) {
 let announcer = document.querySelector('.announcer')
 announcer.textContent=text+'!!';
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
  gamebox.appendChild(card);
 }
 announce ('make a choice');

 //page waits for player choice
 document.addEventListener('click', (event)=>{
  let text = event.target.textContent;
  playerPick = text.toLowerCase();
  removeCards();
  announce ('Your choice is ' + playerPick);
  setTimeout(theBotPicks, 2000);
 });
}

function theBotPicks() {
  botPick = playerOptions[Math.floor(Math.random()*3)];
  announce('The bot has chosen ' + botPick);
  setTimeout(andTheWinnerIs, 2000);
}

function andTheWinnerIs () {
  if (playerPick === botPick) {
   announce('draw! no points');
  } else if ((playerPick === 'rock' && botPick ==='scissors')||(playerPick === 'paper' && botPick === 'rock')||(playerPick === 'scissors' && botPick === 'paper')) {
   //playerScore++;
   announce('victory! '+ playerPick + ' beats '+ botPick);
  } else if ((playerPick === 'rock' && botPick ==='paper')||(playerPick === 'paper' && botPick === 'scissors')||(playerPick === 'scissors' && botPick === 'rock')) {
   //botScore++;
   announce('Defeat! '+ playerPick + ' loses to '+ botPick);
  } else {
   announce ('invalid inputs')
  }
  //setTimeout(announce, 2000, ('score: '+playerScore+' to '+botScore));
}

thePlayerPicks();