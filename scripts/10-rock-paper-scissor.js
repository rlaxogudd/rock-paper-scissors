  let score= JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
  };

  updateScoreElement();


  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result= '';

    if (playerMove=== 'scissor') {
        if (computerMove==='rock') {
        result='you lose 🥲';
      } else if (computerMove==='paper') {
        result='you win 🥳';
      } else if (computerMove==='scissor') {
        result='Tie 🫠';
      }

    } else if (playerMove==='paper') {
        if (computerMove==='rock') {
        result='you win 🥳';
      } else if (computerMove==='paper') {
        result='Tie 🫠';
      } else if (computerMove==='scissor') {
        result='you lose 🥲';
      }
      
    } else if (playerMove==='rock') {
        if (computerMove==='rock') {
        result='Tie 🫠'; // tie = eşit
      } else if (computerMove==='paper') {
        result='you lose 🥲';
      } else if (computerMove==='scissor') {
        result='you win 🥳';
      }
    }

    if (result==='you win 🥳') {
      score.wins += 1;
    } else if(result==='you lose 🥲') {
      score.losses += 1;
    } else if (result==='Tie 🫠') {
      score.ties += 1;
    }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
  // oyunu oynadiğımızda ekrandaki skor yazısının hemen upadte olası için

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `
  You
  <img class="move-icon" src="images/${playerMove}-emoji.png">
  <img class="move-icon" src="images/${computerMove}-emoji.png">
  Computer
  `;
  }

  function updateScoreElement() {
    document.querySelector('.js-score')
    .innerHTML=`wins: ${score.wins}  losses: ${score.losses}  ties: ${score.ties}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove= '';

    if (randomNumber>=0 && randomNumber<1/3) {
      computerMove ='rock';
    } else if(randomNumber>=1/3 && randomNumber<2/3) {
      computerMove ='paper';
    } else if (randomNumber>=2/3 && randomNumber<1) {
      computerMove ='scissor';
    }
    return computerMove; 
  }