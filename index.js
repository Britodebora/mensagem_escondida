var formulario = document.querySelector("form");
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    var mensagem = formulario.mensagem.value;
    var criptografia = formulario.criptografia.value;
    var acao = formulario.acao.value;
    var resultado = '';
    if (formulario.incremento.value != null) {
        var incremento = formulario.incremento.value;
    }

    if (criptografia == 'base64') {
        resultado = base64(acao, mensagem);
    } else {
        resultado = cesar(acao, mensagem, incremento);
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

function cesar(acao, mensagem, incremento_antigo) {
    var resultado = '';
    var incremento = 0;
    if(incremento_antigo != null){
        incremento = parseInt(incremento_antigo);
    }
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

document.getElementById('criptografia').addEventListener('change', function () {
    if (this.value == "cifra") {
        document.getElementById('div-incremento').hidden = false;
    } else {
        document.getElementById('div-incremento').hidden = true;
    }
});

document.getElementById('codificar').addEventListener('change', function () {
    if (this.value == "codificar") {
        document.getElementById('botao').innerHTML = "<button class='btn btn-primary mb-2' type='submit' value='Codificar'>Codificar</button>";
    }
});

document.getElementById('decodificar').addEventListener('change', function () {
    if (this.value == "decodificar") {
        document.getElementById('botao').innerHTML = "<button class='btn btn-primary mb-2' type='submit' value='Codificar'>Decodificar</button>";
    }
});
