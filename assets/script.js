// Selecionando os elementos do formulário de entrada.
const loanAmount = document.getElementById("loan_amount"); // Input do valor do empréstimo
const loanTenure = document.getElementById("loan_tenure"); // Input do tempo de empréstimo
const loanRate = document.getElementById("loan_interest"); // Input da taxa de juros

//Selecionando os elementos do resultado do empréstimo
const loanEmi = document.querySelector(".loan_emi"); // Valor da prestação mensal
const loanPrinciple = document.querySelector(".loan_principle"); // Valor do empréstimo
const loanTotal = document.querySelector(".loan_total"); // Valor total a pagar.
const loanInterest = document.querySelector(".loan_interest_rate"); // Valor dos juros

// Selecionando o botão de envio.
const submitBtn = document.querySelector(".calculator-btn");

// Adicionando um listener de evento para o botão de envio.
submitBtn.addEventListener("click", function () {
  //Obtendo valores do formulário
  amount = loanAmount.value; // valor do empréstimo
  tenure = loanTenure.value * 12; // tempo do empréstimo em meses (1 Ano = 12 meses)
  rate = loanRate.value / 12 / 100; // taxa de juros ao mês (taxa de juros anula / 12 /100 =porcentagem do emprestimo

  //Calculando valores do empréstimo
  emi = (amount * rate * (1 + rate) ** tenure) / ((1 + rate) ** tenure - 1); //prestação mensal
  total = emi * tenure; // Valor total a pagar incluindo juros
  interest = total - amount; // valor dos juros

  //Exibindo os valores do empresstimo no HTML
  loanEmi.innerHTML = Math.floor(emi);
  loanPrinciple.innerHTML = Math.floor(amount);
  loanTotal.innerHTML = Math.floor(total);
  loanInterest.innerHTML = Math.floor(interest);

  //Criando gráfico do empréstimo
  let xValues = ["Valor do Empréstimo", "Valor de Juros"];
  let yValues = [amount, Math.floor(interest)];

  let barColors = ["#961251", "#000000"];

  new Chart("loanChart", {
    type: "pie", // gráfico de pizza
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      title: {
        display: false,
      },
    },
  });
});
