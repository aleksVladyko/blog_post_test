// компонент сортировки 
import React from "react";
import Form from 'react-bootstrap/Form';
const Sorted = ({handleChansge}) => {
  
   return (
    <Form.Select onChange={handleChansge} size="sm" aria-label="Default select example"
    className="bg-info">
      <option>Сортировка</option>
      <option value="asc" >По возрастанию</option>
      <option value="desc" >По убыванию</option>
    </Form.Select>
  );
};
export default Sorted;