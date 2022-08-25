import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <div>My Todo List</div>
    </Container>
  );
}
export default Header;

let Container = styled.div`
  border: 1px solid #ddd;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20px;
  font-weight: 700;
  font-size: 20px;
`;
