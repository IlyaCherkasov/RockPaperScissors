let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const explain_p = document.getElementById('action-message');
const emote_p = document.getElementById('emote');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
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
            return 'Камень';
        case 's':
            return 'Ножницы';
        case 'p':
            return 'Бумага';
    }
}

function win(user, comp){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = 'Вы победили';
    explain_p.innerHTML = convert(user) + ' - ваш выбор, ' + convert(comp) + ' - выбор компьютера.';
    emote_p.innerHTML = 'ヽ(o^▽^o)ﾉ';
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('green-glow')}, 300);
}

function lose(user, comp){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = 'Вы проиграли';
    explain_p.innerHTML = convert(user) + ' - ваш выбор, ' + convert(comp) + ' - выбор компьютера.';
    emote_p.innerHTML = '(っ˘̩╭╮˘̩)っ';
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('red-glow')}, 300);
}

function draw(user, comp){
    result_div.innerHTML = 'Ничья';
    explain_p.innerHTML = convert(user) + ' - это то, что выбрали все.';
    emote_p.innerHTML = '┐(￣～￣)┌';
    document.getElementById(user).classList.add('yellow-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('yellow-glow')}, 300);
}

function game(userChoice){
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice){
        case 'rs': case 'pr': case 'sp':
            win(userChoice, compChoice);
            break;
        case 'rp': case 'ps': case 'sr':
            lose(userChoice, compChoice);
            break;
        case "rr": case "pp": case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

main();