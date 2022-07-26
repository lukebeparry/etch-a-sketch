function resetCanvas () {
    const reset = document.querySelectorAll('.cell');
    reset.forEach((reset) => {
        reset.classList.remove('highlight');
        document.querySelector('.container').removeChild(reset);
    });
    canvasSize = prompt("Enter size of canvas (1-100)");
    if (canvasSize <= 0 || canvasSize > 100) {
        alert("Invalid number. Enter a number between 1 and 100")
    } else {
        for (let i=0; i<(canvasSize**2); i++) { // adds a div to the grid
            const cell = document.createElement('div');
            cell.classList.add('cell');
            document.querySelector('.container').appendChild(cell);
            document.documentElement.style.setProperty(`--canvas`, `${canvasSize}`);
        }
    }
    const draw = document.querySelectorAll('.cell'); 
    draw.forEach((draw) => { //applies function to each node in list
    draw.addEventListener('mouseover', () => {
        draw.classList.add('highlight'); //adds highlight class to existing div
    });
});
}

let canvasSize = 16;
document.documentElement.style.setProperty(`--canvas`, `${canvasSize}`);
for (let i=0; i<(canvasSize**2); i++) { // adds a div to the grid
    const cell = document.createElement('div');
    cell.classList.add('cell');
    document.querySelector('.container').appendChild(cell);
}
const draw = document.querySelectorAll('.cell'); 
draw.forEach((draw) => { //applies function to each node in list
    draw.addEventListener('mouseover', () => {
        draw.classList.add('highlight'); //adds highlight class to existing div
    });
});
const reset = document.querySelector('.btn');
reset.addEventListener('click', resetCanvas);