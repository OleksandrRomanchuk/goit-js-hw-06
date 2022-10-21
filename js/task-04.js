const refs = {
  resultEL: document.querySelector("#value"),
  decrementBtn: document.querySelector("button[data-action='decrement']"),
  incrementBtn: document.querySelector("button[data-action='increment']"),
};

let counterValue = 0;

refs.decrementBtn.addEventListener("click", onDecrementBtn);
refs.incrementBtn.addEventListener("click", onIncrementBtn);

function onDecrementBtn() {
  counterValue -= 1;
  changeResult();
}

function onIncrementBtn() {
  counterValue += 1;
  changeResult();
}

function changeResult() {
  refs.resultEL.textContent = counterValue;
}
