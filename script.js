// const buttons = document.querySelector('.padBatton');
// buttons.forEach((button)=>
// button.addEventListener('click'))

document.addEventListener("DOMContentLoaded", function () {
    const expression = document.getElementById("expression");
    const answer = document.getElementById("answer");
  
    let currentExpression = "";
    let currentAnswer = "";
  
    function updateDisplay() {
      expression.value = currentExpression;
      answer.textContent = currentAnswer;
    }
  
    function calculate() {
      try {
        currentAnswer = eval(currentExpression);
      } catch (error) {
        currentAnswer = "Error";
      }
      updateDisplay();
    }
  
    document.querySelectorAll(".padButton").forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.textContent;
  
        switch (value) {
          case "AC":
            currentExpression = "";
            currentAnswer = "";
            break;
          case "C":
            currentExpression = currentExpression.slice(0, -1);
            break;
          case "=":
            calculate();
            break;
          default:
            currentExpression += value;
        }
  
        updateDisplay();
      });
    });
  });
  