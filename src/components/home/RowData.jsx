import React from "react";
import { Link } from "react-router-dom";
import { Td } from "../style/tableStyle";

const RowData = ({ user }) => {
  return (
    <tr>
      <Td>{user.id}.</Td>
      <Td>
        <Link
          style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
          to={`/todo/${user.id}`}
        >
          {user.name}
        </Link>
      </Td>
      <Td>{user.email}</Td>
    </tr>
  );
};

export default RowData;
