alert('two for win, three for jackpot')


const randomone = document.getElementById('one');
const randomtwo = document.getElementById('two');
const randomthree = document.getElementById('three');
const btn = document.getElementById('btn');


function numberone() {
    randomone.value = (Math.floor(Math.random() * 10));
}
function numbertwo() {
    randomtwo.value = (Math.floor(Math.random() * 10));
}
function numberthree() {
    randomthree.value = (Math.floor(Math.random() * 10));
}


const jackpot = document.getElementsByClassName('jackpot')[0];
const win = document.getElementsByClassName('win')[0];
const none = document.getElementsByClassName('none')[0];

jackpot.style.display = 'none';
win.style.display = 'none';
none.style.display = 'none';

function value() {
    const randomonetext = randomone.value;
    const randomtwotext = randomtwo.value;
    const randomthreetext = randomthree.value;

    jackpot.style.display = 'none';
    win.style.display = 'none';
    none.style.display = 'none';

    if (randomonetext === randomtwotext && randomtwotext === randomthreetext) {
        return jackpot.style.display = 'block';
    }
    else if (randomonetext === randomtwotext || randomtwotext === randomthreetext || randomonetext === randomthreetext) {
        return win.style.display = 'block';
    }
    else {
        return none.style.display = 'block';
    }
}

btn.addEventListener('click', function () {
    numberone();
    numbertwo();
    numberthree();
    value();
})


