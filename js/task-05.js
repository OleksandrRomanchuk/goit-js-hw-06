const refs = {
  inputEl: document.querySelector("#name-input"),
  outputEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onChangeInputValue);

function onChangeInputValue(event) {
  refs.outputEl.textContent =
    event.currentTarget.value.trim() === ""
      ? "Anonymous"
      : event.currentTarget.value.trim();
}

// function onChangeInputValue() {
//   refs.outputEl.textContent =
//     refs.inputEl.value.trim() === "" ? "Anonymous" : refs.inputEl.value.trim();
// }
