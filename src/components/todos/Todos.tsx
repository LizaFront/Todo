/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';

import { Todo, TodoField } from 'components';
import { Button, Title, Wrapper } from 'assets/styles/globalStylesComponents';
import { ActiveBtn, Count, CounterWrapper, WrapperBtns } from './todos.styled';

import { useAppSelector } from 'hooks/useAppSelector';
import { saveLocalStorage, selectTodos } from 'store/todoSlice';

import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';
import AssignmentTurnedInSharpIcon from '@mui/icons-material/AssignmentTurnedInSharp';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const Todos = () => {
    const dispatch = useAppDispatch();
    const myTodos = useAppSelector(selectTodos);
    const storage = localStorage.getItem('todos');

    const total = myTodos.length;
    const completed = myTodos.filter(todo => todo.completed === true).length;
    const progress = Math.round((completed * 100) / total);

    const sortedTodos = [...myTodos].sort(a => (a.completed === false ? -1 : 1));

    const [todos, setTodos] = useState(sortedTodos);
    const [statusAllTodo, setStatusAllTodo] = useState(false);
    const [statusActiveTodo, setStatusActiveTodo] = useState(false);
    const [statusCompletedTodo, setStatusCompletedTodo] = useState(false);

    const showAllTodo = () => {
        setTodos(sortedTodos);
        setStatusAllTodo(true);
        setStatusActiveTodo(false);
        setStatusCompletedTodo(false);
    };

    const showActiveTodo = () => {
        setTodos(sortedTodos.filter(todo => todo.completed === false));
        setStatusAllTodo(false);
        setStatusActiveTodo(true);
        setStatusCompletedTodo(false);
    };

    const showCompletedTodo = () => {
        setTodos(sortedTodos.filter(todo => todo.completed === true));
        setStatusAllTodo(false);
        setStatusActiveTodo(false);
        setStatusCompletedTodo(true);
    };

    useEffect(() => {
        setTodos(sortedTodos);
    }, [myTodos]);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        if (storage) {
        }
    }, [todos]);

    useEffect(() => {
        if (storage) {
            dispatch(saveLocalStorage(JSON.parse(storage)));
        }
    }, []);

    return (
        <Wrapper>
            <Title>Todont</Title>
            <TodoField />
            <WrapperBtns>
                {!statusAllTodo ? (
                    <Button onClick={showAllTodo}>show all tasks</Button>
                ) : (
                    <ActiveBtn>show all tasks</ActiveBtn>
                )}
                {!statusActiveTodo ? (
                    <Button onClick={showActiveTodo}>show Active tasks</Button>
                ) : (
                    <ActiveBtn>show Active tasks</ActiveBtn>
                )}
                {!statusCompletedTodo ? (
                    <Button onClick={showCompletedTodo}>show Completed tasks</Button>
                ) : (
                    <ActiveBtn>show Completed tasks</ActiveBtn>
                )}
            </WrapperBtns>
            <CounterWrapper>
                <Count>
                    <AssignmentSharpIcon color='secondary' />
                    {`All tasks: ${total}`}
                </Count>
                <Count>
                    <AssignmentTurnedInSharpIcon color='success' />
                    {`Completed tasks: ${completed}`}
                </Count>
                <Count>
                    <LocalFireDepartmentIcon color='error' />
                    {`Your progress: ${progress} %`}
                </Count>
            </CounterWrapper>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} />
            ))}
        </Wrapper>
    );
};

export default Todos;
