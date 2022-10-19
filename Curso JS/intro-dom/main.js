// const todos = [];

// const render = () => {
//         const todoList = document.getElementById('todo-list');
//         const todosTemplate = todos.map(t => '<li>' + t + '</li>');
//         todoList.innerHTML = todosTemplate.join('');
//         const elementos = document.querySelectorAll('#todo-list li')
//         elementos.forEach((elemento, i) => {
//           elemento.addEventListener("click", () => {
//            elemento.parentNode.removeChild(elemento)
//            todos.splice(i, 1)
//            render()
            
//           })
//         })
// }

const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Paulo!';

// constante o funcion miTitulo , con document.querySelector busco por id en este caso h1 , con miTitulo.TextContent agrego texto al h1 con la funcion const miTitulo}


function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null, numbers));
  // expected output: 6
  