const FORM_SELECTOR = ".login-form";
const loginForm = document.querySelector(FORM_SELECTOR);

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (!formFieldsValidation(loginForm)) return;

  const formData = [...event.target].reduce((dataObj, { name }) => {
    if (name) {
      dataObj[name] = event.target.elements[name].value;
    }

    return dataObj;
  }, {});

  console.log(formData);

  event.target.reset();
}

function formFieldsValidation(form) {
  const isFullField = document.querySelectorAll(`${FORM_SELECTOR} input`);

  return [...isFullField].every((field) => field.value)
    ? true
    : alert("Hello! All fields must be filled!");
}
