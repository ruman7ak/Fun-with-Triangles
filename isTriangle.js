const input = document.querySelectorAll('.input-value');
const button= document.querySelector('#check-btn');
const output= document.querySelector('#output-id');

function isTriangle(){
    const sumOfAngles= calculateSumofAngles(Number(input[0].value),Number(input[1].value),Number(input[2].value));
    
    if (sumOfAngles==180){
        output.innerText="yaaay!! The angles form a triangle";
    }else{
        output.innerText= "so sad It doesnt form a traingle";
    }
}

function calculateSumofAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}

button.addEventListener("click", isTriangle);