function LimparResultado() {
    document.getElementById("valor").value = "";
    valorConvertido.innerText = "";
}

function Converter() {
    let valorElemento = parseFloat(document.getElementById("valor").value);
    let valorEmReal = valorElemento * 5.26;
    console.log(valorEmReal);
    let elementoValorConvertido = document.getElementById("valorConvertido");
    let valorConvertido = "O resultado em real é R$ " + valorEmReal.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
}



