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
                if(!div.style.backgroundColor){
                    div.style.backgroundColor = randomRGB(div.style.backgroundColor);
                }
                else{
                    div.style.backgroundColor = darkening(div.style.backgroundColor);
                }
            });
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

function randomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    return `rgb(${red}, ${green}, ${blue})`;

}

function darkening(backgroundColor){
    const rgbValues = backgroundColor.match(/\d+/g);

    let red = parseInt(rgbValues[0], 10) * 0.9;
    let green = parseInt(rgbValues[1], 10) * 0.9;
    let blue = parseInt(rgbValues[2], 10) * 0.9;

    return `rgb(${red}, ${green}, ${blue})`
}

document.getElementById("footer").textContent = "Copyright © " + new Date().getFullYear() + " pwdcat";


