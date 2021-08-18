function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle blue button click by setting function name

const blueButton = document.getElementById('make-blue-button');
// just set the name of function
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// handle event using anonymus function
const greenButton = document.getElementById('Make-green-button');
// anonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// handle by using Eventlistener
const goldenRodButton = document.getElementById('Make-goldenrod-button');
goldenRodButton.addEventListener('click', makeGoldenRod)

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}


// add eventlistener 
const hotPinkButton = document.getElementById('Make-hotpink-button');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})


//  direct short cut
document.getElementById('Make-indigo-button').addEventListener(
    'click', function () {
        document.body.style.backgroundColor = 'indigo';
    }
)