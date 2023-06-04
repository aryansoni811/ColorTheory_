const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let hexColor = '#f1f1f1'
btn.addEventListener('click',function () {
    hexColor = `#${hex[getRandom()]+hex[getRandom()]+hex[getRandom()]+hex[getRandom()]+hex[getRandom()]+hex[getRandom()]}`
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    color.style.color = hexColor;
})

function getRandom() {
    return Math.floor((Math.random() * hex.length));;
}

const value = document.querySelector("#color");
const btn2 = document.querySelectorAll(".btn2");
let k;
btn2.forEach(function (item){
    item.addEventListener('click',function(e){
        const styl = e.currentTarget.classList;
        if(styl.contains("r_increase")){
            hexColor = increaseHexValue(hexColor,1)
        }
        if(styl.contains("g_increase")){
            hexColor = increaseHexValue(hexColor,2)
        }
        if(styl.contains("b_increase")){
            hexColor = increaseHexValue(hexColor,3)
        }
        if(styl.contains("r_decrease")){
            hexColor = decreaseHexValue(hexColor,1)
        }
        if(styl.contains("g_decrease")){
            hexColor = decreaseHexValue(hexColor,2)
        }
        if(styl.contains("b_decrease")){
            hexColor = decreaseHexValue(hexColor,3)
        }
        if(styl.contains("r_reset")){
            hexColor = '#ff0000'
        }
        if(styl.contains("g_reset")){
            hexColor = '#00ff00'
        }
        if(styl.contains("b_reset")){
            hexColor = '#0000ff'
        }
        document.body.style.backgroundColor = hexColor;
            color.textContent = hexColor;
            color.style.color = hexColor;
        
    })
});

function increaseHexValue(hexString, position) {
    const positions = [1,3,5]; // Starting index of each position

    // Validate the position argument
    if (![1, 2, 3].includes(position)) {
        console.error('Invalid position argument. Please provide a value of 1, 2, or 3.');
        return hexString;
    }

    // Extract the relevant substring based on the specified position
    const startPos = positions[position - 1];
    const endPos = startPos + 2;
    const hexPart = hexString.substring(startPos, endPos);

    // Parse the hexadecimal substring to an integer
    const decimalValue = parseInt(hexPart, 16);

    // Increase the decimal value by 4
    const increasedValue = (decimalValue + 8) % 256; // Use modulus operator to loop back

    // Convert the increased decimal value back to a hexadecimal string
    const hexResult = increasedValue.toString(16);

    // Pad the resulting hexadecimal string with leading zeros if necessary
    const paddedHexResult = hexResult.padStart(2, '0');

    // Replace the relevant part in the original hex string with the updated value
    const updatedHexString = hexString.substring(0, startPos) + paddedHexResult + hexString.substring(endPos);

    // Return the updated hexadecimal string
    return updatedHexString;
}

function decreaseHexValue(hexString, position) {            /// under construction!!!!!!
    const positions = [1,3,5]; // Starting index of each position

    if (![1, 2, 3].includes(position)) {
        console.error('Invalid position argument. Please provide a value of 1, 2, or 3.');
        return hexString;
    }

    const startPos = positions[position - 1];
    const endPos = startPos + 2;
    const hexPart = hexString.substring(startPos, endPos);

    let decimalValue = parseInt(hexPart, 16);

    decimalValue = (decimalValue - 8) % 256;
    if (decimalValue < 0) {
      decimalValue += 256;
    }

    const hexResult = decimalValue.toString(16);

    const paddedHexResult = hexResult.padStart(2, '0');

    const updatedHexString = hexString.substring(0, startPos) + paddedHexResult + hexString.substring(endPos);

    return updatedHexString;
}