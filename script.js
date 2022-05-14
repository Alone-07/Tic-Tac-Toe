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
// c1[1].style.background = 'yellow'
let x = 'x';
let o = 'o';
let current = o;
let X = `<i class="fa-solid fa-xmark"></i> `;
let O = `<i class="fa-regular fa-circle"></i> `;
container.addEventListener('click', Game);
function Game(e) {
    let target = e.target;
    if (target.classList.contains('container')) return;
    if (target.classList.contains('marked')) return;
    target.classList.add('marked');
    if (current == x) {
        target.innerHTML = O;
        target.classList.add('tac');
        Tac();
        return current = o;
    }
    else {
        target.innerHTML = X;
        target.classList.add('tic');
        Tic();
        return current = x;
    }
}
function Tic(e) {
    if (c1[0].classList.contains('tic') && c1[1].classList.contains('tic') && c1[2].classList.contains('tic')) {
        winner();
        return c1.forEach(cl => cl.style.background = 'yellow');
    }
    if (c2[0].classList.contains('tic') && c2[1].classList.contains('tic') && c2[2].classList.contains('tic')) {
        winner();
        return c2.forEach(cl => cl.style.background = 'yellow');
    }
    if (c3[0].classList.contains('tic') && c3[1].classList.contains('tic') && c3[2].classList.contains('tic')) {
        winner();
        return c3.forEach(cl => cl.style.background = 'yellow');
    }
    // Column finished

    if (r1[0].classList.contains('tic') && r1[1].classList.contains('tic') && r1[2].classList.contains('tic')) {
        winner();
        return r1.forEach(cl => cl.style.background = 'yellow');
    }
    if (r2[0].classList.contains('tic') && r2[1].classList.contains('tic') && r2[2].classList.contains('tic')) {
        winner();
        return r2.forEach(cl => cl.style.background = 'yellow');
    }
    if (r3[0].classList.contains('tic') && r3[1].classList.contains('tic') && r3[2].classList.contains('tic')) {
        winner();
        return r3.forEach(cl => cl.style.background = 'yellow');
    }
    // row finished

    if (cr1[0].classList.contains('tic') && cr1[1].classList.contains('tic') && cr1[2].classList.contains('tic')) {
        winner();
        return cr1.forEach(cl => cl.style.background = 'yellow');
    }
    if (cr2[0].classList.contains('tic') && cr2[1].classList.contains('tic') && cr2[2].classList.contains('tic')) {
        winner();
        return cr2.forEach(cl => cl.style.background = 'yellow');
    }
}
function Tac(e) {
    if (c1[0].classList.contains('tac') && c1[1].classList.contains('tac') && c1[2].classList.contains('tac')) {
        winner();
        return c1.forEach(cl => cl.style.background = 'yellow');
    }
    if (c2[0].classList.contains('tac') && c2[1].classList.contains('tac') && c2[2].classList.contains('tac')) {
        winner();
        return c2.forEach(cl => cl.style.background = 'yellow');
    }
    if (c3[0].classList.contains('tac') && c3[1].classList.contains('tac') && c3[2].classList.contains('tac')) {
        winner();
        return c3.forEach(cl => cl.style.background = 'yellow');
    }
    // Column finished

    if (r1[0].classList.contains('tac') && r1[1].classList.contains('tac') && r1[2].classList.contains('tac')) {
        winner();
        return r1.forEach(cl => cl.style.background = 'yellow');
    }
    if (r2[0].classList.contains('tac') && r2[1].classList.contains('tac') && r2[2].classList.contains('tac')) {
        winner();
        return r2.forEach(cl => cl.style.background = 'yellow');
    }
    if (r3[0].classList.contains('tac') && r3[1].classList.contains('tac') && r3[2].classList.contains('tac')) {
        winner();
        return r3.forEach(cl => cl.style.background = 'yellow');
    }
    // row finished

    if (cr1[0].classList.contains('tac') && cr1[1].classList.contains('tac') && cr1[2].classList.contains('tac')) {
        winner();
        return cr1.forEach(cl => cl.style.background = 'yellow');
    }
    if (cr2[0].classList.contains('tac') && cr2[1].classList.contains('tac') && cr2[2].classList.contains('tac')) {
        winner();
        return cr2.forEach(cl => cl.style.background = 'yellow');
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