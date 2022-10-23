const refs = {
    inputEL: document.querySelector('input'),
    createBtn: document.querySelector('button[data-create]'),
    destroyBtn: document.querySelector('button[data-destroy]'),
    outputEl: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', renderBoxes);

refs.destroyBtn.addEventListener('click', destroyBoxes);

function renderBoxes() {
    const amount = getInputValue();

    refs.outputEl.append(...createBoxes(amount));
}

function getInputValue() {
    const amount = !Number(refs.inputEL.value)
        ? alert('Oops! Please enter the number of boxes you want to create.')
        : refs.inputEL.value;

    return amount;
}

function createBoxes(amount) {
    destroyBoxes();

    const boxes = [];

    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = 30 + i * 10 + 'px';
        box.style.height = box.style.width;
        boxes.push(box);
    }

    return boxes;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
    refs.outputEl.innerHTML = '';
}
