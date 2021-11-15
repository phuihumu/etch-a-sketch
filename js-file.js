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

container.addEventListener('mouseover', changeColor);

function changeColor(event) {
    let cell = event.target;
    return cell.style.backgroundColor = "grey";
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let number = prompt ("Enter Number of Squares per Side: ");
    
    while (true)
    {
        if (number > 100)
        {
            number = prompt ("Try again, Max is 100");
        }
        else if (number < 0)
        {
            number = prompt ("Negative number. Try again.")
        }
        else
        {
            break;
        }
    }
    
    
});

