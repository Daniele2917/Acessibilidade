function login() {
    const email = document.getElementsByName("email")[0].value;
    const senha = document.getElementsByName("senha")[0].value;
    const allUsers = JSON.parse(localStorage.getItem("users"));

    const existUser = allUsers.find(x => x.login === email && x.senha === senha);

    if (!!existUser) {
        var url = "../home/home.html";
        window.location = url;

    } else {
        alert('Usuário Não Encontrado - Cadastre-se!');
    }
}
