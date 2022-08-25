import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, toggleTodo } from "../../redux/modules/todos";

function Todo({ work }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Details
          onClick={() => {
            navigate(`/${work.id}`);
          }}
        >
          🔍
        </Details>
        <H2>{work.title}</H2>
        <div>{work.body}</div>
      </div>
      <BtnDiv>
        <Btn onClick={() => dispatch(toggleTodo(work.id))}>
          {work.isDone ? "취소" : "완료"}
        </Btn>
        <Btn onClick={() => dispatch(deleteTodo(work.id))}>삭제</Btn>
      </BtnDiv>
    </Container>
  );
}

export default Todo;

let Container = styled.div`
  width: 230px;
  border-radius: 10px;
  padding: 0px 20px 20px 20px;
  box-shadow: 1px 1px 10px #b1c7c9;
  margin-top: 10px;
`;

let Btn = styled.button`
  border: none;
  width: 50%;
  height: 40px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  background-color: #acbc97;
  cursor: pointer;
`;

let BtnDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

let Details = styled.p`
  font-size: 15px;
  text-align: right;
  margin: 12px 0px 0px 0px;
  color: #a9a9a9;
  cursor: pointer;
`;

let H2 = styled.h2`
  margin: 0px 0px 15px 0px;
`;
