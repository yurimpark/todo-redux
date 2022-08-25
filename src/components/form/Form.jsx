import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import { addTodo } from "../../redux/modules/todos";

function Form() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title.trim() === "" || body.trim() === "")
      return alert("제목과 내용을 모두 채워주세요.");
    dispatch(addTodo({ title, body }));
    setTitle("");
    setBody("");
  };

  return (
    <AddForm onSubmit={onSubmitHandler}>
      <InputGroup>
        <Label>제목</Label>
        <Input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Input>
        <Label>내용</Label>
        <Input
          type="text"
          name="title"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></Input>
      </InputGroup>
      <Btn>등록</Btn>
    </AddForm>
  );
}

export default Form;

let AddForm = styled.form`
  background-color: #f8f8ef;
  border-radius: 12px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 25px;
  gap: 20px;
`;

let InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

let Label = styled.label`
  font-size: 15px;
  font-weight: bold;
  display: flex;
`;

let Input = styled.input`
  height: 40px;
  width: 220px;
  border: none;
  border-radius: 10px;
  padding: 0 20px;
`;

let Btn = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: #acbc97;
  width: 95px;
  color: #fff;
  font-weight: bold;
`;
