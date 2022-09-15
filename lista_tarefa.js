//Obeter os elementos da pagina HTML
const frm = document.querySelector("form");
const dvQuadro = document.getElementById("divQuadro");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const tarefa = frm.intarefa.value;

    const h5 = document.createElement("h5");
    const texto = document.createTextNode(tarefa);
    h5.appendChild(texto); //define que o texto sera filho de h5
    dvQuadro.appendChild(h5); //define que h5 sera filho de dvQuadro 

    frm.intarefa.value = "";
    frm.intarefa.focus();
})

frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5");

    // console.log('ddss')

    if(tarefas.length == 0){
        alert("Você est´[a sem tarefas para selecionar")
        return
    }

    let aux = -1;
    
    //percorrer a lista de elementos h5  inserido na pagina
    for (let i = 0; i < tarefas.length; i++){
        //se a tag e selecionada a claas tarefa selecionada deve ser utilizada
        if (tarefas[i].className == 'tarefa-selecionada'){
            tarefas[i].className == 'tarefa-normal' 
            aux = i;
            break;
        }

        //se a linha selecionada for a última 
        if(aux == tarefas.length -1){
            aux = -1;
        }
    }
    tarefas[aux + 1].className = "tarefa-selecionada"; //muda o estilo da propria linha
})

frm.btRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5");

    let aux = -1;

    tarefas.forEach((tarefas, i) => {
        if (tarefas.className == 'tarefa-selecionada'){
            aux = i;
        }
    })

    if (aux == -1) {
        alert("Selecione uma tarefa para removê-lá...")
        return;
    }

    //solicitar a configuração para a remoção
    if(confirm(`Confira a exclusão de "${tarefas[aux].innerText}?"`)){
        dvQuadro.removeChild(tarefas[aux])
    }
})

frm.btGravar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")
    if(tarefas.length == 0){
        alert("Não a tarfa a serem salvas")
    }

    let dados = "" //string para "acumular" os dados

    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";";
    })

    //gravar no localStorage
    localStorage.setItem("tarefaDia", dados.slice(0, -1));
    
    if  (localStorage.getItem("tarefaDia")){
        alert("Ok, as tarefas foram salvas")
    }
})

window.addEventListener("load", () => {
    if (localStorage.getItem("tarefaDia")){
        const dados = localStorage.getItem("tarefaDia"). split(";");

        dados.forEach(dados => {
            const h5 = document.createElement("h5");
            const texto = document.createElement(dado)
            h5.appendChild(texto);
            dvQuadro.appendChild(h5);
        })
    }
})