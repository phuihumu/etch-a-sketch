const container = document.querySelector('.container');

function createGrid(row, column) {
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-cols', column);
    for (let i = 0; i < (row * column); i++)
    {
        let squareDiv = document.createElement('div');
        squareDiv.style.width = '(500 / column)px';
        squareDiv.style.height = '(500 / row)px';
        squareDiv.classList.add('square');
        container.appendChild(squareDiv);

    }
}

createGrid(16, 16);

//const box = document.querySelectorAll('.squareDiv');
container.addEventListener('mouseenter', changeColor);
/*
container.getElementsByClassName('square').addEventListener("mouseover", function() {
    container.getElementsByClassName('square').style.color = "grey";
})*/

function changeColor(e) {
    let square = e.target;
    square.style.backgroundColor = "grey";
}

