const box = document.querySelectorAll(".box");
const boxArray = Array.from(box);
const h1=document.querySelector('h1')
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const newGame=document.querySelector('button.newGame');
const buttonReset=document.querySelector('button[type="reset"]');
const player=document.querySelector('span.player')
const h2X=document.querySelector(".win-X");
const h2O=document.querySelector(".win_O");
let winX=0;
let winO=0;
let currentPlayer = 1;

      for (let i = 0; i < boxArray.length; i++) {
         boxArray[i].addEventListener("click", function () {
          if (!this.classList.contains("selected")) {
            if (currentPlayer == 1) {
              player.innerText='player-O'
              this.innerHTML = '<span class="player-1">X</span>';
              currentPlayer = 2;
            } else {
              player.innerText='player-X'
              this.innerHTML = '<span class="player-2">O</span>';
              currentPlayer = 1;
            }
            this.classList.add("selected");
          }
          // checkplayer-X
          checkX()
          // checkplayer-O
          checkO()
        });
      }
      function checkX(){
        if (
            (boxArray[0].innerHTML==='<span class="player-1">X</span>')&&(boxArray[1].innerHTML==='<span class="player-1">X</span>')&&(boxArray[2].innerHTML==='<span class="player-1">X</span>')){
              h1.innerText="win-X"
              winX=winX+1
              h2X.innerText=`X=${winX}`
              player.innerText='player-X'
              resetGame()
              console.log("win");
            }else if((boxArray[3].innerHTML==='<span class="player-1">X</span>')&&(boxArray[4].innerHTML==='<span class="player-1">X</span>')&&(boxArray[5].innerHTML==='<span class="player-1">X</span>')){
              h1.innerText="win-X"
              winX=winX+1
              h2X.innerText=`X=${winX}`
              player.innerText='player-X'
              resetGame()
              console.log("win");
            }else if((boxArray[6].innerHTML==='<span class="player-1">X</span>')&&(boxArray[7].innerHTML==='<span class="player-1">X</span>')&&(boxArray[8].innerHTML==='<span class="player-1">X</span>')){
              h1.innerText="win-X"
              winX=winX+1
              h2X.innerText=`X=${winX}`
              player.innerText='player-X'
              resetGame()
              console.log("win");
            }else if((boxArray[0].innerHTML==='<span class="player-1">X</span>')&&(boxArray[3].innerHTML==='<span class="player-1">X</span>')&&(boxArray[6].innerHTML==='<span class="player-1">X</span>')){
              h1.innerText="win-X"
              winX=winX+1
              h2X.innerText=`X=${winX}`
              player.innerText='player-X'
              resetGame()
              console.log("win");
            }else if((boxArray[1].innerHTML==='<span class="player-1">X</span>')&&(boxArray[4].innerHTML==='<span class="player-1">X</span>')&&(boxArray[7].innerHTML==='<span class="player-1">X</span>')){
              h1.innerText="win-X"
              winX=winX+1
              h2X.innerText=`X=${winX}`
              player.innerText='player-X'
              resetGame()
              console.log("win");
            }else if((boxArray[2].innerHTML==='<span class="player-1">X</span>')&&(boxArray[5].innerHTML==='<span class="player-1">X</span>')&&(boxArray[8].innerHTML==='<span class="player-1">X</span>')){
              h1.innerText="win-X"
              winX=winX+1
              h2X.innerText=`X=${winX}`
              player.innerText='player-X'
              resetGame()
              console.log("win");
            }else if((boxArray[0].innerHTML==='<span class="player-1">X</span>')&&(boxArray[4].innerHTML==='<span class="player-1">X</span>')&&(boxArray[8].innerHTML==='<span class="player-1">X</span>')){
              h1.innerText="win-X"
              winX=winX+1
              h2X.innerText=`X=${winX}`
              player.innerText='player-X'
              resetGame()
              console.log("win");
            }else if((boxArray[2].innerHTML==='<span class="player-1">X</span>')&&(boxArray[4].innerHTML==='<span class="player-1">X</span>')&&(boxArray[6].innerHTML==='<span class="player-1">X</span>')){
              h1.innerText="win-X"
              winX=winX+1
              h2X.innerText=`X=${winX}`
              player.innerText='player-X'
              resetGame()
              console.log("win");
            }
      }
      function checkO(){
        if((boxArray[0].innerHTML==='<span class="player-2">O</span>')&&(boxArray[1].innerHTML==='<span class="player-2">O</span>')&&(boxArray[2].innerHTML==='<span class="player-2">O</span>')){
              h1.innerText="win-O"
              winO=winO+1
              h2O.innerText=`O=${winO}`
              player.innerText='player-X'
              resetGame()  
              console.log("win");
            }else if((boxArray[3].innerHTML==='<span class="player-2">O</span>')&&(boxArray[4].innerHTML==='<span class="player-2">O</span>')&&(boxArray[5].innerHTML==='<span class="player-2">O</span>')){
              h1.innerText="win-O"
              winO=winO+1
              h2O.innerText=`O=${winO}`
              player.innerText='player-X'
              resetGame()
              console.log("win");
            }else if((boxArray[6].innerHTML==='<span class="player-2">O</span>')&&(boxArray[7].innerHTML==='<span class="player-2">O</span>')&&(boxArray[8].innerHTML==='<span class="player-2">O</span>')){
              h1.innerText="win-O"
              winO=winO+1
              h2O.innerText=`O=${winO}`
              player.innerText='player-X'
              resetGame()
              console.log("win");
            }else if((boxArray[0].innerHTML==='<span class="player-2">O</span>')&&(boxArray[3].innerHTML==='<span class="player-2">O</span>')&&(boxArray[6].innerHTML==='<span class="player-2">O</span>')){
              h1.innerText="win-O"
              winO=winO+1
              h2O.innerText=`O=${winO}`
              player.innerText='player-X'
              resetGame()
              console.log("win");
            }else if((boxArray[1].innerHTML==='<span class="player-2">O</span>')&&(boxArray[4].innerHTML==='<span class="player-2">O</span>')&&(boxArray[7].innerHTML==='<span class="player-2">O</span>')){
              h1.innerText="win-O"
              winO=winO+1
              h2O.innerText=`O=${winO}`
              player.innerText='player-X'
              resetGame()
              console.log("win");
            }else if((boxArray[2].innerHTML==='<span class="player-2">O</span>')&&(boxArray[5].innerHTML==='<span class="player-2">O</span>')&&(boxArray[8].innerHTML==='<span class="player-2">O</span>')){
              h1.innerText="win-O"
              winO=winO+1
              h2O.innerText=`O=${winO}`
              player.innerText='player-X'
              resetGame()
              console.log("win");
            }else if((boxArray[0].innerHTML==='<span class="player-2">O</span>')&&(boxArray[4].innerHTML==='<span class="player-2">O</span>')&&(boxArray[8].innerHTML==='<span class="player-2">O</span>')){
              h1.innerText="win-O"
              winO=winO+1
              h2O.innerText=`O=${winO}`
              player.innerText='player-X'
              resetGame()
              console.log("win");
            }else if((boxArray[2].innerHTML==='<span class="player-2">O</span>')&&(boxArray[4].innerHTML==='<span class="player-2">O</span>')&&(boxArray[6].innerHTML==='<span class="player-2">O</span>')){
              h1.innerText="win-O"
              winO=winO+1
              h2O.innerText=`O=${winO}`
              player.innerText='player-X'
              resetGame()
              console.log("win");
            }
      }
      function resetGame(){
        for(i=0;i<boxArray.length;i++){
          boxArray[i].innerHTML=''
          boxArray[i].classList.remove("selected");
          setTimeout(() => {
            h1.innerText="win?"
          },1000);
        }
        currentPlayer = 1;
      }

      newGame.addEventListener('click',function(){
        player.innerText='player-X'
        resetGame()
      });

      buttonReset.addEventListener('click',function(){
        winX=0
        h2X.innerText='X='
        winO=0
        h2O.innerText='O='
        player.innerText='player-X'
        resetGame()
      })