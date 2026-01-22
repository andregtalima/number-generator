const ANIMATION_DELAY = 3500;
const BUTTON_FADE_DELAY = 50;

const elements = {
  inputText: document.querySelectorAll('input[type="text"]'),
  inputQuantity: document.getElementById("draw"),
  inputInitial: document.getElementById("initial"),
  inputFinal: document.getElementById("final"),
  checkbox: document.querySelector('input[type="checkbox"]'),
  form: document.querySelector("form"),
  main: document.querySelector("main")
};

let drawCount = 0;

function sanitizeNumberInput(input) {
  const numbersOnly = /\D+/g;
  input.value = input.value.replace(numbersOnly, "").trim();
}

function validateDrawParams(quantity, initial, final) {
  if (!quantity || !initial || final === undefined) {
    return "Por favor, preencha todos os campos.";
  }

  if (initial >= final) {
    return "O valor inicial deve ser menor que o valor final.";
  }

  const range = final - initial + 1;
  if (quantity > range) {
    return `A quantidade de números (${quantity}) é maior que o intervalo disponível (${range}).`;
  }

  if (quantity <= 0) {
    return "A quantidade deve ser maior que zero.";
  }

  return null;
}

function generateNumberRange(initial, final) {
  return Array.from({ length: final - initial + 1 }, (_, i) => initial + i);
}

function drawRandomNumbers(quantity, numberPool, allowRepetition) {
  const drawnNumbers = [];
  const pool = [...numberPool];

  while (drawnNumbers.length < quantity) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    const selectedNumber = pool[randomIndex];
    drawnNumbers.push(selectedNumber);

    if (!allowRepetition) {
      pool.splice(randomIndex, 1);
    }
  }

  return drawnNumbers;
}

function createElement(tag, classes = [], textContent = "") {
  const element = document.createElement(tag);
  if (classes.length) element.classList.add(...classes);
  if (textContent) element.textContent = textContent;
  return element;
}

function createNumberElement(number) {
  const numberSpan = createElement("span", ["number-sorted"], number);
  const animationDiv = createElement("div", ["animation-number"]);
  animationDiv.append(numberSpan);
  return animationDiv;
}

function createRetryButton(onRetry) {
  const button = createElement("button", ["appear-button"]);
  button.innerHTML = `SORTEAR NOVAMENTE <img src="./assets/arrow-rotate.svg" alt="arrow rotate">`;
  
  setTimeout(() => {
    button.style.opacity = 1;
  }, BUTTON_FADE_DELAY);

  button.onclick = onRetry;
  return button;
}

function displayNumbers(numbers, container, onComplete) {
  let index = 0;

  function showNext() {
    if (index < numbers.length) {
      const numberElement = createNumberElement(numbers[index]);
      container.append(numberElement);
      index++;
      setTimeout(showNext, ANIMATION_DELAY);
    } else {
      onComplete();
    }
  }

  showNext();
}

function renderDrawResult(drawParams, numberPool) {
  elements.main.classList.remove("grid");
  elements.main.innerHTML = "";

  const space = createElement("div", ["space", "container"]);
  const title = createElement("h1", ["result"], "Resultado do sorteio");
  
  drawCount++;
  const subtitle = createElement("h2", ["sub-title"], `${drawCount}º resultado`);
  
  const titleContainer = createElement("div");
  titleContainer.append(title, subtitle);

  const numbersContainer = createElement("div", ["div-sorted-numbers"]);
  
  space.append(titleContainer, numbersContainer);
  elements.main.append(space);

  const drawnNumbers = drawRandomNumbers(
    drawParams.quantity,
    numberPool,
    !elements.checkbox.checked
  );

  displayNumbers(drawnNumbers, numbersContainer, () => {
    const retryButton = createRetryButton(() => {
      renderDrawResult(drawParams, numberPool);
    });
    elements.main.append(retryButton);
  });
}

function handleFormSubmit(event) {
  event.preventDefault();

  const drawParams = {
    quantity: parseInt(elements.inputQuantity.value),
    initial: parseInt(elements.inputInitial.value),
    final: parseInt(elements.inputFinal.value)
  };

  const validationError = validateDrawParams(
    drawParams.quantity,
    drawParams.initial,
    drawParams.final
  );

  if (validationError) {
    alert(validationError);
    return;
  }

  try {
    const numberPool = generateNumberRange(drawParams.initial, drawParams.final);
    renderDrawResult(drawParams, numberPool);
  } catch (error) {
    alert("Não foi possível realizar o sorteio. Tente novamente.");
    console.error("Erro ao realizar sorteio:", error);
  }
}

elements.inputText.forEach((input) => {
  input.addEventListener("input", () => sanitizeNumberInput(input));
});

elements.form.addEventListener("submit", handleFormSubmit);
