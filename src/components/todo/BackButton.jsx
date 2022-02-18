import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  color: black;
  background-color: transparent;
  border: 1px dashed grey;
  font-size: 18px;
  border-radius: 10px;
  padding: 0px 20px 0px 20px;
`;

const BackButton = () => {
  const navigate = useNavigate();

  function clickHandler(event) {
    event.preventDefault();
    navigate("/");
  }

  return <Button onClick={(event) => clickHandler(event)}> Back </Button>;
};

export default BackButton;
