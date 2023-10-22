import React, { useState } from 'react';
import { InputGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from '../../common/Button/Button';

const Search = () => {
    const navigate = useNavigate();
    const [searched, setSearched] = useState("");

    const handleSubmit = () => {
        console.log('AAA')
        navigate(`/search/${searched}`);
    };
    return (
        <div className="d-flex justify-content-between mb-3">
            <div>
                <InputGroup className="mb-1">
                    <Form.Control
                    type="text"
                    placeholder="search phrase..."
                    value={searched}
                    onChange={(e) => setSearched(e.target.value)}
                    />
                    <Button onClick={handleSubmit}>
                        Search
                    </Button>
                </InputGroup>
            </div>
        </div>
    )
}
export default Search;