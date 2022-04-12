const bloco = document.querySelector('#bloco')
const tarefa = document.querySelector('#novaTarefa')
const add = document.querySelector('#add')
add.addEventListener('click', addLista)
const lixeira = document.querySelector('trash')
const formatacao = document.getElementsByClassName('formatacao')
const formatar = document.querySelectorAll('.formatar')
const iconDetalhes = document.getElementsByName('spreadsheet')

const msg = document.querySelector('#menssagem')



// BTNS de detalhes
// formatar.forEach((icones)=>{

//     console.log(icones)
//     icones.addEventListener('click', (icone)=>{
//         let elemento = icone.target
//         elemento.setAttribute('animation', 'tada')
//         console.log('foi')
//     })

//     icones.addEventListener('click', (icone)=>{
//         let elemento = icone.target
//         elemento.removeAttribute('animation')
//         console.log('foi')
//     })
// })

let listaAberta = ''

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

            // console.log(formatar)
            // formatar.forEach((icones)=>{

            //     console.log(icones)
            //     icones.addEventListener('click', (icone)=>{
            //         let elemento = icone.target
            //         elemento.setAttribute('animation', 'tada')
            //         console.log('foi')
            //     })
            
            //     icones.addEventListener('click', (icone)=>{
            //         let elemento = icone.target
            //         elemento.removeAttribute('animation')
            //         console.log('foi')
            //     })
            // })

            

        }

        function fecharMenu(){
            let detalhes = document.getElementById('detalhes')
            // let msg = document.querySelector('#menssagem')
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
// BTN de adicionar
    document.getElementById('novaTarefa').addEventListener("mouseover", ()=>{ 

        document.getElementById('iconAdd').classList.toggle('bx-flashing')

    })
    document.getElementById('novaTarefa').addEventListener("mouseout", ()=>{ 

        document.getElementById('iconAdd').classList.toggle('bx-flashing')
    })



    // qtdLista

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

    // console.log(listas)
    listaSeguinte++

    console.log(listaSeguinte)
    console.log(listas)
    // console.log('Opa '+ o)
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

// addDetalhes

// iconDetalhes.addEventListener('click', (detalhes)=>{
//     detalhes.forEach((elemento)=>{


//             console.log(elemento)
//         })
//     })



// function verificarCheck(element){

//     // document.querySelectorAll('.check').forEach((elemento)=>{

//     //     console.log(elemento.name)
//     // })

//     // element.name = 'check-square'
//     // console.log(element)

// }

function verificarChecked(input){
    // let div = document.getElementById('.a')
    // div.style.borderBottomColor 
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

    // for (let index = 0; index < 2; index++) {
    //     // const element = array[index];

    //     let iconeBox = label.children[index]
        
        
    // }
   

    // console.log(label.children)

}
 

