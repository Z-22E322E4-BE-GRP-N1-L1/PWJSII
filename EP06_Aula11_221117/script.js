const funcNome = document.getElementById("funcNome");
const funcSalario = document.getElementById("funcSalario");
const btnSalvar = document.getElementById("btnSalvar");
const tableBody = document.getElementById("tableBody");

const funcionarios = [];

// funcao que pega os dados do form e insere o func no array
function addDataArray(){
  let nome = funcNome.value;
  let salario = funcSalario.value;
  // console.log(typeof salario);
  // const func = {nome: nome, salario: salario};
  // const funcionario = {name: nome, salary: salario};
  const funcionario = {nome, salario}; // {nome: nome, salario: salario}
  funcionarios.push(funcionario);
}

// funcao para limpar o formulario
function cleanForm() {
  funcNome.value = '';
  funcSalario.value = '';
}

// funcao que retorna um tr com os dados de um func
/* function createTableRow(funcionario){
  const tr = document.createElement("tr");
  // Trata do td do nome
  const tdNome = document.createElement("td");
  tdNome.innerText = funcionario.nome;
  tr.appendChild(tdNome);
  // Trata do td de salário
  const tdSalario = document.createElement("td");
  tdSalario.innerText = funcionario.salario;
  tr.appendChild(tdSalario);
  
  return tr;
}

let tableRow = createTableRow({nome: "Alan"}); */
function createTableRow(funcionario){
  let stringTr = "<tr>";
  stringTr += `<td>${funcionario.nome}</td>`;
  stringTr += `<td>${funcionario.salario}</td>`;
  stringTr += "</tr>";
  return stringTr;
}

// funcao que roda a lista de func e atualiza a tabela.
// tableBody
function updateTable() {
  /* for (let i = 0; i < funcionarios.length; i++){
    
  } */
  tableBody.innerHTML = '';
  funcionarios
    .sort((funcA, funcB) => {
      return funcA.salario - funcB.salario;
    })
    .forEach(func => {
    tableBody.innerHTML += createTableRow(func);
  })
}

btnSalvar.addEventListener('click', () => {
  addDataArray();
  cleanForm();
  updateTable();
})

/* let num = 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;

console.log(num); */