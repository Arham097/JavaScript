const h1 = document.querySelector(".heading1");
const h2 = document.querySelector(".heading");
const h3 = document.querySelector(".heading3");
const h4 = document.querySelector(".heading4");
const h5 = document.querySelector(".heading5");
const h6 = document.querySelector(".heading6");
const h7 = document.querySelector(".heading7");
const h8 = document.querySelector(".heading8");

// setTimeout(()=>{
//     h1.textContent = "heading1";
//     h1.style.color = "blue";
//     setTimeout(()=>{
//         h2.textContent = "heading2";
//         h2.style.color = "violet";
//         setTimeout(()=>{
//             h3.textContent = "heading3";
//             h3.style.color = "red";
//             setTimeout(()=>{
//                 h4.textContent = "heading4";
//                 h4.style.color = "pink";
//                 setTimeout(()=>{
//                     h5.textContent = "heading5";
//                     h5.style.color = "lightblue";
//                     setTimeout(()=>{
//                         h6.textContent = "heading6";
//                         h6.style.color = "yellow";
//                     },1000);
//                 },1000);
//             },1000);
//         },2000);
//     },1000);
// },2000)


// function changeText(element,text,color,time, onSuccess, onFailure){
//     setTimeout(()=>{
//         if(element){
//             element.textContent = text;
//             element.style.color = color;
//             if(onSuccess){
//                 onSuccess();
//             }
//         }else{
//             if(onFailure){
//                 onFailure();
//             }
//         }
//     },time)
// }

// changeText(h1,"heading1","violet",2000,()=>{
//     changeText(h2,"heading2","blue",1000,()=>{
//         changeText(h3,"heading3","indigo",2000,()=>{
//             changeText(h4,"heading4","blue",2000,()=>{
    
//             },()=>{console.log("Element not exist")});
//         },()=>{console.log("Element not exist")});
//     },()=>{console.log("Element2 not exist")});    
// },()=>{console.log("Element1 not exist")});


function changeColor(element, text, color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }else{
                reject();
            }
        },time)
    })
}

changeColor(h1,"h1","blue",1000)
    .then(()=>changeColor(h2,"h2","green",1000))
    .then(()=>changeColor(h3,"h3","yellow",1000))
    .then(()=>changeColor(h4,"h4","pink",1000))
    .then(()=>changeColor(h5,"h5","grey",1000))
    .then(()=>changeColor(h6,"h6","brown",1000))
    .then(()=>changeColor(h7,"h7","cyan",1000))
    .then(()=>changeColor(h8,"h8","purple",1000))
    .catch((error)=>{
        console.log("Error");
    })

