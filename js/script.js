const bloco = document.querySelector('#bloco')
const tarefa = document.querySelector('#novaTarefa')
const add = document.querySelector('#add')
add.addEventListener('click', addLista)
const lixeira = document.querySelector('trash')
const formatacao = document.getElementsByClassName('formatacao')
const formatar = document.querySelectorAll('.formatar')
const iconDetalhes = document.getElementsByName('spreadsheet')

const msg = document.querySelector('#menssagem')


let listaAberta = '' // Aqui ele puxa o identificador da lista que foi aberta

        function abrirMenu(icon){
            
            let containerBtns = icon.parentElement
            let containerLista = containerBtns.parentElement
            let idLista = parseInt(containerLista.id)
        
            let detalhes = document.getElementById('detalhes')
            let janela = document.querySelector('#janela')
            
            console.log(idLista)
            document.querySelector('#menssagem').value = listas[idLista].menssagem;

            console.log(listas[idLista], containerLista)
            console.log(listas[idLista].menssagem)

            detalhes.style.display = 'block'
            detalhes.style.animation = 'menu'
            detalhes.style.animationDuration = '.7s'
            listaAberta = idLista;          

        }

        function fecharMenu(){
            let detalhes = document.getElementById('detalhes')
            detalhes.style.animation = 'menuoff'
            detalhes.style.animationDuration = '.7s'


            setTimeout(()=>{
                detalhes.style.display = 'none'
                
            }, 400)
          
            listaAberta = ''
        }

        function salvar(){
            
            if(listaAberta >= 0){
                listas[listaAberta].menssagem = document.querySelector('#menssagem').value   
            }
        }
// BTN de adicionar - Efeito do Box Icon
    document.getElementById('novaTarefa').addEventListener("mouseover", ()=>{ 

        document.getElementById('iconAdd').classList.toggle('bx-flashing')
    })
    document.getElementById('novaTarefa').addEventListener("mouseout", ()=>{ 

        document.getElementById('iconAdd').classList.toggle('bx-flashing')
    })


    let listaSeguinte = 0;
    let listas = [ ]

function addLista(){
    let nome = tarefa.value
    
 
    if(nome == ''){
        return false
    }

    listas.push({identificador: listaSeguinte, titulo: nome, checked: false, menssagem: '', posicao: `item${listaSeguinte}`, corpoHTML: `<div id="${listaSeguinte}" class="lista ${listaSeguinte}">
        <input class="check" type="checkbox" name="" id="check${listaSeguinte}" onclick="verificarChecked(this)">
        <label for="check${listaSeguinte}">
            <box-icon class="box-flex" name='checkbox' color='#636e72'></box-icon>
            <box-icon class="box-none" name='checkbox' type='solid' color='#636e72'></box-icon>
        </label>
        <p>${nome}</p>
        <div class="btns">
            <box-icon name='spreadsheet' type='solid' color='#636e72' onclick="abrirMenu(this)"></box-icon>
            <box-icon name='trash' color='#636e72' onclick="remover(this)"></box-icon>
        </div>
        </div> ` })
    
        bloco.innerHTML += listas[listaSeguinte].corpoHTML;

    listaSeguinte++

    console.log(listaSeguinte)
    console.log(listas)
}

function remover(lixeira){

    console.log(listas)
    let btns = lixeira.parentElement
    let lista = btns.parentElement
    let index = parseInt(lista.id)
    console.log(index)
    listas.forEach((objeto, posicao)=>{
            if(objeto.identificador == index){
                listas.splice(posicao, 1)
                lista.style.animation = 'remove'
                lista.style.animationDuration = '0.8s'
                setTimeout(() => {
                        
                    bloco.removeChild(lista)

                }, 700);
                console.log(listas)
                qtdLista--
            }
    })
}


function verificarChecked(input){
    let divLista = input.parentElement
    let label = divLista.children[1]
    let trueChecked = label.children[0]
    let falseChecked = label.children[1]

    if(input.checked){
        divLista.style.backgroundColor ='#55efc4';

        trueChecked.classList.toggle('box-none')
        trueChecked.classList.toggle('box-flex')
        falseChecked.classList.toggle('box-none')
        falseChecked.classList.toggle('box-flex')
    }else{
        divLista.style.backgroundColor ='#f1f1f191';
        trueChecked.classList.toggle('box-none')
        trueChecked.classList.toggle('box-flex')
        falseChecked.classList.toggle('box-none')
        falseChecked.classList.toggle('box-flex')
    }

}
 

