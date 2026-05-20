//Selecionando os Elementos HTML
const input = document.getElementById("taskInput")
const botao = document.getElementById("addTaskBtn")
const lista = document.getElementById("taskList")
const mensagem = document.getElementById("emptyMessage")

//Funções
function atualizaMensagem(){
    if(lista.children.length === 0){
        mensagem.style.display = "block"
    }else{
        mensagem.style.display = "none"
    }
}

function criaTarefa (){
    const tarefa = input.value

    if(tarefa == "" || tarefa == " "){
        alert("Tarefa Inválida. Digite Novamente")
        return
    }

    const li = document.createElement("li")
    const span = document.createElement("span")
    span.textContent = tarefa

    const botoes = document.createElement("div")
    botoes.classList.add("actions")

    const botaoConcluir = document.createElement("button")
    let valorPadrao = "Ok"
    botaoConcluir.textContent = valorPadrao
    botaoConcluir.classList.add("complete-btn")

    const botaoDeletar = document.createElement("button")
    botaoDeletar.textContent = "x"
    botaoDeletar.classList.add("delete-btn")

    botaoConcluir.addEventListener("click", ()=>{
        li.classList.toggle("completed")
        if(li.classList.value == "completed"){
            botaoConcluir.textContent = "Desmarcar"
        }else{
            botaoConcluir.textContent = valorPadrao
        }
    })

    botaoDeletar.addEventListener("click", ()=>{
        li.remove()
    })

    botoes.append(botaoConcluir)
    botoes.append(botaoDeletar)

    li.append(span)
    li.append(botoes)

    lista.append(li)
    input.value = ""
    atualizaMensagem()
}


//Evento
botao.addEventListener("click", criaTarefa)

//Ao carregar a página
atualizaMensagem()