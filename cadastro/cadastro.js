
function load() {
    document.getElementById("cadastro2").style.visibility = "hidden";
    document.getElementById("finalizar").style.visibility = "hidden";

}

function proximo() {
    document.getElementById("cadastro2").style.visibility = "visible";
    document.getElementById("proximo").style.visibility = "hidden";
    document.getElementById("finalizar").style.visibility = "visible";

}

function finalizar() {

    const nome = document.getElementsByName("nome")[0].value;
    const idade = document.getElementsByName("idade")[0].value;
    const portador = document.getElementsByName("portador")[0].value;
    const acompanhoPortador = document.getElementsByName("acompanhoPortador")[0].value;
    const idadePortador = document.getElementsByName("idadePortador")[0].value;
    const auditivo = document.getElementsByName("auditivo")[0].value;
    const visual = document.getElementsByName("visual")[0].value;
    const fisico = document.getElementsByName("fisico")[0].value;
    const intelectual = document.getElementsByName("intelectual")[0].value;
    const senha = document.getElementsByName("senha")[0].value;
    const login = document.getElementsByName("login")[0].value;


    const objSalvar = {
        nome: nome,
        idade: idade,
        portador: portador,
        acompanhoPortador: acompanhoPortador,
        idadePortador: idadePortador,
        auditivo: auditivo,
        visual: visual,
        fisico: fisico,
        intelectual: intelectual,
        senha: senha,
        login: login
    }

    inserirUsuario(objSalvar);
    var url = "../login/login.html";
        window.location = url;
}

load();