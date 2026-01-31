import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';

const ElementIDs = {
  TodoList: '.todo-list',
  NewTodoInput: '#new-todo-input',
  ClearCompleted: '.clear-completed',
};

/**
 *
 * @param {string} elementId
 * @returns
 */

export const App = (elementId) => {
  const displayTodos = () => {
    const todoList = document.querySelector(ElementIDs.TodoList);

    todoList.innerHTML = '';

    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos);
  };

  // Cuando la funcion App() se llama
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  // Referencias HTML
  const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
  const todoListUl = document.querySelector(ElementIDs.TodoList);
  const clearCompletedButton = document.querySelector(ElementIDs.ClearCompleted);

  // Listeners
  newDescriptionInput.addEventListener('keyup', (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = '';
  });

  todoListUl.addEventListener('click', (event) => {
    const element = event.target.closest('[data-id]');
    todoStore.toggleTodo(element.getAttribute('data-id'));
    displayTodos();
  });

  todoListUl.addEventListener('click', (event) => {
    const isDetroyElement = event.target.className === 'destroy';
    const element = event.target.closest('[data-id]');
    if (!element || !isDetroyElement) return;

    todoStore.deleteTodo(element.getAttribute('data-id'));
    displayTodos();
  });

  clearCompletedButton.addEventListener('click', () => {
    todoStore.deleteCompleted();
    displayTodos();
  });
};
