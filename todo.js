
let addBtn = document.getElementById("add");
addBtn.addEventListener("click", addTask);
const ParentList = document.getElementById("parentList");
const ParentList2 = document.getElementById("parentList2");
const CL = document.getElementById("CL")
let emptyMsg = document.createElement("li");
emptyMsg.classList = "list-group-item mx-5 my-1 p-1 outline-none";
emptyMsg.innerHTML = `<p class="empty"> No pending tasks 🙅‍♂️ </p>`;

function addTask(e) {
  let currentInput = document.getElementById("input1");
  let newTask = currentInput.value;
  let kotthaVar = document.getElementById("parentList");

  if (newTask.length != 0){
    if (ParentList.children[0].children[0].className == "empty") {
    ParentList.children[0].remove();
  }
  let newChild = document.createElement("li");
  newChild.className =
    "list-group-item d-flex justify-content-between mx-5 my-1 p-1";
  newChild.innerHTML = `<p class="p3"> ${newTask}</p>
                <button class="edit btn btn-outline-warning mx-2 p-1 hidden" onclick="editt(this)">
                  Edit
                </button>
               
                <button class="remove btn btn-outline-danger mx-2 p-1 hidden" onclick="removee(this)">
                  <img src="remove.gif">
                </button>
                <button
          class="completed btn btn-outline-success mx-2 p-1"
          onclick="completedd(this)"
        >
        <img src="completed.gif">
        </button>`;
    var count=0;
    for(let i=0;i<ParentList.children.length;i++){
      let currentInput = document.getElementById("input1");
      let newTask = currentInput.value;
      const string1=ParentList.children[i].children[0].textContent.slice(1)
      const string2=newTask
      const result = string1.toUpperCase() === string2.toUpperCase();
      if (result){
        count=count+1;
      }
    }
    
    if(!count){
    ParentList.appendChild(newChild);}
    else{
      alert("task already exist")
    }

              }
}
function removee(e) {
  let currentElement = e.parentElement;
  currentElement.remove();
  if (ParentList.children.length === 0) {
    ParentList.appendChild(emptyMsg);
  }
}
function editt(elem) {
  var presentTaskk=elem.previousElementSibling.textContent;
  if (elem.textContent === "done") {
    elem.textContent = "Edit";
    let currentName = document.getElementById("input2");
    let currentValue = currentName.value;
    if(currentValue.length != 0) {
      elem.previousElementSibling.innerHTML = `<p>
    ${currentValue} </p>`;
     }
     else{
      elem.previousElementSibling.innerHTML =`<p> invalid task name</p>`;
     }
    
  } else {
    let currentName = elem.previousElementSibling.textContent; 
    elem.textContent = "done";
    elem.previousElementSibling.innerHTML = `<input
      id="input2"
      type="text"
      class="form-control"
      placeholder="Enter task"
      required
  />`;
  }
}
function completedd(f){
  removee(f)
  if (ParentList2.children.length === 0){
  let heading=document.createElement("h4")
  heading.classList="mx-2 mt-3"
  heading.innerHTML= " Completed tasks 🎉"
  CL.prepend(heading)
  }
  let ct = document.createElement("li");
  ct.classList ="list-group-item d-flex justify-content-between mx-5 my-1 p-1";
  ct.innerHTML =`<p class="p3"> ${f.previousElementSibling.previousElementSibling.previousElementSibling.textContent}</p>
  `;
  ParentList2.append(ct);
}
