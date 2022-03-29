const bloco = document.querySelector('#bloco')
const tarefa = document.querySelector('#novaTarefa')
const add = document.querySelector('#add')
add.addEventListener('click', addLista)

let qtdLista = 0;
let listas = [

]


function addLista(event){
    let nome = tarefa.value
    let id = `lista${qtdLista}`
    console.log(nome)
    console.log(id)

    listas.push({identificador: id, titulo: nome, checked: false, menssagem: '', corpoHTML: `<div class="lista">
    <input type="checkbox" name="" id="${id}">
    <label for="${id}">
        <!-- <box-icon name='checkbox' color='#636e72' ></box-icon> -->
        <box-icon name='check-square' type='solid' color='#636e72' ></box-icon>
    </label>
    <p>Afazeres de casa</p>
    <div class="btns">
        <box-icon name='spreadsheet' type='solid' color='#636e72' ></box-icon>
        <box-icon name='trash' color='#636e72' ></box-icon>
    </div>
</div> ` })

    bloco.innerHTML += ` 
    <div class="lista">
    <input type="checkbox" name="" id="${id}">
    <label for="${id}">
        <!-- <box-icon name='checkbox' color='#636e72' ></box-icon> -->
        <box-icon name='check-square' type='solid' color='#636e72' ></box-icon>
    </label>
    <p>${nome}</p>
    <div class="btns">
        <box-icon name='spreadsheet' type='solid' color='#636e72' ></box-icon>
        <box-icon name='trash' color='#636e72' onclick="remover(this)"></box-icon>
    </div>
</div> `


    console.log(listas)
    qtdLista++


    console.log('Opa '+ o)
}


function remover(lixeira){

    let btns = lixeira.parentElement
    let lista = btns.parentElement

    bloco.removeChild(lista)
    console.log(lista)

    
}
