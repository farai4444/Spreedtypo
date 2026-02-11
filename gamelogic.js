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
var dispText = document.createElement('h3');
var DispGameOver = document.createElement('h2');
var erroText = document.createElement('h4');
var gameBoardText = document.createElement('h1');
var timerDisp = document.createElement('h2');
var scoreDisp = document.createElement('h4');
//adds the dispText and inputText variables into the body of the html file
document.body.appendChild(dispText);
document.body.appendChild(scoreDisp);
document.body.appendChild(erroText);
document.body.appendChild(gameBoardText);
document.body.appendChild(timerDisp);
document.body.appendChild(DispGameOver);
//tag initialization
scoreDisp.className = 'bar1';
timerDisp.className = 'bar1';
erroText.className = 'bar1';
dispText.className = 'disp';
gameBoardText.className = 'command';
DispGameOver.className = 'gameover';
dispText.textContent = 'Type start to begin';
erroText.textContent = 'Errors: ';
timerDisp.textContent = 'Time: ';
//DispGameOver.textContent = 'Game Over!';
scoreDisp.textContent = 'Words:'
DispGameOver.style.color = 
erroText.style.color = 'red';
timerDisp.style.color = 'black';
scoreDisp.style.color = 'black';
dispText.style.color = 'orange'
erroText.style.fontSize = 'xx-large';
timerDisp.style.fontSize = 'xx-large';
scoreDisp.style.fontSize = 'xx-large';
var count = 0;
var scorecount = 0;
var clockTime=5;
let interval;
//let seconds = 10;
//let typingstart = false;
 //sentence handlers are initialized here
 const typecontent = questions[randval];
 
//console.log(questions[randval]);
 const startgame = 'start';
 const startagain = 'restart'
 const hard = 'hard';
 const easy = 'easy';
 const medium = 'medium';
 gameActive = false;

var mainmenu = () => {
    let initstart = startgame;
    let modifiedcontent = typecontent;

    window.addEventListener('keydown', e => {

      targetValue = e.key;
      curChar = initstart.charAt(0)

      if (!(targetValue === curChar)) {
        console.log("you typed wrong character")
      }
      else{
        initstart = initstart.substring(1)
        timerstart(clockTime,initstart)
        console.log("match")
      }
      
      if(!(initstart.length === 0)){
        console.log(initstart)
        dispText.textContent = initstart;
      }

      else{
        console.log ("All characters have been removed")
        gameActive = true
        dispText.textContent = 'All Character have been removed'
        dispText.style.color = 'green'
        
        //playGame(targetValue,modifiedcontent)  
        currentchar = modifiedcontent.charAt(0);
          if(!(targetValue === currentchar)){
            erroText.textContent ="Error: "+ errorcount()
      
          }
          else{
          modifiedcontent = modifiedcontent.substring(1);
          wordcount(typecontent,modifiedcontent);
      
          } 

          if(!(modifiedcontent.length === 0)){
            dispText.textContent = modifiedcontent;
          }

          else{
            dispText.textContent='The Game Is Over You did Great Champ! Type Restart To Break Your Record'
            dispText.style.color = 'green';
            initstart = startagain;
            console.log('Game over');
            timerstop();
          }
       
        }
        StateFeatures()
    })
 }
    
  //the game starts to play from here
/** 
    inputText.addEventListener('input', e => {
        const targetValue = e.target.value;
        console.log(initstart)
        if (initstart === targetValue) {initstart = initstart.substring(1);}
       // else{}
      
        dispText.innerHTML = initstart;
     
        //the game begins to start the typing session from here

        if(initstart.length == 0){ console.log("The game begins now");

        //this section handles the removal of correct text

        //adding errors on incorrect text

        //tracking whether the correct character is typed or not
*/
         

function playGame(targetV,modifiedcontent) {
      }
         
  function StateFeatures() {
    if (gameActive === true) {
      gameBoardText.textContent ="Lets go !!! 😆😆😆";
    }
    else{gameBoardText.textContent = 'Welcome to the Game 😀';}
    
  }
          //This section handles what happens when the timer hits zero or when all the characters have been type correctly

        
      
    
  
  
   

//startbtn.addEventListener('click',mainmenu)
//DispGameOver.addEventListener('click',reset)
//var reset = () =>{count = 0;scorecount = 0;clockTime=0;document.body.appendChild(inputText); mainmenu()}
mainmenu();

