// компонент поиска по заголовкам постов
import PropTypes from "prop-types";
import { useRef } from "react";
import { InputGroup, Form, CloseButton } from "react-bootstrap";
const Search = ({ setSearchTitle }) => {
    const refInput = useRef(null);
    const handleSearchInputChange = () => {
        setSearchTitle(refInput.current.value);
    };
    const clearSearchInput = () => {
        setSearchTitle("");
        refInput.current.value = "";
    };
    return (
        <InputGroup className="my-2">
            <Form.Control
                type="text"
                placeholder="Поиск по названию"
                onChange={handleSearchInputChange}
                ref={refInput}
            />
            <InputGroup.Text className="bg-info">
                <CloseButton onClick={clearSearchInput} />
            </InputGroup.Text>
        </InputGroup>
    );
};
Search.propTypes = {
    setSearchTitle: PropTypes.func,
};
export default Search;
