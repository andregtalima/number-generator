const form = document.getElementById('raffle-form');
const quantityInput = document.getElementById('quantity');
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const noRepeatInput = document.getElementById('no-repeat');

const resultSection = document.getElementById('result');
const resultNumberContainer = document.getElementById('result-number');
const infoSection = document.getElementById("info")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const regex = /\D+/g
    quantityInput.value = quantityInput.value.replace(regex, "")
    minInput.value = minInput.value.replace(regex, "")
    maxInput.value = maxInput.value.replace(regex, "")

    const quantity = parseInt(quantityInput.value, 10)
    const min = parseInt(minInput.value, 10)
    const max = parseInt(maxInput.value, 10)
    const noRepeat = noRepeatInput.checked

    // validações simples
    if (isNaN(quantity) || isNaN(min) || isNaN(max)) {
        alert("Preencha todos os campos com números válidos")
        return
    }

    if (min > max) {
        alert('O valor "de" deve ser menor que "até"')
        return
    }

    const range = max - min + 1
    if (noRepeat && quantity > range) {
        alert("Quantidade maior que o intervalo disponível sem repetição")
        return
    }

    // gera números sorteados
    const numbers = generateRandomNumbers(quantity, min, max, noRepeat)

    // limpa resultados anteriores
    resultNumberContainer.innerHTML = ""

    // remove possíveis animações antigas
    resultSection.classList.remove("show")

    // cria os elementos .number para cada sorteado
    numbers.forEach((num) => {
        const numberDiv = document.createElement("div")
        numberDiv.classList.add("number")

        const span = document.createElement("span")
        span.textContent = num

        numberDiv.appendChild(span)
        resultNumberContainer.appendChild(numberDiv)
    })

    // mostra seção de resultado
    resultSection.hidden = false

    // esconder área do formulário
    infoSection.hidden = true

    // força reflow para reiniciar animação (garante que reinicie em novos sorteios)
    void resultSection.offsetWidth

    // marca a seção como "show" (fade-in da seção)
    resultSection.classList.add("show")

    // adiciona classe .animate em cada .number para disparar o @keyframes
    const numberDivs = resultNumberContainer.querySelectorAll(".number")
    numberDivs.forEach((div) => {
        // remove e reacrescenta para começar animação se já existia
        div.classList.remove("animate")
        void div.offsetWidth
        div.classList.add("animate")
    })
    
})

/**
 * gera números aleatórios entre min e max.
 * se noRepeat = true, não repete valores
 */

function generateRandomNumbers(quantity, min, max, noRepeat) {
    const result = []

    if (noRepeat) {
        const available = []
        for (let i = min; i <= max; i++) {
            available.push(i)
        }

        for (let i = 0; i < quantity; i++) {
            const index = Math.floor(Math.random() * available.length)
            result.push(available[index])
            available.splice(index, 1)
        }
    } else {
        for (let i = 0; i < quantity; i++) {
            const random = Math.floor(Math.random() * (max - min + 1) + min)
            result.push(random)
        }
    }

    return result
}