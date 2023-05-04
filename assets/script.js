const loanAmount = document.getElementById("loan_amount");
const loanTenure = document.getElementById("loan_tenure");
const loanRate = document.getElementById("loan_interest");

const loanEmi = document.querySelector(".loan_emi");
const loanPrinciple = document.querySelector(".loan_principle");
const loanTotal = document.querySelector(".loan_total");
const loanInterest = document.querySelector(".loan_interest_rate");

const submitBtn = document.querySelector(".calculator-btn");

submitBtn.addEventListener("click", function () {
  amount = loanAmount.value;
  tenure = loanTenure.value * 12; // 1 Ano = 12 meses
  rate = loanRate.value / 12 / 100; // loan rate por ano / 100 = porcentagem do emprestimo

  emi = (amount * rate * (1 + rate) ** tenure) / ((1 + rate) ** tenure - 1);
  //console.log(emi);
  total = emi * tenure; // Valor total a pagar incluindo juros
  interest = total - amount; // interest = total amount - principle amount
  // console.log(total);
  //console.log(interest);

  loanEmi.innerHTML = Math.floor(emi);
  loanPrinciple.innerHTML = Math.floor(amount);
  loanTotal.innerHTML = Math.floor(total);
  loanInterest.innerHTML = Math.floor(interest);

  //Loanchart
  let xValues = ["Valor do Empréstimo", "Valor de Juros"];
  let yValues = [amount, Math.floor(interest)];

  let barColors = ["#961251", "#000000"];

  new Chart("loanChart", {
    type: "pie",
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
