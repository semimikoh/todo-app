import { lighten } from "polished";
import React, { useId, useRef, useState } from "react";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const uniqueId = useId();
  const inputRef = useRef();
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return setText("");
    }
    onAdd({ id: uuidv4(), text, done: "nope" });
    setText("");
    inputRef.current.focus();
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Add Todo"
          value={text}
          onChange={handleChange}
          ref={inputRef}
        />
        <Button>Add</Button>
      </Form>
    </>
  );
}

const Form = styled.form`
  width: 100%;
  display: flex;
  padding: 1rem;
  // background-color: #e6d6ef;
`;

const Input = styled.input`
  font-size: 1.4rem;
  flex: 1 0 auto;
  padding: 0.4rem 0.8rem;
  border: none;
  outline: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0 2rem;
  background-color: #d7b0ee;
  border: none;
  outline: none;
  color: var(--color-white);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  &: hover {
    background: ${lighten(0.1, "#d7b0ee")};
  }
`;
