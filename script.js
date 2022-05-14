import Tac from './tac.js';
import Tic from './tic.js';
const box = document.querySelectorAll('.box');
const container = document.querySelector('.container');
const c1 = document.querySelectorAll('[data-column1]');
const c2 = document.querySelectorAll('[data-column2]');
const c3 = document.querySelectorAll('[data-column3]');
const r1 = document.querySelectorAll('[data-row1]');
const r2 = document.querySelectorAll('[data-row2]');
const r3 = document.querySelectorAll('[data-row3]');
const cr1 = document.querySelectorAll('[data-cross1]');
const cr2 = document.querySelectorAll('[data-cross2]');
const wins = document.querySelector('.winner');
const restart = document.querySelector('.restart');
const modal = document.querySelector('.modal')
const h2Win = document.querySelector('.win');
const h2draw = document.querySelector('.draw');
export { c1, c2, c3, r1, r2, r3, cr1, cr2, winner, Drawers };
let f = false;
let F = false;
// c1[1].style.background = 'yellow'
let x = 'x';
let o = 'o';
let current = o;
let X = `<i class="fa-solid fa-xmark"></i> `;
let O = `<i class="fa-regular fa-circle"></i> `;
let Drawers = true;
container.addEventListener('click', Game);

function Game(e) {
    let target = e.target;
    if (target.classList.contains('container')) return;
    if (target.classList.contains('marked')) return;
    target.classList.add('marked');
    const arrBox = Array.from(box).every(e => {
        return e.classList.contains('marked');
    });
    if (current == x) {
        target.innerHTML = O;
        target.classList.add('tac');
        console.log("Tac: " + arrBox + ' ' + Tac())
        if (arrBox && Tac) {
            draw()
            return current = o;
        }
        Tac();
        return current = o;
    }
    else {
        target.innerHTML = X;
        target.classList.add('tic');
        console.log('Tic: ' + arrBox + ' ' + Tic())
        if (arrBox && Tic) {
            draw()
            return current = x;
        }
        Tic();
        return current = x;

    }

}
function winner(e) {
    let win;
    if (current == o) {
        win = x;
    }
    else {
        win = o;
    }
    modal.style.display = 'flex';
    h2draw.style.display = 'none';
    h2Win.style.display = 'block';
    return wins.innerText = win;
}
restart.addEventListener('click', rstrt);
function rstrt(e) {
    modal.style.display = 'none';
    box.forEach(bo => {
        bo.innerText = '';
        bo.classList.remove('tic');
        bo.classList.remove('tac');
        bo.style.background = 'white';
        return bo.classList.remove('marked');
    })
}
function draw(e) {
    let draw = "Draw"
    modal.style.display = 'flex';
    h2Win.style.display = 'none';
    h2draw.style.display = 'block';
    return h2draw.innerText = draw;
}

