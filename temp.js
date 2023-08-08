const celsious = document.querySelector('#celsius'),
fahrenheit = document.querySelector('#fahrenheit');

window.addEventListener("load",() => celsious.focus());

celsious.addEventListener("input", () => {
    fahrenheit.value=((celsious.value*9)/ 5 + 32).toFixed(2);
    if(!celsious.value) fahrenheit.value = "";
})

fahrenheit.addEventListener("input", () => {
    celsious.value=(((fahrenheit.value - 32)*5)/9).toFixed(2)
if(!fahrenheit.value)celsious.value = "";
})