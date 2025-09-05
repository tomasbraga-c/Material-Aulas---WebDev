// adicionar no final algo
function executarPush() {
  const array = ['🍎', '🍌'];
  array.push("🍇");
  const resultado = array;
  document.getElementById('resultado-push').textContent = resultado;
}
//remove o ultimo elemento do array
function executarPop() {
  const array = ['🍎', '🍌', '🍇'];
  array.pop(0);
  const resultado = array;
  document.getElementById('resultado-pop').textContent = resultado;
}

//remove o 1º
function executarShift() {
  const array = ['🍎', '🍌', '🍇'];
  array.shift();
  const resultado = array;
  document.getElementById('resultado-shift').textContent = resultado;
}

//adiciona na 1º posicao
function executarUnshift() {
  const array = ['🍌', '🍇'];
  array.unshift("🍓");
  const resultado = array;
  document.getElementById('resultado-unshift').textContent = resultado;
}

//verificar se tem algo na lista (true or false)
function executarIncludes() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.includes("🥝");
  document.getElementById('resultado-includes').textContent = resultado;
}

//inverte a lista
function executarReverse() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.reverse();
  document.getElementById('resultado-reverse').textContent = resultado;
}

//coloca em ordem crescente se colocar reverse fica em ordem decresente
function executarSort() {
  const array = [3, 1, 4, 2, 11];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];

  const resultado = array.sort((a,b) => b - a);
  document.getElementById('resultado-sort').textContent = resultado;
  const resultado2 = array2.sort().reverse();
  document.getElementById('resultado-sort2').textContent = resultado2;
}

function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓'];
  const resultado = array;
  document.getElementById('resultado-slice').textContent = resultado;
}

function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-splice').textContent = resultado;
}


function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-indexof').textContent = resultado;
}

function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-join').textContent = resultado;
}

/* Loops de array */

//passa por cada array e se transforma nele, fazendo oq vc pede
function executarForEach() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.forEach(pegaItem => console.log(pegaItem));
  document.getElementById('resultado-foreach').textContent = resultado;
}

//ele mapeia o array modificando ele
function executarMap() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.map(pegaItem => `✅ ${pegaItem}`);
  document.getElementById('resultado-map').textContent = resultado;
}

//modifica o array repitindo as mesmas coisa com todos os itens netflix
 function executarMapHTML() {
    const dispositivos = ['🎮', '🕹️', '💻'];
    const resultado = dispositivos.map((pegaItem, index) => {
      return`<h1> Item ${index + 1} em promoção! </h1>
      <p> ${pegaItem}</p>`
    });
    document.getElementById('resultado-map-html').innerHTML = resultado.join('<br>');
  }

  //flitra as coisas
function executarFilter() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.filter(pegaItem => pegaItem == "🍎");
  document.getElementById('resultado-filter').textContent = resultado;
}

//retorna alque q pede
function executarFind() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.find (pegaItem => pegaItem == "🍇");
  document.getElementById('resultado-find').textContent = resultado;
}

function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = 'Resultado da operação findIndex';
  document.getElementById('resultado-findIndex').textContent = resultado;
}

//ele ira somar os itens
function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado = array.reduce((totalAcumulado, valorAtual) => {
    return totalAcumulado + valorAtual
  },0);
  document.getElementById('resultado-reduce').textContent = resultado;
}

// se é maior ou menor doq especificar
function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = 'Resultado da operação every';
  document.getElementById('resultado-every').textContent = resultado;
}


function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = 'Resultado da operação some';
  document.getElementById('resultado-some').textContent = resultado;
}

/* Encadeamento */

function executarEncadeamento() {
  const jogos = ['Zelda', 'Mario', 'Elden Ring', 'Fortnite', 'Minecraft'];
  const resultado = 'Resultado da operação encadeada';
  document.getElementById("resultado-encadeamento").textContent = resultado.join(', ') || 'Nenhum jogo encontrado';
}



// //Declara array
// let nomes = ["Vitor", 1 , "Fulano"];
// console.log(nomes[2])
// //atualizar o valor de um item do array
// nomes[2] = "Neymar"

// // como saber o tamanho de um array
// nomes.length

//arrow function
// const ordenar = a => a - 2

// function ordenar (a){
//   return a - 2
// }