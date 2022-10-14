/* const lista = [];

const item4 = lista[4];
lista[4] = "Arroz"; */

/* const meses = ["jan", "fev", "mar"];

meses[3] = "abr";

// meses = ["jan", "fev", "mar", "abr"];

console.log(meses[0]); */

/* const produtos = ["Arroz", "Feijão", "Cenoura", "Água", "Macarrão", "Tomate"];

function printItem(indice) {
  console.log(`Item #${indice}:\t${produtos[indice]}`);
  const proxIndice = indice + 1;
  const ultimoIndice = produtos.length - 1;
  if (proxIndice <= ultimoIndice)
    printItem(proxIndice);
}

printItem(0); */

/* // Criei uma lista vazia
let tasksList = [];

// Acesso os elementos do DOM
const ipNewTask = document.getElementById("inputNewTask");
const uTaskList = document.getElementById("ulTaskList");

function addNewTask() {
  // Pega o que tem no input
  const newTask = ipNewTask.value;
  // Pega a quantidade de elementos da lista
  const nextIndex = tasksList.length;
  // Add a nova tarefa na lista
  tasksList[nextIndex] = newTask;
  // Renderizei a lista no elemento (pre)
  uTaskList.innerHTML += `<li id='liTask${nextIndex}' >
        ${tasksList[nextIndex]}
        <button onclick='removeTask(${nextIndex})'>x</button>
        </li>`;
  // Altera o value do input p/ null
  ipNewTask.value = null;
}

function removeTask(index) {
  delete tasksList[index];
  const liTask = document.getElementById(`liTask${index}`);
  liTask.remove();
} */

// num1 = num1 + num2;
// num1 += num2;

const pLog = document.getElementById("preLog");
const produtos = ["Arroz", "Feijão", "Cenoura", "Água", "Macarrão", "Tomate"]; 
// Pop
// Remove o último elemento do array
let ultimoElemento = produtos.pop();
pLog.innerText += ultimoElemento + "\n";
pLog.innerText += produtos + "\n";

ultimoElemento = produtos.pop();
pLog.innerText += ultimoElemento + "\n";
pLog.innerText += produtos + "\n";

ultimoElemento = produtos.pop();
pLog.innerText += ultimoElemento + "\n";
pLog.innerText += produtos + "\n";

// Push
// Add um novo elemento ao final da lista
novaQuantidade = produtos.push("Cebola");
pLog.innerText += "Nova Quant.:\t" + novaQuantidade + "\n";
pLog.innerText += produtos + "\n";

function addNewTask() {
  const newTask = ipNewTask.value;
  const nextIndex = tasksList.push(newTask);
  uTaskList.innerHTML += `<li id='liTask${nextIndex}' >
        ${tasksList[nextIndex]}
        <button onclick='removeTask(${nextIndex})'>x</button>
        </li>`;
  ipNewTask.value = null;
}