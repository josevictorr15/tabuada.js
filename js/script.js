const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector("#multiplication-operation");
const multiplicationTitle = document.querySelector("#multiplication-title span");

const createTable = (n, multiplicator) => {
    multiplicationTable.innerHTML = "";

    for(let i = 1; i <= multiplicator; i++) {
        const result = n * i;
        const template = `<div class="row">
            <div class="operation">${n} x ${i} = </div>
            <div class="result">${result}</div>
        </div>`

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);

    }

    multiplicationTitle.innerHTML = n;
}

multiplicationForm.addEventListener("submit", (e => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicator = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicator) return;

    createTable(multiplicationNumber, multiplicator);
}))