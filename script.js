const btns = document.querySelectorAll(".main-buttons button")
const result = document.querySelector(".current-oper")
const calculation = document.querySelector(".previus-oper")
const clearBtn = document.querySelector(".clear")
const deleteBtn = document.querySelector(".delete")
const equalBtn = document.querySelector(".eq")


let operators = ["+", "-", "/", "*"]
let calc = []

btns.forEach((oneButton) => {
    oneButton.addEventListener("click", () => {
        
        if (oneButton.textContent !== "=" && calc.length < 27) {
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

    try {
        let done = eval(calc.join("").replace(/[^-()\d/*+.]/g, ''))
        result.textContent = done
    } catch {
        result.textContent = "Math error"
    }

    if (result.textContent == "Infinity") {
        alert("You can´t divide with zero")
        result.textContent = 0
        calculation.textContent = calc = []
    } 
    
    if (result.textContent.length > 16) {
        result.textContent = "Number is too big"
    }

    if (calculation.textContent == []) {
        result.textContent = 0
    }
})











