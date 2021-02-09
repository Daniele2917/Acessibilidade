function todosUsuarios() {
    
    this.users = [
        {
            id: 1,
            login: "pedro.mendes",
            senha: "123",
            name: "Pedro Mendes de Souza",
            idade: "65",
            portador: true,
            acompanhanhaPortador: true,
            nomePortador: " Alexandre mendes",
            idadePortador: "30"
        },
        {
            id: 2,
            login: "adriana.silva",
            senha: "123",
            name: "Adriana mendes da silva",
            idade: "73",
            portador: true,
            acompanhanhaPortador: true,
            nomePortador: " Patricia Santos",
            idadePortador: "32"
        },
        {
            id: 3,
            login: "pedro.mendes",
            senha: "123",
            name: "Pedro Mendes de Souza",
            idade: "84",
            portador: true,
            acompanhanhaPortador: true,
            nomePortador: "Adriano Ferreira",
            idadePortador: "22"
        }
    ]
    window.localStorage.setItem("users", JSON.stringify(users));
    return users;
}

function todasExperiencias() {

    const experiencias = [
        {
            id: 1,
            nome: "Fisio Saude",
            idUser: 3,
            categoria: "clinica",
            observacao: "Ambiente agradável com acessibilidade para minhas necessidades",
            quantidadeEstrela: 5

        },
        {
            id: 2,
            nome: "Praia da barra",
            idUser: 1,
            categoria: "praias",
            observacao: "Atendeu minhas expectativas",
            quantidadeEstrela: 4
        },
        {
            id: 3,
            nome: "Clinica Odontologica",
            idUser: 3,
            categoria: "clinica",
            observacao: "Muito limpo e organizado",
            quantidadeEstrela: 5
        },
        {
            id: 4,
            nome: "Mercado uniao",
            idUser: 2,
            categoria: "supermercado",
            observacao: "Grande variedade, porem muito bagunçado e apertado, pode melhorar",
            quantidadeEstrela: 1
        }
    ]
    return experiencias;
}

function inserirUsuario(user) {
    todosUsuarios();
    var listUsers = JSON.parse(localStorage.getItem("users"));
    user.id = listUsers[this.users.length -1].id + 1;
    this.users.push(user);
    window.localStorage.setItem("users", JSON.stringify(users));
}
