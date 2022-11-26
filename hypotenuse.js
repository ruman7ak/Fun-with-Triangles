const inputval = document.querySelectorAll(".input");
const button = document.querySelector(".cal-btn");
const output = document.querySelector(".output");

function calculateHypotenuse(){
    const outputres =squareInputs(Number(inputval[0].value),Number(inputval[1].value));
    const lengthOfHypotenuse = Math.sqrt(outputres);
    output.innerText= "The length of Hyppotenuse is "+ lengthOfHypotenuse;
}

function squareInputs(a,b){
    const square = a*a + b*b;
    return square;
}



button.addEventListener('click', calculateHypotenuse);