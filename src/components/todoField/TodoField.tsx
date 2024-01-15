import { ChangeEvent, useState } from 'react';

import TextField from '@mui/material/TextField';
import { Wrapper, WrapperField } from './TodoField.styled';
import { Button } from 'assets/styles/globalStylesComponents';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { addTodo } from 'store/todoSlice';

const TodoField = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');

    const addNewTodo = (value: string) => {
        dispatch(addTodo(value));
        setValue('');
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    return (
        <Wrapper>
            <WrapperField>
                <TextField
                    placeholder='add todo...'
                    fullWidth
                    focused
                    color='secondary'
                    sx={{
                        '& .MuiOutlinedInput-input': {
                            color: '#FFF',
                        },
                    }}
                    size='small'
                    value={value}
                    onChange={handleChange}
                />
            </WrapperField>
            <Button onClick={() => addNewTodo(value)}>add</Button>
        </Wrapper>
    );
};

export default TodoField;
