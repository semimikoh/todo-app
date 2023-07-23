import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import { styled } from "styled-components";

export default function Todolist({ filter }) {
  const [todos, setTodos] = useState(readTodo);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (
    updated // 수정된/ 체크된 todo
  ) => setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  // updated : Todo 컴포넌트에서 체크되어서 넘어온 id "finished"
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  // 로컬스토리지에 투두 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);
  return (
    <Container>
      <Todos>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </Todos>
      <AddTodo onAdd={handleAdd} />
    </Container>
  );
}

function readTodo() {
  console.log("readTodo");
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  } else if (filter === "active") {
    return todos.filter((t) => t.done === "nope");
  } else if (filter === "completed") {
    return todos.filter((t) => t.done === "finished");
  }
}

const Container = styled.div`
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  // background-col
`;
const Todos = styled.ul`
  flex: 1 1 auto;
  overflow-y: auto;
`;

// import React, { useState } from 'react';

// export default function TodoList() {
//   const [todos, setTodos] = useState([
//     { id: '123', text: '장보기', status: 'active' },
//     { id: '124', text: '공부하기', status: 'active' },
//   ]);

//   return (
//     <section>
//       <ul>
//         {todos.map((item) => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }
