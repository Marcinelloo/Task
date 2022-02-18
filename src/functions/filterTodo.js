export default function filterTodo(todos, fitler) {
  switch (fitler) {
    case "complited":
      return todos.filter((todo) => todo.completed === true);
    case "notcomplited":
      return todos.filter((todo) => todo.completed === false);
    default:
      return todos;
  }
}
