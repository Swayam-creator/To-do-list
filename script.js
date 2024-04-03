const inputbox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');
function addtask(){
    if(inputbox.value === ''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span); 
    }
    inputbox.value='';
    addItem();
}
listContainer.addEventListener('click',(e)=>{
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
}
else if(e.target.tagName === "SPAN"){
     e.target.parentElement.remove();
     addItem();
}
},false)
 function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
 }
 function addItem(){
    localStorage.setItem("data",listContainer.innerHTML);
 }

 showTask();

