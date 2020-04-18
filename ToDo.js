//Reference Expected Actions on page;
const taskInputElement = document.getElementById("TaskInput");
const saveItemElement = document.getElementById("savebtn");
const tasksElement = document.getElementById("savedTasks");

//Create method to return element values;
const getElementValue = (Element) =>{
    return Element.value;
}
//Track number of tasks and limit to 5
const taskList = [];

//When user saves item by clicking on the save item button;
    saveItemElement.addEventListener("click", (event) => {
        event.preventDefault();
    
        const inputValue = getElementValue(taskInputElement);
        const tablerow = document.createElement("tr");
    

 if (inputValue === "") {alert("Please enter a task before submiting");}
 else{
    if (taskList.length < 5){
 //Add Task
        const taskTd = document.createElement("td");
        taskTd.innerHTML = inputValue;
        tablerow.appendChild(taskTd);
    
//Create check Button
        const checkTd = document.createElement("td");
        const checkbtn = document.createElement("button");
        checkbtn.classList.add("btn","btn-success");
    
    //Create check icon and add it to check btn
        const checkIcon = document.createElement("span");
        checkIcon.innerHTML= "&#10003";
        checkbtn.appendChild(checkIcon);
    
    //Add check btn to table data and row
        checkTd.appendChild(checkbtn);
        tablerow.appendChild(checkTd);
    
    //Create uncheck Btn
        const nocheckTd = document.createElement("td");
        const nocheckbtn = document.createElement("button");
        nocheckbtn.classList.add("btn", "btn-danger");
    
     //Create uncheck icon and add to uncheck btn
        const unCheckIcon = document.createElement("span");
        unCheckIcon.innerHTML= "X";
        nocheckbtn.appendChild(unCheckIcon);
    
    //Add uncheck button to table data and row
        nocheckTd.appendChild(nocheckbtn);
        tablerow.appendChild(nocheckTd);
    
    //Add task row to table
        tasksElement.appendChild(tablerow);
        taskList.push(tasksElement);
        
    
    //When user clicks the nocheck btn
    nocheckbtn.addEventListener("click", ()=>{
        tablerow.remove();
    })
    //When user clicks the check btn
    checkbtn.addEventListener("click", ()=>{
    event.preventDefault();
    inputValue.style.textDecoration="line-through"
    })
    }
    else {
        alert("You can't have more than 5 tasks");
      }
}
    })





