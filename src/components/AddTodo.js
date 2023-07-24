import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from 'react-redux';
import { addToDo } from '../redux/slices/todo.slice';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaPlus } from "react-icons/fa";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        content: '',
        contentError: null
    });
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
            [`${e.target.name}Error`]: null
        });
    }
    const add = () => {
        if (content === '') {
            setState({
                ...state,
                contentError: 'Não pode ficar vazio !!'
            });
            return;
        }
        dispatch(addToDo({ newContent: content }));
        setState({ ...state, content: '' });
    }
    const { content, contentError } = state;
    return (
        <div className='addForm'>
        <InputGroup className="mb-2">
                <Form.Control
                    type='text' name='content' value={content} 
                    onChange={handleChange}
                    placeholder="O que você precisa fazer?"
                />
                <Button onClick={add} style={{backgroundColor: "#fcbf49", border: "none"}} id="button-addon2">
                    <FaPlus /> Adicionar
                </Button>
                
            </InputGroup>
            {contentError ? <div className='error'>{contentError}</div> : null}
        </div>
    )
};
export default AddTodo;