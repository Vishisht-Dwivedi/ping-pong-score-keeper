let maxScore = 0;
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const input = document.querySelector('#num');
const buttons = document.querySelectorAll('button');

input.addEventListener('input', (e) => {
    if (input.value === '') {
        maxScore = 0;
    } else {
        maxScore = Number(input.value);
    }
});
for (let button of buttons) {
    button.addEventListener('click', (e) => {
        let p1 = Number(score1.innerText);
        let p2 = Number(score2.innerText);
        if (p1 < maxScore && p2 < maxScore) {
            if (e.target.id === 'player1') {
                if (p1 < maxScore - 1) {
                    score1.innerText = p1 + 1;
                } else if (p1 === maxScore - 1) {
                    score1.innerText = p1 + 1;
                    score1.style.color = 'green';
                    score2.style.color = 'red';
                    buttons[0].style.opacity = '0.5';
                    buttons[1].style.opacity = '0.5'
                }
            } else if (e.target.id === 'player2') {
                if (p2 < maxScore - 1) {
                    score2.innerText = p2 + 1;
                } else if (p2 === maxScore - 1) {
                    score2.innerText = p2 + 1;
                    score2.style.color = 'green';
                    score1.style.color = 'red';
                    buttons[0].style.opacity = '0.5';
                    buttons[1].style.opacity = '0.5';
                }
            }
        } else if (e.target.id === 'reset') {
            maxScore = 0;
            input.value = 0;
            score1.innerText = 0;
            score2.innerText = 0;
            score1.style.color = 'black';
            score2.style.color = 'black';
            buttons[0].style.opacity = '1';
            buttons[1].style.opacity = '1';
        }
    });
}