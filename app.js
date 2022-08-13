  let amountSpent  = `[
    {
      "day": "mon",
      "amount": "$17.45"
    },
    {
      "day": "tue",
      "amount": "$34.91"
    },
    {
      "day": "wed",
      "amount": "$52.36"
    },
    {
      "day": "thu",
      "amount": "$31.07"
    },
    {
      "day": "fri",
      "amount": "$23.39"
    },
    {
      "day": "sat",
      "amount": "$43.28"
    },
    {
      "day": "sun",
      "amount": "$25.48"
    }
  ]`

let expensesObj = JSON.parse(amountSpent);

let mainChart = document.querySelector('.main_chart')
let eachDay = mainChart.getElementsByClassName("days");
let activeState = document.querySelector(".active_state");
let amounForEach = document.querySelectorAll('.amount-for-each');


for(let i=0; i<eachDay.length; i++){
  eachDay[i].addEventListener('mouseenter', function(){
  amounForEach[i].classList.add('active_state');
  amounForEach[i].style.display = "block"
  amounForEach[i].textContent = expensesObj[i].amount
  // Mouseout of the chart
  eachDay[i].addEventListener('mouseout', function(){
      amounForEach[i].style.display = "none"  
      })
  })}
  




  

 