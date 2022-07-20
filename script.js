for (let i=0; i<16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    document.querySelector('.container').appendChild(cell);
}

const draw = document.querySelectorAll('div');
draw.addEventListener('mouseover', () => {
    draw.classList.add('highlight');
});