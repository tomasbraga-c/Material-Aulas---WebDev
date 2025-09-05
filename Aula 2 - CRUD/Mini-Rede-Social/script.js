// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];
window.onload = function(){
    mostrarPost();

    document.querySelector("#postForm").addEventListener("submit", addPost)
}

//CREATE
function addPost(infosDoEvento){
    infosDoEvento.preventDefault();
    //pegando oque foi preenchido no formulario
    const textoPost = document.querySelector("#postText").value;
    const categoriaPost = document.querySelector("#postCategory").value;
    const imagemPost = document.querySelector("#postImage").value;

    //criando o novo objeto
    const novoPost = {
        text : textoPost,
        category : categoriaPost,
        image: imagemPost,
        date: new Date().toLocaleString()
    }

    posts.unshift(novoPost)

    mostrarPost()
}
//READ
function mostrarPost(){
    //Pegando o elemnto onde os tweets serão inseridos
    const listaPosts = document.querySelector("#postList")
    listaPosts.innerHTML = ""
    //passando pelo array criando um tweet para cada um 
    posts.forEach(pegaItem => {
        const cardPost = document.createElement("div")
        cardPost.classList.add("card")
        //adicionando os tweets no html
        cardPost.innerHTML = `
            <h2>${pegaItem.text}</h2>
            <img src="${pegaItem.image}"/>
            <p>Categoria: ${pegaItem.category}</p>
            <p>Postado em: ${pegaItem.date}</p>
            <button>Editar</button>  <button>Apagar</button>
        `
        
        listaPosts.append(cardPost)
    })
}
//UPDATE
function editarPost(){}
//DELETE
function deletarPost(){}


// const pessoa = {
//     nome: "Vítor",
//     idade: 19,
//     Tags: [],
//     "Empresas trabalhadas": [],
//     isAdmin: true
// }

// console.log(pessoa.nome)
// console.log(pessoa[idade])