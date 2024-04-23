
// console.log(typeof document.getElementById("main-heading"));

// const select = document.querySelector(".form-todo");
// console.log(select);

// console.log(document.querySelectorAll(".atag"));

// const  main = document.getElementById("main-heading");
// console.log(main.innerText);

// const main = document.querySelector("a");
// console.log(main.getAttribute("href"));
// main.setAttribute("href","https://www.google.com");
// console.log(main.getAttribute("href"));

// const head = document.querySelector(".header");
// ;

// const todo = document.querySelector(".todo-list");
// const sec = todo.getElementsByTagName("li");

// const newELm = document.createElement("li");
// newELm.textContent = "Todo 6";
// todo.append(newELm);
// console.log(sec);

// const sec = document.querySelector(".todo-section");
// const info = sec.getBoundingClientRect().height;
// console.log(info);

// const button = document.querySelector(".btn-headline");
// button.addEventListener("mouseover",()=>{
//     console.log("mouse enter");
// })
// button.addEventListener("mouseleave",()=>{
//     console.log("mouseleave");
// })

// const form = document.querySelector(".form-todo");
// const text = document.querySelector(".form-todo input[type='text']");
// const  ulList = document.querySelector(".todo-list");
// const doneBtn = document.querySelector(".done");
// const remBtn = document.querySelector(".remove");
// console.log(text);

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const value = text.value;
//     text.value = "";
//     const elem = document.createElement("li");
//     elem.innerHTML = `<span class="text">${value}</span>
//     <div>
//         <button class="todo-btn done">Done</button>
//         <button class="todo-btn remove">Remove</button>
//     </div>`
//     ulList.append(elem);

// })
// ulList.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("done")){
//         const Done = e.target.parentNode.previousElementSibling;
//         Done.style.textDecoration = "line-through";
//     }
//     if(e.target.classList.contains("remove")){
//         const Remove = e.target.parentNode.parentNode;
//         Remove.remove();
//     }
// })






