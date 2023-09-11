let score =JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0,
} ;

// if (!score){
// score={
//   wins : 0,
//   losses : 0,
//   tie : 0,
// };
// }
// let isAutoPlaying= false ;
// let intervalId ='';

// function autoPlay(){
//   if (!isAutoPlaying){

//    intervalId = setInterval(function(){
//       const playerMove = pickComputerMove();
//       playGame(playerMove);
//     },1000)
//   isAutoPlaying = true ;
//   }else{
//     clearInterval(intervalId);
//     isAutoPlaying =false ;
//   }
//   }
let isAutoPlaying = false ;
let intervalId = '' ;
function autoPlay(){
  if(!isAutoPlaying){
//  intervalId = setInterval(function(){
  intervalId = setInterval(() => {
    const playerMove = pickComputerMove();
    playGame(playerMove);
  },1000);
  isAutoPlaying = true ;
}else{
clearInterval(intervalId);
isAutoPlaying =false ;
}

}

document.querySelector('.js-rock-button').addEventListener('click',()=>{
  playGame('rock');
}) ;

document.querySelector('.js-paper-button').addEventListener('click',() => {
  playGame('rock');
});

document.querySelector('.js-scissor-button').addEventListener('click',() => {
  playGame('scissor');
});

document.body.addEventListener('keydown',(event) => {
  if(event.key === 'r') {
    playGame('rock');
  }else if(event.key === 'p'){
    playGame('paper');
  }else if(event.key === 's'){
    playGame('scissor')
  }
});
 

  function playGame(playerMove){
    let display= pickComputerMove();
let result ='';
   if (playerMove === 'rock'){
    if(display === 'rock'){
     result = 'tie' ;
   }else if(display === 'paper'){
     result ='win' ;
   }else if (display === 'scissor'){
     result = 'loose';
   }
  //  alert( `computer picked ${display}. Your picked ${playerMove}. ${result} wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`) ;
  }else if (playerMove === 'paper'){
    if(display === 'paper'){
     result = 'tie' ;
   }else if(display === 'rock'){
     result ='win' ;
   }else if (display === 'scissor'){
     result = 'loose';
   }
 
  //  alert( `computer picked ${display}. Your picked ${playerMove}. ${result} wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`) ;
  }else if(playerMove === 'scissor'){
    if(display === 'scissor'){
     result = 'tie' ;
   }else if(display === 'paper'){
     result ='win' ;
   }else if (display === 'rock'){
     result = 'loose';
   }
  }
  if(result === 'win'){
  score.wins++ ;
  }else if(result === 'loose'){
   score.losses++ ;
  }else if(result === 'tie'){
   score.ties++ ;
  }

  localStorage.setItem('score',JSON.stringify(score));
  document.querySelector('.js-result')
  .innerHTML = `you ${result}`;
  document.querySelector('.js-moves')
  .innerHTML=`you
<img src="./asssets/${playerMove}-emoji.png" class="move-icon" alt="">
<img src="./asssets/${display}-emoji.png" class="move-icon" alt="">
computer` ;
  
updateScoreElement();
 
  }
  
  function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
    
  }



function pickComputerMove(){
    let computerMove=Math.random();
let display ='';

if(computerMove >= 0 && computerMove < 1/3 ){
  display = 'rock';
}else if(computerMove >= 1/3 && computerMove < 2/3) {
  display = 'paper' ;
}else if(computerMove >=2/3 && computerMove <= 1){
  display = 'scissor'
}
console.log(display);
return display ;
  } 



  // const product2 = {
  //   name : 'shirt',
  //   deliveryTime : '1 Day',
  //   rating: {
  //     stars: 4.5,
  //     count: 87 ,
  //   },
  //   fun: function function1(){
  //     console.log('function inside object');
  //   }
  // };
  // console.log(product2);
  // console.log(product2.name);
  // console.log(product2['name']);
  // console.log(product2.deliveryTime);
  // console.log(product2['delivery-time']);
  // console.log(product2.rating);
  // product2.fun();
  // console.log(typeof console.log);

  // console.log(JSON.stringify(product2));


  // const jsonString =(JSON.stringify(product2))
  // console.log(JSON.parse((JSON.stringify(product2))));

   
   

  
