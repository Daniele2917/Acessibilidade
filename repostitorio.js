function todosUsuarios() {
    const users = [
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
    return users;
}

function todosEstabelecimentos() {

    const estabelecimentos = [
        {
            id: 1,
            nome: "Fisio Saude",
            tipo: "clinica"
        },
        {
            id: 2,
            nome: "Praia da barra",
            tipo: "praias"
        },
        {
            id: 3,
            nome: "Clinica Odontologica",
            tipo: "clinica"
        },
        {
            id: 4,
            nome: "Mercado uniao",
            tipo: "supermercado"
        }
    ]
    return estabelecimentos
}
