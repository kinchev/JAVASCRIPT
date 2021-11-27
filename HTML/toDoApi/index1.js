const addToDo = () => {
    const input = document.getElementById("texr-input");
    const list = document.getElementsById("todos-list");
    const todo = document.createElement("li");

    todo.innerText = input.value;
    //add ttoddo to the list
    list.appendChild(todo);
    //Clear input
    input.value = "";
};