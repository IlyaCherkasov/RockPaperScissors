let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
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

function convert(choice){
    switch(choice){
        case 'r':
            return "Камень";
        case 's':
            return "Ножницы";
        case 'p':
            return "Бумага";
    }
}

function win(user, comp){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convert(user) + " - ваш выбор, " + convert(comp) + " - выбор компьютера. Вы победили!!! Поздравляю!";
    
}

function lose(user, comp){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = convert(user) + " - ваш выбор, " + convert(comp) + " - выбор компьютера. Вы проиграли...";
}

function game(userChoice){
    const compChoice = getComputerChoice();
    console.log(userChoice, compChoice);
    switch (userChoice + compChoice){
        case 'rs': case 'pr': case 'sp':
            win(userChoice, compChoice);
            break;
        case 'rp': case 'ps': case 'sr':
            lose(userChoice, compChoice);
            break;
        case "rr": case "pp": case "ss":
            result_div.innerHTML = convert(userChoice) + " - это то, что выбрали все. Ничья!";
            break;
    }
}

main();