import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

export const TodoForm = ({saveTodo}) => {
    const [ value, setValue ] = useState([]);
    console.log(useState([]));

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                saveTodo(value);
            }}
        >
            <TextField
                variant={'outlined'}
                placeholder={'Add todo'}
                margin={'normal'}
                onChange={event => {
                    setValue(event.target.value);
                }}
                value={value}
            />
        </form>
    )
};