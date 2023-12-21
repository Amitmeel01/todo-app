const inputBox=document.querySelector("input");
const inputBtn=document.querySelector("button");
const inputList=document.getElementById("list-container");

inputBtn.addEventListener("click",()=>{
      if(inputBox.value==''){
        alert("please write something!!");
      }else{
             let li=document.createElement("li");
             inputList.appendChild(li);
             li.innerHTML=inputBox.value;

             let span=document.createElement("span");
             li.appendChild(span);
             span.innerHTML="&#xd7";
            
      }
      inputBox.value="";
      saveData();
})

inputList.addEventListener("click",(e)=>{
 console.log(e);
      if(e.target.tagName=="LI"){
        e.target.classList.toggle("cheaked1");
        saveData();
        
      }
      else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
      }
},false)
function saveData(){
  localStorage.setItem("data",inputList.innerHTML);

}
function showtask(){
  inputList.innerHTML=localStorage.getItem("data");
}
showtask();