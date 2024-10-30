const cartelaDiv = document.getElementById('cartela')

const numerosSorteadosDiv = document.getElementById('numeroSorteados');

let numerosSorteados = []

const totalNumeros = 75;


document.getElementById('renderizar').addEventListener('click', confirmarRenderizacao);
document.getElementById('sortear').addEventListener('click', sortearNumero)

function confirmarRenderizacao(){
    const confirmar = confirm('Você tem certeza que deseja uma nova cartela?');
    
    if(confirmar){
        renderizarCartela();
    }
}

function renderizarCartela(){
    cartelaDiv.innerHTML = '';  
    const cartela = [];


    while (cartela.length < 25) {
        const numero = Math.floor(Math.random() * totalNumeros) + 1;
        if(!cartela.includes(numero)){
            cartela.push(numero)
        }
    }

    cartela.sort((a, b) => a - b)

    cartela.forEach(numero => {
        const div = document.createElement('div');
        div.className = 'numero';
        div.textContent = numero;

        div.addEventListener('click', () => {
            div.classList.toggle('clicado');
        })

        cartelaDiv.appendChild(div)
    });
}

function sortearNumero(){
    let numeroSorteado;

    do {
        numeroSorteado = Math.floor(Math.random() * totalNumeros) + 1 -+-
        } while (numeroSorteado.includes(numeroSorteado));

    
}