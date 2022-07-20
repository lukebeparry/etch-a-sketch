let canvasSize = 20;
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
function resetCanvas () {
    canvasSize = prompt("Enter size of canvas");
}