var nome = prompt("Digite seu nome: ");
var renda = prompt("Digite sua renda: ");
var mensagem = "";
var soma_despesas = 0;
var sobra = 0;

while (isNaN(renda) || renda === "") {
    renda = prompt("Renda deve ser um valor numérico. Digite sua renda: ");
}
renda = Number(renda);

var qtd_despesas = Number(prompt("Digite a quantidade de despesas: "));

while (isNaN(qtd_despesas) || qtd_despesas === "") {
    qtd_despesas = Number(prompt("Digite um número válido de despesas: "));
}

if (qtd_despesas < 1){
    qtd_despesas = 1;
} else if (qtd_despesas > 5){
    qtd_despesas = 5;
}

for (let i = 1; i <= qtd_despesas; i++){
    var despesa = prompt("Digite a despesa " + i + ":");

    while (isNaN(despesa) || despesa === "") {
        despesa = prompt("Valor inválido. Digite a despesa " + i + ":");
    }

    despesa = Number(despesa);
    soma_despesas += despesa;
}

if (soma_despesas > renda){
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    sobra = renda - soma_despesas;
    if (sobra >= renda * 0.30){
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}

let resposta = "Usuário(a): " + nome +
    "\nRenda: R$ " + renda.toFixed(2) +
    "\nDespesas: R$ " + soma_despesas.toFixed(2) +
    "\nSobra: R$ " + sobra.toFixed(2) +
    "\nClassificação: " + mensagem;

alert(resposta);
console.log(resposta);