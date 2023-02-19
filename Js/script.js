let dateInput = document.getElementsByName("date")[0]

let base = new Date;
let date = base.getDate() < 10 ? "0" + base.getDate() + "" : base.getDate() + ""
let year = base.getFullYear() + ""
let month = base.getMonth() < 10 ? "0" + base.getMonth() + "" : base.getMonth() + ""

dateInput.value = `${year}-${month}-${date}`

const btn = document.getElementsByName("submit")[0]
const input = Array.from(document.getElementsByClassName("input"))

setInterval(() => {
    let count = 0;
    for (const iterator in input) {
        input[iterator].value != "" ? count++ : null;
    }
    count == input.length ? document.getElementsByName("submit")[0].removeAttribute("disabled") : document.getElementsByName("submit")[0].setAttribute("disabled", "true");
});