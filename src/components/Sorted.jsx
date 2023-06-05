// компонент сортировки 
import React from "react";
import Form from 'react-bootstrap/Form';
const Sorted = ({handleChansge}) => {
  
   return (
    <Form.Select onChange={handleChansge} size="sm" aria-label="Default select example"
    className="bg-info">
      <option>Сортировка</option>
      <option value="up" >По возрастанию</option>
      <option value="down" >По убыванию</option>
    </Form.Select>
  );
};
export default Sorted;