let inputField = document.getElementById("inputField");
let tasks = document.getElementById("TasksList");
console.log(TasksList);

const addTask = () => {

    let task = inputField.value.trim();
    const li = document.createElement('li');
    li.innerHTML = `
            <label>
                <input type="checkbox">
                <span>${task}</span>
            </label>
            <span class="editBtn"><i class="fa-solid fa-pen-to-square"></i></span>
            <span class="deleteBtn"><i class="fa-solid fa-trash"></i></span>
        `;
        tasks.appendChild(li);
        inputField.value = ""; 
    // console.log(li);

    const checkBox = li.querySelector("input");
    let span1 = li.querySelector("span");
    const editBtn = li.querySelector(".editBtn");
    console.log(editBtn);

    // console.log(checkBox);
    checkBox.addEventListener("click", () => {
        span1.classList.toggle("checked");
    })  

    editBtn.addEventListener("click", function() {
        console.log("hello");
        
        const taskUpdate = prompt("editer une tache:", span1.textContent);
        if (taskUpdate !== null){
            span1.textContent = taskUpdate;
            checkBox.checked = false;
            span1.classList.remove("checked");
            
        }

    })
    };





