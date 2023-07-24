import React from "react";
import { FcEmptyTrash } from "react-icons/fc";
import { styled } from "styled-components";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, done, id } = todo;

  // 투두 체크박스
  const handleChange = (e) => {
    const done = e.target.checked ? "finished" : "nope";
    onUpdate({ ...todo, done });
  };
  // 투두 삭제
  const handleDelete = (e) => onDelete(todo);

  return (
    <TodoList>
      <Checkbox
        type="checkbox"
        id={id}
        checked={done === "finished"}
        onChange={handleChange}
      />
      <Label
        htmlFor={id}
        style={{
          textDecoration: done === "finished" ? "line-through" : "none",
        }}
      >
        {text}
      </Label>
      <Icon>
        <Button onClick={handleDelete}>
          <FcEmptyTrash />
        </Button>
      </Icon>
    </TodoList>
  );
}

const TodoList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.1rem 0;
  color: var(--color-text);
  form-weight: 600;
  textdecoration: "none";
`;
const Checkbox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
`;
const Label = styled.label`
  flex: 1 1 0%;
  margin-left: 0.5rem;
  font-size: 1.2rem;
`;
const Icon = styled.span`
  width: 26px;
  height: 26px;
  border-radius: 100%;
  transition: all 150ms ease-out;
  transform: scale(1.2);
  &:hover {
    background-color: #8ed0bb;
    transform: rotate(15deg) scale(1.5);
  }
`;

const Button = styled.button`
  background-color: transparent;
`;
