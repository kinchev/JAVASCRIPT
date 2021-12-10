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
(() => {
        const btn = documnet.getElementById('btn');
    }

)
(() => {
    const btn = document.getElementById("btn");
    btn.addEventListener("click", (event) => {
        console.log(event);
        addTodo();
    });
})();