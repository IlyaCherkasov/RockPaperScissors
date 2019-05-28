const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
function main(){
    rock_div.addEventListener('click', function(){
        game('r');
    })

    paper_div.addEventListener('click', function(){
        game('p');
    })

    scissors_div.addEventListener('click', function(){
        game('s');
    })
}

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)]
}

function game(userChoice){
    const ComputerChoice = getComputerChoice();
    switch (userChoice + ComputerChoice){
        case "rs", "pr", "sp":
            console.log("Вы победили.");
            break;
        case "rp", "ps", "sr":
            console.log("Вы проиграли");
            break
        case "rr", "pp", "ss":
            console.log("ничья");
            break
    }
}

main();