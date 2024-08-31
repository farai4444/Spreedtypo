 /* when the game finishes the errorcount still keeps incrementing*/ 
 //this section holds the logic for the error count and the timer
var errorcount = () => { return count++;} 
var timerstart = (seconds) =>{ interval = setInterval(() =>{ seconds--;if(seconds === 0){timerstop();}countdownDisp(seconds);console.log(seconds); {
  
}},1000)}
var GameOver = () =>{ 
    DispGameOver.textContent = 'Game Over!';
    DispGameOver.style.color = 'red';
  }

//when timer stops the game over text shows
//the input box is removed from the body
//this section handles what happens when the game is over
var timerstop = () => {clearInterval(interval);document.body.removeChild(inputText);GameOver();}
//var correctwordcount = () => {}
var countdownDisp = (timeleft) => { if(timeleft === 5){timerDisp.style.color = 'red';}timerDisp.textContent = 'Time: '+timeleft;}
 var wordcount = (completepara,modcontent) => {const completewords =completepara.trim().split(/\s+/);const words =modcontent.trim().split(/\s+/); const wordscore =completewords.length - words.length; scoreDisp.innerHTML ="Words: "+ wordscore;
  if (wordscore>10) {
    scoreDisp.style.color = 'green';
  }
  else{scoreDisp.style.color='red';}
 }