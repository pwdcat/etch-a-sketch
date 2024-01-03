const container = document.querySelector('#container');

createGrid(16);

function makeGrid(){
    let size = document.getElementById("size").value;
    if(size > 100){
        alert("Size too big");
    }
    else{
        while (container.firstChild) {
            container.removeChild(container.lastChild);
          }
        createGrid(size)
    }
}

function createGrid(size){
    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
        let px = 500/size;
        row.classList.add('row');
        row.style.height = `${px}px`;
        for(let j = 0; j < size; j++){
            const div = document.createElement('div');
            div.classList.add('grid');
            div.style.height = `${px}px`;
            div.style.width = `${px}px`;
            div.addEventListener('mouseenter', ()=>{
                div.style.backgroundColor = 'black';
            });
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}



