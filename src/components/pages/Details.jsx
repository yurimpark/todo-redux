import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = useSelector((state) => state.todolist.todo);

  const todoList = todo.find((todo) => {
    return todo.id === +id;
  });

  return (
    <Wrapper>
      <DetailBox>
        <DetailHeader>
          <Id>ID: {id}</Id>
          <Btn
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </Btn>
        </DetailHeader>
        <DetailContent>
          <h1>{todoList.title}</h1>
          <main>{todoList.body}</main>
        </DetailContent>
      </DetailBox>
    </Wrapper>
  );
}

export default Details;

let Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

let DetailBox = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid #dfeefc;
  border-radius: 20px;
  box-shadow: 1px 1px 10px #99adc0;
`;

let Id = styled.div`
  color: #878686;
`;

let DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
`;

let Btn = styled.button`
  border: none;
  background-color: #acbc97;
  color: white;
  font-weight: 900;
  width: 100px;
  height: 35px;
  border-radius: 8px;
  cursor: pointer;
`;

let DetailContent = styled.div`
  margin: 0 25px 0 25px;
`;
