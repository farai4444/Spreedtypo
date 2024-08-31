/* 
Author: Farai Tapfumaneyi
Email:blackparrot1890@gmail.com
Date: 26 may 2024

Copyright (c) 2024, Farai Tapfumaneyi
All rights reserved
Description this is an open source code  
*/ 



//tag declaration
var startbtn = document.getElementById('startmain');
var dispText =document.createElement('h3');
var DispGameOver = document.createElement('h2');
var erroText = document.createElement('h4');
var inputText = document.createElement('input');
var timerDisp = document.createElement('h2');
var scoreDisp = document.createElement('h4');
//adds the dispText and inputText variables into the body of the html file
document.body.appendChild(dispText);
document.body.appendChild(scoreDisp);
document.body.appendChild(erroText);
document.body.appendChild(inputText);
document.body.appendChild(timerDisp);
document.body.appendChild(DispGameOver);
//tag initialization
scoreDisp.className = 'bar1';
timerDisp.className = 'bar1';
erroText.className = 'bar1';
dispText.className = 'disp';
inputText.className = 'command';
DispGameOver.className = 'gameover';
inputText.placeholder = 'Click Here to start typing';
dispText.textContent = 'Type start to begin';
erroText.textContent = 'Errors: ';
timerDisp.textContent = 'Time: ';
//DispGameOver.textContent = 'Game Over!';
scoreDisp.textContent = 'Words:'
DispGameOver.style.color = 
erroText.style.color = 'red';
timerDisp.style.color = 'green';
scoreDisp.style.color = 'red';
erroText.style.fontSize = 'xx-large';
timerDisp.style.fontSize = 'xx-large';
scoreDisp.style.fontSize = 'xx-large';
var count = 0;
var scorecount = 0;
var clockTime=60;
let interval;
//let seconds = 10;
//let typingstart = false;
 //sentence handlers are initialized here
 const typecontent = questions[randval];
 
//console.log(questions[randval]);
 const startgame = 'start';
 const hard = 'hard';
 const easy = 'easy';
 const medium = 'medium';

var mainmenu = () => {
    let initstart = startgame;
    let modifiedcontent = typecontent;

  //the game starts to play from here

    inputText.addEventListener('input', e => {
        const targetValue = e.target.value;
        console.log(initstart)
        if (initstart === targetValue) {initstart = initstart.replace(targetValue,"");timerstart(clockTime)}
       // else{}
      
        dispText.innerHTML = initstart;
     
        //the game begins to start the typing session from here

        if(initstart.length == 0){ console.log("The game begins now");

        //this section handles the removal of correct text

        //adding errors on incorrect text

        //tracking whether the correct character is typed or not

        if (modifiedcontent.includes(targetValue)) {
          let currentchar = modifiedcontent.charAt(0);
          if(currentchar.includes(targetValue)){
          modifiedcontent = modifiedcontent.replace(targetValue,"");
          wordcount(typecontent,modifiedcontent);
          //scoreDisp.innerHTML =''+ scorecount++
          //if (scor) {}
        }
          else{erroText.textContent ="Error: "+ errorcount();
          } 
        }

         else{erroText.textContent ="Error: "+ errorcount();
         } 
         dispText.innerHTML = modifiedcontent;
         e.target.value = "";
         
          //This section handles what happens when the timer hits zero or when all the characters have been type correctly

        if(modifiedcontent.length == 0){console.log('Game over');timerstop();}
            else{dispText.style.color = 'orange';} 
           } 
           else{dispText.style.color = 'pink';}
      }
    )
  }
   

//startbtn.addEventListener('click',mainmenu)
//DispGameOver.addEventListener('click',reset)
//var reset = () =>{count = 0;scorecount = 0;clockTime=0;document.body.appendChild(inputText); mainmenu()}
mainmenu();

