const box = document.querySelectorAll(".box");
      const boxArray = Array.from(box);
      const player1 = document.querySelector(".player-1");
      const player2 = document.querySelector(".player-2");
      const buttonReset=document.querySelector('button[type="reset"]')
      let currentPlayer = 1;

      for (let i = 0; i < boxArray.length; i++) {
         boxArray[i].addEventListener("click", function () {
          if (!this.classList.contains("selected")) {
            if (currentPlayer == 1) {
              this.innerHTML = '<span class="player-1">X</span>';
              currentPlayer = 2;
            } else {
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
              resetGame()
              console.log("win");
            }else if((boxArray[3].innerHTML==='<span class="player-1">X</span>')&&(boxArray[4].innerHTML==='<span class="player-1">X</span>')&&(boxArray[5].innerHTML==='<span class="player-1">X</span>')){
              resetGame()
              console.log("win");
            }else if((boxArray[6].innerHTML==='<span class="player-1">X</span>')&&(boxArray[7].innerHTML==='<span class="player-1">X</span>')&&(boxArray[8].innerHTML==='<span class="player-1">X</span>')){
              resetGame()
              console.log("win");
            }else if((boxArray[0].innerHTML==='<span class="player-1">X</span>')&&(boxArray[3].innerHTML==='<span class="player-1">X</span>')&&(boxArray[6].innerHTML==='<span class="player-1">X</span>')){
              resetGame()
              console.log("win");
            }else if((boxArray[1].innerHTML==='<span class="player-1">X</span>')&&(boxArray[4].innerHTML==='<span class="player-1">X</span>')&&(boxArray[7].innerHTML==='<span class="player-1">X</span>')){
              resetGame()
              console.log("win");
            }else if((boxArray[2].innerHTML==='<span class="player-1">X</span>')&&(boxArray[5].innerHTML==='<span class="player-1">X</span>')&&(boxArray[8].innerHTML==='<span class="player-1">X</span>')){
              resetGame()
              console.log("win");
            }else if((boxArray[0].innerHTML==='<span class="player-1">X</span>')&&(boxArray[4].innerHTML==='<span class="player-1">X</span>')&&(boxArray[8].innerHTML==='<span class="player-1">X</span>')){
              resetGame()
              console.log("win");
            }else if((boxArray[2].innerHTML==='<span class="player-1">X</span>')&&(boxArray[4].innerHTML==='<span class="player-1">X</span>')&&(boxArray[6].innerHTML==='<span class="player-1">X</span>')){
              resetGame()
              console.log("win");
            }
      }
      function checkO(){
        if((boxArray[0].innerHTML==='<span class="player-2">O</span>')&&(boxArray[1].innerHTML==='<span class="player-2">O</span>')&&(boxArray[2].innerHTML==='<span class="player-2">O</span>')){
              resetGame()  
              console.log("win");
            }else if((boxArray[3].innerHTML==='<span class="player-2">O</span>')&&(boxArray[4].innerHTML==='<span class="player-2">O</span>')&&(boxArray[5].innerHTML==='<span class="player-2">O</span>')){
              resetGame()
              console.log("win");
            }else if((boxArray[6].innerHTML==='<span class="player-2">O</span>')&&(boxArray[7].innerHTML==='<span class="player-2">O</span>')&&(boxArray[8].innerHTML==='<span class="player-2">O</span>')){
              resetGame()
              console.log("win");
            }else if((boxArray[0].innerHTML==='<span class="player-2">O</span>')&&(boxArray[3].innerHTML==='<span class="player-2">O</span>')&&(boxArray[6].innerHTML==='<span class="player-2">O</span>')){
              resetGame()
              console.log("win");
            }else if((boxArray[1].innerHTML==='<span class="player-2">O</span>')&&(boxArray[4].innerHTML==='<span class="player-2">O</span>')&&(boxArray[7].innerHTML==='<span class="player-2">O</span>')){
              resetGame()
              console.log("win");
            }else if((boxArray[2].innerHTML==='<span class="player-2">O</span>')&&(boxArray[5].innerHTML==='<span class="player-2">O</span>')&&(boxArray[8].innerHTML==='<span class="player-2">O</span>')){
              resetGame()
              console.log("win");
            }else if((boxArray[0].innerHTML==='<span class="player-2">O</span>')&&(boxArray[4].innerHTML==='<span class="player-2">O</span>')&&(boxArray[8].innerHTML==='<span class="player-2">O</span>')){
              resetGame()
              console.log("win");
            }else if((boxArray[2].innerHTML==='<span class="player-2">O</span>')&&(boxArray[4].innerHTML==='<span class="player-2">O</span>')&&(boxArray[6].innerHTML==='<span class="player-2">O</span>')){
              resetGame()
              console.log("win");
            }
      }
      function resetGame(){
        for(i=0;i<boxArray.length;i++){
          boxArray[i].innerHTML=''
          boxArray[i].classList.remove("selected");
        }
        currentPlayer = 1;
      }
      buttonReset.addEventListener('click',function(){
        resetGame()
      });