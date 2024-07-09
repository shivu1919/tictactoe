document.addEventListener('DOMContentLoaded',() => {
    const board=document.getElementById('board');

    //creating cells in below section
    for(i=0;i<9;i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id=i;
        board.appendChild(cell);
    }
    
});
