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
            <span class="editBtn"></span><i class="fa-solid fa-pen-to-square"></i>
            <span class="deleteBtn"></span><i class="fa-solid fa-trash"></i>
        `;
        tasks.appendChild(li);
        inputField.value = ""; 
    // console.log(li);

    const checkBox = li.querySelector("input");
    // console.log(checkBox);
    checkBox.addEventListener("click", () => {
        let span1 = li.querySelector("span");
        span1.classList.toggle("checked");
    });

        
    }



