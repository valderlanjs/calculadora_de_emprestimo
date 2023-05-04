const loanAmount = document.getElementById("loan_amount");
const loanTenure = document.getElementById("loan_tenure");
const loanRate = document.getElementById("loan_interest");

const loanEmi = document.querySelector(".loan_emi");
const loanPrinciple = document.querySelector(".loan_principle");
const loanTotal = document.querySelector(".loan_total");
const loanInterest = document.querySelector(".loan_interest_rate");

const submitBtn = document.querySelector(".calclulator-btn");

submitBtn.addEventListener("click", function () {
  amount = loanAmount.value;
  tenure = loanTenure.value * 12; // 1 ano = 12 meses
  rate = loanRate.value / 12 / 100; // taxa de emprestimo por ano dividido por 100 que é igual a porcentagem

  emi = (amount * rate * (1 + rate) ** tenure) / ((1 + rate) ** tenure - 1);
  //console.log(emi)
  total = emi * tenure; // valor total a pagar ncluindo juros
  interest = total - amount; // interest = total amount - principle amount
  // console.log(total)
  //console.log(interest)

  loanEmi.innerHTML = Math.floor(emi);
  loanPrinciple.innerHTML = Math.floor(amount);
  loanTotal.innerHTML = Math.floor(total);
  loanInterest.innerHTML = Math.floor(interest);

  //Gráfico de Empréstimos

  let xValues = ["Principle", "Interest"];
  let yValues = [amount, Math.floor(interest)];

  let barColors = ["#962151", "#000000"];

  new Chart("loanChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [
        {
          background: barColors,
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
