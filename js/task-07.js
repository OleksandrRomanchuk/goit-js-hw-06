const refs = {
  rangeEl: document.querySelector("#font-size-control"),
  textElToChange: document.querySelector("#text"),
};

refs.rangeEl.addEventListener("input", onChangeInputValue);

function onChangeInputValue(event) {
  refs.textElToChange.style.fontSize = event.currentTarget.value + "px";
}
