const refs = {
  inputEl: document.querySelector("#name-input"),
  outputEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onChangeInputValue);

function onChangeInputValue(event) {
  const nameValue = event.currentTarget.value.trim();
  refs.outputEl.textContent =
    nameValue === "" ? refs.outputEl.textContent : nameValue;
}

// function onChangeInputValue() {
//   const nameValue = refs.inputEl.value.trim();
//   refs.outputEl.textContent =
//     nameValue === "" ? refs.outputEl.textContent : nameValue;
// }
