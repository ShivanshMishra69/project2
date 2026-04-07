const button = document.getElementById("clickMe");
const input = document.getElementById("name");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    output.innerText = input.value;
});