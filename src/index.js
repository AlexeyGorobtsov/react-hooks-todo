import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';

import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import useTodosState from './useTodoState';
import './styles.css';

const App = () => {
    const { todos, addTodo, deleteTodo } = useTodosState([]);
    return (
        <div className={'App'}>
            <Typography component={'h1'} variant={'h2'}>
                Todos
            </Typography>
            <TodoForm saveTodo={todoText => {
                const trimmedText = todoText.trim();
                trimmedText.length > 0 ? addTodo([...todos, trimmedText]) : false;
            }}/>
            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
            />
        </div>
    )
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);