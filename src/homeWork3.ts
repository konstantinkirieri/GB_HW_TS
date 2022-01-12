// По дз. Изучить API https://jsonplaceholder.typicode.com
// (пример использования на главной странице в разделе Try it ).
// Необходимо изучть ответ от API, создать интерфейс соответвующий ему.
// Нужно реализовать типизированную фунциою getTodosByCount(count) - где count - количество todo,
// которое должно прийти и вывести результат в консоль.
// Реализовтаь на основе конфига проекта, в браузере или в ноде не принципиально.

interface Todo {
  body: string
  id: number
  title: string
  userId: number
}

type Todos = Array<Todo>

export function getTodosByCount(count: number): void {
  console.log(count)
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then<Todos>(response => response.json())
    .then<void>(json => console.log(json.slice(0, count)))
}
