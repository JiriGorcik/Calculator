const btns = document.querySelectorAll(".main-buttons button")
const result = document.querySelector(".current-oper")
const calculation = document.querySelector(".previus-oper")
const clearBtn = document.querySelector(".clear")
const deleteBtn = document.querySelector(".delete")
const equalBtn = document.querySelector(".eq")



let calc = []

btns.forEach((oneButton) => {
    oneButton.addEventListener("click", () => {
        
        if (oneButton.textContent !== "=") {
        calc.push(oneButton.textContent)
        calculation.textContent = calc.join("")
        }  
    })
})

deleteBtn.addEventListener("click", () => {
    calc.pop()
    calculation.textContent = calc.join("")
    
    if (calc[0] == undefined) {
        result.textContent = 0
    }
})

clearBtn.addEventListener("click", () => {
    calc = []
    calculation.textContent = calc
    result.textContent = 0
})


equalBtn.addEventListener("click", () => {
    let done = eval(calc.join(""))
    result.textContent = done
})










