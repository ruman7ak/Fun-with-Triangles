const inputs= document.querySelectorAll(".input");
const btn = document.querySelector(".check-btn");
const output= document.querySelector("#output");

function calculateArea(){
    const fullArea= calculateInputs(Number(inputs[0].value),Number(inputs[1].value));
    const area = 0.5*fullArea;
    output.innerText= "The area of Triangle is "+ area+" cm²";
}

function calculateInputs(a,b){
    const sides= a*b;
    return sides;
}

btn.addEventListener('click',calculateArea);