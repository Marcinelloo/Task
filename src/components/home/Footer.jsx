import React, { useContext } from "react";
import styled from "styled-components";
import { DisplayContext } from "../DisplayContext";

const Button = styled.button`
  background-color: #2a3132;
  border: none;
  align: right;
  color: white;
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  border-radius: 20px;
`;

const Box = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  gap: 20px;
  align: right;
  color: white;
  font-weight: bold;
`;

const Footer = ({ size }) => {
  const { startNumber, setStartNumber, endNumber, setEndNumber } =
    useContext(DisplayContext);

  function nextHandler(event) {
    event.preventDefault();
    if (size > endNumber) {
      setStartNumber(() => startNumber + 6);
      setEndNumber(() => endNumber + 6);
    }
  }

  function priviousHandler(event) {
    event.preventDefault();
    if (startNumber >= 6) {
      setStartNumber(() => startNumber - 6);
      setEndNumber(() => endNumber - 6);
    }
  }

  return (
    <tr>
      <td colSpan={3}>
        <Box>
          <Button onClick={(event) => priviousHandler(event)}>
            {"Previous page"}
          </Button>
          <Button onClick={(event) => nextHandler(event)}>{"Next page"}</Button>
        </Box>
      </td>
    </tr>
  );
};

export default Footer;
