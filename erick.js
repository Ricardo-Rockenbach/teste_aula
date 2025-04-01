
const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const botao4 = document.getElementById("botao4");

    caixa1.style.display = "none"
    caixa2.style.display = "none"
    caixa3.style.display = "none"
    caixa4.style.display = "none"
    caixa5.style.display = "block"



botao1.addEventListener("click", function() {
    caixa1.style.display = "block"
    caixa2.style.display = "none"
    caixa3.style.display = "none"
    caixa4.style.display = "none"
    caixa5.style.display = "none"

})

botao2.addEventListener("click", function() {
    caixa1.style.display = "none"
    caixa2.style.display = "block"
    caixa3.style.display = "none"
    caixa4.style.display = "none"
    caixa5.style.display = "none"
    

})

botao3.addEventListener("click", function() {
    caixa1.style.display = "none"
    caixa2.style.display = "none"
    caixa3.style.display = "block"
    caixa4.style.display = "none"
    caixa5.style.display = "none"
})

botao4.addEventListener("click", function() {
    caixa1.style.display = "none"
    caixa2.style.display = "none"
    caixa3.style.display = "none"
    caixa4.style.display = "block"
    caixa5.style.display = "none"
})
