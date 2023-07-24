import React, { useState } from 'react';
import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { deleteToDo, editTodo } from '../redux/slices/todo.slice';
import { FaWindowClose } from "react-icons/fa";
import "../styles/styles.css";

const ListTodo = () => {
    const { todoList } = useSelector((state) => state.toDo);
    const dispatch = useDispatch();
    const [isEditing, setEditing] = useState(false);
    const [state, setState] = useState({
        id: '', content: '', contentError: null
    });
    const onFinishTodo = (id, content) => {
        dispatch(editTodo({ id }))
    }
    const handleChange = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value,
            [`${e.target.name}Error`]: null
        });
    }
    const { content, contentError, id } = state;

    return <div>
        {
            <ul className='todos'>
                {todoList.length == 0 && (
                    <li
                        style={{
                            textAlign: "center",
                            display: "block",
                            padding: "5px 0 10px",
                            borderBottom: "1px solid gainsboro",
                        }}
                    >
                        Adicione sua primeira tarefa {":)"}
                    </li>
                )}
                {todoList.map(({ id, content, done }) => (
                    <li key={id}>
                        <span className={done ? "completed" : ""}  onClick={() => onFinishTodo(id, content)} >
                            {content}
                        </span>
                        <button
                            className='btn'
                            onClick={() => dispatch(deleteToDo({ id }))}
                        >
                            <FaWindowClose className='icon-delete' />
                        </button>
                    </li>
                ))}
            </ul>
        }
    </div>;
};
export default ListTodo;