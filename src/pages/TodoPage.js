import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { FilterContext } from "../components/FilterContext";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTodoByUserId } from "../redux/actions/todosActions";
import styled from "styled-components";
import Filter from "../components/todo/Filter";
import Element from "../components/todo/Element";
import LoadingSpiner from "../components/Loading";
import BackButton from "../components/todo/BackButton";
import filterTodo from "../functions/filterTodo";

const Container = styled.section`
  min-height: 100vh;
  min-wight: 100vw;
  padding: 5%;
`;

const TodosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  padding-top: 5%;
  gap: 30px;
`;

const SmallContainer = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  gap: 30px;
`;

function TodoPage() {
  const { filter, setFilter } = useContext(FilterContext);
  const { id } = useParams();

  const dispatch = useDispatch();
  const [todos, setTodos] = useState(null);

  const { object, loading, error } = useSelector(
    (state) => state.getTodoByUserId
  );

  useLayoutEffect(() => {
    dispatch(getTodoByUserId(id));
    setFilter("default");
  }, []);

  useEffect(() => {
    if (object !== null && object !== undefined && loading === false) {
      const filtred = filterTodo(object, filter);
      filtred.length > 0
        ? setTodos(filterTodo(object, filter))
        : setTodos(false);
    } else {
      setTodos(null);
    }
  }, [object, loading, filter]);

  return (
    <Container>
      {todos !== null ? (
        <>
          <SmallContainer>
            <BackButton />
            <Filter />
          </SmallContainer>
          <TodosContainer>
            {todos.length > 0 ? (
              todos.map((todo) => {
                return <Element key={todo.id} todo={todo} />;
              })
            ) : (
              <div style={{ color: "red", fontweight: "bold" }}>
                There is no such information
              </div>
            )}
          </TodosContainer>
        </>
      ) : (
        <LoadingSpiner />
      )}
    </Container>
  );
}

export default TodoPage;
