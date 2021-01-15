// Finalizando Plantão
function finalizaPlantao() {
    var confirma = confirm("Deseja realmente finalizar o Plantão?")
    if (confirma == true) {
        var para = document.getElementById('login');             
        para.innerHTML = '<img src="img/login00.png" alt="login" id="login00" title="Login/Logout" onclick="abreLogin()"> <img src="img/login01.png" alt="login" id="login01" title="Login/Logout" onclick="abreLogin()">';
    }
    else {
        return
    }
}