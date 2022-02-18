import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { DisplayContext } from "../components/DisplayContext";
import ColumnName from "../components/home/ColumnName";
import Footer from "../components/home/Footer";
import RowData from "../components/home/RowData";
import LoadingSpiner from "../components/Loading";
import { Table } from "../components/style/tableStyle";
import { getAllUsers } from "../redux/actions/userActions";

const Container = styled.section`
  min-height: 100vh;
  min-wight: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function HomePage() {
  const { startNumber, endNumber } = useContext(DisplayContext);

  const dispatch = useDispatch();
  const [users, setUsers] = useState(null);

  const { object, loading } = useSelector((state) => state.getAllUsers);

  useLayoutEffect(() => {
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    if (
      object !== null &&
      object !== undefined &&
      loading === false 
    ) {
      setUsers(object);
    } else {
      setUsers(null);
    }
  }, [object, loading]);

  return (
    <Container>
      {users !== null ? (
        <Table>
          <thead>
            <ColumnName />
          </thead>
          <tbody>
            {users !== null
              ? users.map((user) => {
                  if (user.id > startNumber && user.id <= endNumber) {
                    return <RowData key={user.id} user={user} />;
                  }
                  return null;
                })
              : null}
          </tbody>
          <tfoot>
            {users !== null ? <Footer size={users.length} /> : null}
          </tfoot>
        </Table>
      ) : (
        <LoadingSpiner />
      )}
    </Container>
  );
}

export default HomePage;
