const rockButton = document.querySelector('.js-rock');
        const paperButton = document.querySelector('.js-paper');
        const scissorsButton = document.querySelector('.js-scissors');
        const resetButton = document.querySelector('.js-reset');

        rockButton.addEventListener('click', () => {
            rockPaperScissors('✊');
        });
        paperButton.addEventListener('click', () => {
            rockPaperScissors('✋');
        });
        scissorsButton.addEventListener('click', () => {
            rockPaperScissors('✌️');
        });
        resetButton.addEventListener('click', resetScore);

        document.body.addEventListener('keydown', (event) => {
            if (event.key === 'r' || event.key === 'R'){
                rockButton.focus();
                rockPaperScissors('✊');
            }
            else if (event.key === 'p' || event.key === 'P'){
                paperButton.focus();
                rockPaperScissors('✋');
            }
            else if (event.key === 's' || event.key === 'S'){
                scissorsButton.focus();
                rockPaperScissors('✌️');
            }
            else if (event.key === 'Escape'){
                resetButton.focus();
                resetScore();
            }
        });

    let score = JSON.parse(localStorage.getItem('score')) ||
        {
            wins: 0,
            losses: 0,
            ties: 0
        };
//const {ties} = score;
//console.log(ties);
        /*if (!score){
            const score = {
                wins: 0,
                losses: 0,
                ties: 0
            };
        } */
      updateScore();

        function rockPaperScissors(move){
            const randomNumber = Math.random();
            let computerMove = '';
            let result = '';

            if (randomNumber >= 0 && randomNumber < (1/3)){
                computerMove = "✊";
            }
            else if (randomNumber >= (1/3) && randomNumber < (2/3)) {
                computerMove = "✋";                
            }
            else if (randomNumber >= (2/3) && randomNumber < 1) {
                computerMove = "✌️";                
            }

                if (computerMove === move){
                    result = "It's a tie!😀";
                    score.ties += 1;
                }
                else if ((move === '✊' && computerMove === '✌️') || (move === '✋' && computerMove === '✊') || (move === '✌️' && computerMove === '✋')){
                    result = "Congrats🎉 You win!";
                    score.wins += 1;
                }
                else {
                    result = "You lose!😞";
                    score.losses += 1;
                }

                updateScore();

                document.querySelector('.js-result').innerHTML = result;
                document.querySelector('.js-moves').innerHTML = `You <h1 class="moves-played">${move}</h1> <h1 class="moves-played">${computerMove}</h1> Computer `;

             /*   alert(`You played: ${move}.\n Computer played: ${computerMove}.\n\n ${result}\n\n Wins: ${score.wins} \n Losses: ${score.losses} \n Ties: ${score.ties}`);*/
            
        }

        function updateScore(){
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        function resetScore(){
            const proceed = confirm('Are you sure you want to reset your score?');
            if (proceed){
                
            score.wins = 0; score.ties = 0; score.losses = 0; localStorage.removeItem('score'); 
            updateScore(); 
            document.getElementById('result').innerHTML = ''; document.getElementById('moves').innerHTML = '';
            } else {
                return;
            }
        }
//js object to json string
   // console.log(JSON.stringify(score));

    //json string to js object
    //const scoreJsonString = JSON.stringify(score);
    //console.log(JSON.parse(scoreJsonString));