import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FilterContext } from "../FilterContext";

const Filter = () => {
  const { setFilter } = useContext(FilterContext);

  return (
    <div>
      <Dropdown style={{ zindex: "3", position: "relative" }}>
        <Dropdown.Toggle
          id="dropdown"
          style={{
            color: "black",
            backgroundColor: "transparent",
            border: "1px dashed grey",
            fontSize: "18px",
            borderRadius: "10px",
          }}
        >
          Filtter
        </Dropdown.Toggle>

        <Dropdown.Menu
          style={{
            borderRadius: "18px",
            backgroundColor: "#bdbebd",
          }}
        >
          <Dropdown.Item
            style={{
              borderRadius: "10px 10px 0px 0px",
            }}
            onClick={() => setFilter("default")}
          >
            All
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setFilter("complited")}>
            Complited
          </Dropdown.Item>
          <Dropdown.Item
            style={{
              borderRadius: "0px 0px 10px 10px",
            }}
            onClick={() => setFilter("notcomplited")}
          >
            Not complited
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Filter;
