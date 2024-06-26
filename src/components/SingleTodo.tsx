import React from 'react';
import { Todo } from '../model';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import "./styles.css";

type Props={
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function SingleTodo({todo, todos, setTodos}: Props) {
  return (
    <form className='todos__single'>
        <span className='todos__single--text'>
            {todo.todo}
            <div>
                <span className='icon'>
                    <AiFillDelete/>
                </span>
                <span className='icon'>
                    <AiFillEdit/>
                </span>
                <span className='icon'>
                    <MdDone/>
                </span>
            </div>
        </span>
    </form>
  )
}

export default SingleTodo