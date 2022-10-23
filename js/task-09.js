const refs = {
  bodyEl: document.querySelector("body"),
  buttonEl: document.querySelector(".change-color"),
  outputEl: document.querySelector(".color"),
};

refs.buttonEl.addEventListener("click", onClkChangeBodyColor);

function onClkChangeBodyColor() {
  const newColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = newColor;
  refs.outputEl.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
