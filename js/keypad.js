function limpar() {
	$('#passwordKeypad').val("");
}

function adicionarValor(numero) {
	var tamanho = $('#passwordKeypad').val().length;
	if (parseInt(tamanho) <= 3) {
		$('#passwordKeypad').val($('#passwordKeypad').val()+numero);
	}
}