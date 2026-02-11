 /* when the game finishes the errorcount still keeps incrementing*/ 
 //this section holds the logic for the error count and the timer
var errorcount = () => { return count++;} 
var timerstart = (seconds) =>{ interval = setInterval(() =>{ 
  seconds--;
  if(!(seconds <= 0)){
    countdownDisp(seconds);console.log(seconds);  
  }
    else{
      dispText.textContent='The Game Is Over You did Great Champ! Type Restart To Break Your Record'
      dispText.style.color = 'green';
      timerstop();
    }
  },1000)}
var timerstop = () => {clearInterval(interval)}
//var correctwordcount = () => {}
var countdownDisp = (timeleft) => { if(timeleft <= 5){timerDisp.style.color = 'red';}else{timerDisp.style.color='green'}timerDisp.textContent = 'Time: '+timeleft;}
 var wordcount = (completepara,modcontent) => {const completewords =completepara.trim().split(/\s+/);const words =modcontent.trim().split(/\s+/); const wordscore =completewords.length - words.length; scoreDisp.innerHTML ="Words: "+ wordscore;
  if (wordscore>10) {
    scoreDisp.style.color = 'green';
  }
  else{scoreDisp.style.color='red';}
 }