import { c1, c2, c3, r1, r2, r3, cr1, cr2, winner } from './script.js'
export default function Tac(e) {
    let column1 = Array.from(c1).every(e => {
        return e.classList.contains('tac')
    })
    let column2 = Array.from(c2).every(e => {
        return e.classList.contains('tac')
    })
    let column3 = Array.from(c3).every(e => {
        return e.classList.contains('tac')
    })
    let row1 = Array.from(r1).every(e => {
        return e.classList.contains('tac')
    })
    let row2 = Array.from(r2).every(e => {
        return e.classList.contains('tac')
    })
    let row3 = Array.from(r3).every(e => {
        return e.classList.contains('tac')
    })
    let center1 = Array.from(cr1).every(e => {
        return e.classList.contains('tac')
    })
    let center2 = Array.from(cr2).every(e => {
        return e.classList.contains('tac')
    })
    if (column1) {
        winner();
        c1.forEach(cl => cl.style.background = 'yellow');
        return false;

    }
    if (column2) {
        winner();
        c2.forEach(cl => cl.style.background = 'yellow');
        return false;
    }
    if (column3) {
        winner();
        c3.forEach(cl => cl.style.background = 'yellow');
        return false;

    }
    // Column finished

    if (row1) {
        winner();
        r1.forEach(cl => cl.style.background = 'yellow');
        return false;

    }
    if (row2) {
        winner();
        r2.forEach(cl => cl.style.background = 'yellow');
        return false;

    }
    if (row3) {
        winner();
        r3.forEach(cl => cl.style.background = 'yellow');
        return false;

    }
    // row finished

    if (center1) {
        winner();
        cr1.forEach(cl => cl.style.background = 'yellow');
        return false;
    }
    if (center2) {
        winner();
        cr2.forEach(cl => cl.style.background = 'yellow');
        return false;
    }
    return true;
}