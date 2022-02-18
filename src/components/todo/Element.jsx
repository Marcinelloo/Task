import React from "react";
import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 1px 8px grey;
  border-radius: 20px;
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 6% 3% 6% 3%;
  opacity: 0.8;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Size = styled.span`
  font-size: 14px;
`;

const Element = ({ todo }) => {
  const colors = ["#CCDFEC", "#F9AB47", "#D96242", "#A13A34", "#D24D55"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <Card style={{ background: color }}>
      <div>
        <Bold>Title: </Bold>
        <Size>{todo.title}</Size>
      </div>
      <div>
        <Bold>Complited: </Bold>
        <Size>{todo.completed === true ? "Yes" : "No"}</Size>
      </div>
    </Card>
  );
};

export default Element;
