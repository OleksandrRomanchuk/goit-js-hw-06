const elToValiate = document.querySelector("#validation-input");

elToValiate.addEventListener("blur", onFocusChange);

function onFocusChange(event) {
  if (event.currentTarget.value.length >= event.currentTarget.dataset.length) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
}
