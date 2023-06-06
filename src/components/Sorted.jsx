// компонент сортировки
// реализую сортировку по возрастанию и убыванию
//сортировка на текущей странице

import PropTypes from "prop-types";
import React from "react";
import Form from "react-bootstrap/Form";

const Sorted = ({ setSortType }) => {
    const handleChange = (e) => {
        setSortType(e.target.value);
    };
    return (
        <Form.Select
            onChange={handleChange}
            size="sm"
            aria-label="Default select example"
            className="bg-info"
        >
            <option>Сортировка</option>
            <option value="up">A - z</option>
            <option value="down">Z - a</option>
        </Form.Select>
    );
};
Sorted.propTypes = {
    setSortType: PropTypes.func,
};
export default Sorted;
