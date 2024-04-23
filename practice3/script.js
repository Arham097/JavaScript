
// const btn = document.querySelectorAll(".btn");

// // console.log(btn);

// btn.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         e.target.style.backgroundColor = "yellow";
//         // e.target.style.color = "white";
//     })
// })


// fetch(URL,{
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userID: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json',
//     }
// })
    
// const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL,{
//     method: 'POST',
//     body: JSON.stringify({
//         title:'foo',
//         body: 'bar',
//         userID: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json',
//     }
// })
    
//     .then(response=>{
//         if(response.ok){
//             return (response.json())
//         }else{
//             throw new Error("Something is wrong");
//         }
//     })
//     .then(data=>{
//         console.log(data);
//     })

const URL = "https://jsonplaceholder.typicode.com/posts";

async function getData(){
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something wrong");
    }
    const data = await response.json();
    return data;
}   

getData()
    .then(data=>console.log(data))
    .catch(error=>console.log(error));