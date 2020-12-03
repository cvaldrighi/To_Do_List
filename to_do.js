const btnAdd = document.getElementById("btnAdd");
const input = document.getElementById("input");

function addTask() {
     btnAdd.onclick = function() {
        if (input.value == '') {
            alert("please add a task");
        } else {
            
        }
    }
}

addTask();
