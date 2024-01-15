import { ChangeEvent, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { changeTitle, removeTodo, toggleComplete } from 'store/todoSlice';

import { ITodo } from 'models/todo.model';

import { Button, Subtitle } from 'assets/styles/globalStylesComponents';
import { CompletedText, Wrapper, WrapperBtns, WrapperCheckbox, CssTextField } from './Todo.styled';

const Todo = ({ id, title, completed }: ITodo) => {
    const [edit, setEdit] = useState(false);
    const [error, setError] = useState(false);
    const [todoTitle, setTodoTitle] = useState(title);

    const dispatch = useAppDispatch();

    const handleDispatch = (id: string) => {
        dispatch(toggleComplete(id));
    };

    const deleteTodo = (id: string) => {
        dispatch(removeTodo(id));
    };

    const editTitle = () => {
        setEdit(true);
        setError(false);
    };

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTodoTitle(e.target.value);
    };

    const cancelEdit = () => {
        setEdit(false);
        setError(false);
        setTodoTitle(title);
    };

    const updateTodoTitle = (id: string, title: string) => {
        const update = { id, title };

        if (title.length > 0) {
            dispatch(changeTitle(update));
            setEdit(false);
            setError(false);
        }

        setError(true);
    };

    return (
        <Wrapper>
            {edit ? (
                <CssTextField
                    id='outlined-basic'
                    variant='outlined'
                    size='small'
                    color='secondary'
                    focused
                    value={todoTitle}
                    onChange={handleChangeTitle}
                    error={error}
                    helperText={error && 'this field can not be empty'}
                />
            ) : (
                <WrapperCheckbox>
                    <Checkbox
                        checked={completed}
                        onChange={() => handleDispatch(id)}
                        size='medium'
                        sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                            '& .MuiSvgIcon-root': { fontSize: 35 },
                        }}
                    />
                    {completed ? <CompletedText>{title}</CompletedText> : <Subtitle>{title}</Subtitle>}
                </WrapperCheckbox>
            )}
            {edit ? (
                <WrapperBtns>
                    <Button onClick={cancelEdit}>cancel</Button>
                    <Button onClick={() => updateTodoTitle(id, todoTitle)}>save</Button>
                </WrapperBtns>
            ) : (
                <WrapperBtns>
                    <Button onClick={editTitle}>edit</Button>
                    <Button onClick={() => deleteTodo(id)}>delete</Button>
                </WrapperBtns>
            )}
        </Wrapper>
    );
};

export default Todo;
