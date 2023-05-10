const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function () {
    let hexColor = `#${hex[getRandom()]+hex[getRandom()]+hex[getRandom()]+hex[getRandom()]+hex[getRandom()]+hex[getRandom()]}`
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    color.style.color = hexColor;
})

function getRandom() {
    return Math.floor((Math.random() * hex.length));;
}