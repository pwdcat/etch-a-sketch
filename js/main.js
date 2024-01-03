const container = document.querySelector('#container');

let size = 16;

for(let i = 0; i < size; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    for(let j = 0; j < size; j++){
        const div = document.createElement('div');
        div.classList.add('grid');
        div.addEventListener('mouseenter', changeColor());
        row.appendChild(div);
    }
    container.appendChild(row);
}

function changeColor(){
    
}
