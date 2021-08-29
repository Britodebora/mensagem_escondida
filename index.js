var formulario = document.querySelector("form");
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    var mensagem = formulario.mensagem.value;
    var criptografia = formulario.criptografia.value;
    var acao = formulario.acao.value;
    var resultado = '';

    if (criptografia == 'base64') {
        resultado = base64(acao, mensagem);
    } else {
        resultado = cesar(acao, mensagem);
    }

    var resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = `
    <h1> Resultado:
    ${resultado}
    </h1>`;
    formulario.reset();
});
function base64(acao, mensagem) {
    if (acao == 'codificar') {
        return btoa(mensagem);
    } else {
        return atob(mensagem);
    }
}

function cesar(acao, mensagem) {
    incremento = 7;
    var resultado = '';
    for (var i = 0; i < mensagem.length; i++) {
        var letra = mensagem[i];
        var code = letra.charCodeAt();

        if (acao == 'codificar') {
            code += incremento;
        } else {
            code -= incremento;
        }
        resultado += String.fromCharCode(code);
    }
    return resultado;
}