import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Todos() {

    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Fetch all tasks
    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8000/api/todos/'
            );

            setTasks(response.data);
            console.log(response.data);

        } catch (error) {
            console.log('error', error);
        }
    };

    // Add task
    const addTask = async () => {
        try {

            if (inputValue.trim() !== '') {

                const response = await axios.post(
                    'http://localhost:8000/api/todos/add/',
                    {
                        title: inputValue,
                        completed: false
                    }
                );

                setTasks([...tasks, response.data]);
                setInputValue('');
            }

        } catch (error) {
            console.log('error', error);
        }
    };

    // Mark task as completed
    const toggleCompleted = async (taskId) => {

        try {

            const taskToUpdate = tasks.find(
                task => task.id === taskId
            );

            if (taskToUpdate) {

                const response = await axios.put(
                    `http://localhost:8000/api/todos/${taskId}/update/`,
                    {
                        completed: !taskToUpdate.completed
                    }
                );

                const updatedTasks = tasks.map(task =>
                    task.id === taskId
                        ? {
                            ...task,
                            completed: response.data.completed
                        }
                        : task
                );

                setTasks(updatedTasks);
            }

        } catch (error) {
            console.log('error', error);
        }
    };

    // Delete task
    const deleteTask = async (taskId) => {

        try {

            await axios.delete(
                `http://localhost:8000/api/todos/${taskId}/delete/`
            );

            setTasks(
                tasks.filter(task => task.id !== taskId)
            );

        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <div className="container">

            <div className="todo-app">

                <div className="app-title">

                    <h2>To-do app</h2>

                    <i className="fa-solid fa-book-bookmark"></i>

                </div>

                <div className="row">

                    <input
                        type="text"
                        id="input-box"
                        placeholder="add your tasks"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />

                    <button onClick={addTask}>
                        Add
                    </button>

                </div>

                <ul id="list-container">

                    {tasks.map((task) => (

                        <li
                            key={task.id}
                            className={task.completed ? 'checked' : ''}
                        >

                            <span
                                onClick={() => toggleCompleted(task.id)}
                            >
                                {task.completed
                                    ? <del>{task.title}</del>
                                    : task.title
                                }
                            </span>

                            <button
                                onClick={() => deleteTask(task.id)}
                            >
                                Delete
                            </button>

                        </li>

                    ))}

                </ul>

            </div>

        </div>
    );
}