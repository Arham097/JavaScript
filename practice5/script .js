// const body = document.body;
// const btn = document.querySelector(".button");
// console.log(btn,body);

// function themeChange(){
//     const red = Math.floor(Math.random()*125);
//     const blue = Math.floor(Math.random()*125);
//     const green = Math.floor(Math.random()*125);
//     const merge  = `rgb(${red},${green},${blue})`;
//     return merge;
// }

// const id = setInterval(()=>{
//     body.style.backgroundColor = themeChange();
// },1000)

// btn.addEventListener("click",()=>{
//     clearInterval(id);
//     btn.textContent = themeChange();
// })


function getTwoNumber(number1, number2,onSuccess,onFailure){
    if(typeof number1 === "number" && typeof number2 ==="number"){
        onSuccess(number1,number2);
    }
    else{
        onFailure();
    }
}

function add(num1,num2){
    console.log(num1+num2);
}
function onFailure(){
    console.log("wrong DT")
}

getTwoNumber("2",3,add,onFailure)