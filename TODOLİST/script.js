const task = document.querySelector("#task");
const list = document.querySelector("#list");


let closeButton = ` <button onclick="gorevSil(parentNode)"
type="button"
class="close"
data-dismiss="toast"
aria-label="Close"
>
<span aria-hidden="true">&times;</span>
</button>`

function newElement(){
   const liDOM = document.createElement("li");
   
   if(task.value && task.value.trim() !=""){
    liDOM.innerHTML =`${task.value} ${closeButton}`;
   list.appendChild(liDOM);
   liDOM.addEventListener("click", function(){
    liDOM.classList == "checked" ? liDOM.classList.remove("checked") : liDOM.classList.add("checked")
   });
   $(".success").toast('show')
    addLocalStorage();
    task.value = "";
   }else{
    $(".error").toast('show')
   }
}

function gorevSil(sil){
    eraserLocalStorage(sil);
    sil.remove();
}


let toDoList;
if(localStorage.getItem("toDoList")){
     toDoList = JSON.parse(localStorage.getItem("toDoList"));
}else{
    toDoList = [];
}


function addLocalStorage(){
toDoList.push(`${task.value}`);
localStorage.setItem("toDoList", JSON.stringify(toDoList));
}


toDoList.forEach((element) => {
    let newElement = document.createElement("li");
    newElement.innerHTML = `${element} ${closeButton}`;
    newElement.addEventListener("click", function(){
    newElement.classList == "checked" ? newElement.classList.remove("checked") : newElement.classList.add("checked")
      });
    list.appendChild(newElement);
});


function eraserLocalStorage(sil){
    let index = toDoList.indexOf(sil.firstChild.textContent);
    toDoList.splice(index, 1);
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
}