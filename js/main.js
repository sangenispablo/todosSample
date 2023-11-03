let todos = [];

const handleChange = (index) => {
  todos[index].done = !todos[index].done;
};

const submitForm = (event) => {
  event.preventDefault();
  const inputTodo = document.getElementById("inputTodo");
  const todo = {
    detail: inputTodo.value,
    done: false,
  };
  todos.push(todo);
  // agregamos el elemento a la tabla
  const tBody = document.getElementById("listaTodos");
  tBody.innerHTML = "";
  todos.forEach((todo, index) => {
    tBody.innerHTML += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${todo.detail}</td>
            <td>
              <input 
                type="checkbox" 
                ${todo.done ? "checked" : ""}
                onchange="handleChange(${index})"
              />
            </td>
            <td>
              <button class="btn btn-danger">Eliminar</button>
            </td>
        </tr>
    `;
  });
};
