const colors = ["green", "red", "purple", "black","white","blue","orange","yellow","Cyan","maroon","olive","magenta","pink","aquamarine","lightBlue","gray"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    // console.log(document.body);      To access the body
    const randomNumber = getRandom();     //get a random number
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
})

function getRandom() {
    return Math.floor((Math.random() * colors.length));;
}