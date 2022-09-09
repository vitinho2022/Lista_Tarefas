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

    console.log('ddss')

    if(tarefas.length == 0){
        alert("Você está de ferias! \nDescance e volte mais tarde \nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA To surtando")
        return
    }

    
    //percorrer a lista de elementos h5  inserido na pagina
    for (let i = 0; i < tarefas.length; i++){
        //se a tag e selecionada a claas tarefa selecionada deve ser utilizada
        if (tarefas(i).className == 'tarefa-selecionada'){
            tarefas(i).className = 'tarefa-normal' 
            aux=i;
            break;
        }
        //se a linha selecionada for a última 
        if (aux == tarefas.length - l){
            aux= -1;
        }
    }
    tarefa(aux + l).className = "tarefas-selecionadas"; //muda o estilo da propria linha
})

frm.btRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5");

    let aux = -1;

    if (aux == -1) {
        alert("Selecione uma tarefa para remove-la...")
    }
})

    

