const divTablero = document.querySelector("#tablero");
const input1 = document.querySelector("#opcion-1");
const input2 = document.querySelector("#opcion-2");

let cantCasillas=1;

function generar() {
    
    cantCasillas=0;
    divTablero.innerHTML = "";

    let maxFila = parseInt(input1.value);


    for (let fila = 0; fila < maxFila; fila++) {

        divTablero.innerHTML += `
    <div class="row">
        ${agregarColumna(fila)}
    </div>
    `
    }
}



function agregarColumna(fila) {
    let maxColumna = parseInt(input2.value);
    let columnasGeneradasHtml = "";
    for (let col = 0; col < maxColumna; col++) {
        if (cantCasillas % 2 == 0) {
            columnasGeneradasHtml += `
            <div id="${fila}-${col}" onclick="detectar(this)" class="col casilla casilla-1">
            </div>`
        } else {
            columnasGeneradasHtml += `
            <div id="${fila}-${col}" onclick="detectar(this)" class="col casilla casilla-0">
            </div>`;
        }

        cantCasillas++;
    }
    cantCasillas++;
    return columnasGeneradasHtml;
}




function detectar(elemento) {
    alert("La Posicion es: " + elemento.id);
    console.log(elemento.id);
}
