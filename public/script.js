var nome = prompt("Digite seu nome: ");
var renda = prompt("Digite sua renda: ");
var qtd_despesas = prompt("Digite a quantidade de despesas: ");
var soma_despesas = 0;
var sobra = 0;

while (Number.isNaN(renda)) {
    if (isNaN(renda)){
        var renda = prompt("Digite sua renda: ");
    } 
}

for (let i = 1; i <= qtd_despesas; i++){
    var despesa = Number(prompt("Digite a despesa " + i + ":"));
    soma_despesas += despesa;
}

if (soma_despesas > renda){
    console.log("⚠️ Atenção: você gastou mais do que ganhou.");
} else {
    sobra = renda - soma_despesas;
    if (sobra >= renda * 0.30){
        console.log("Valor de sobra é R% " + sobra + " ✅ Ótimo: boa margem de sobra.");
    } else {
        console.log("Valor de sobra é R% " + sobra + " 🙂 Ok: dá para melhorar a sobra.");
    }
}

console.log("Usuário " + nome + " com renda de R$" + Number(renda).toFixed(2) + " mensais, e R$ " +  
Number(soma_despesas).toFixed(2) + " em despesas mensais. Com sobra de R$" + Number(sobra).toFixed(2));

alert("Usuário " + nome + " com renda de R$" + Number(renda).toFixed(2) + " mensais, e R$ " +  
Number(soma_despesas).toFixed(2) + " em despesas mensais. Com sobra de R$" + Number(sobra).toFixed(2))



