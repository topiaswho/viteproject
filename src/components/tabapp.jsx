import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TodoList from "../TodoList";

function TabApp() {
    const [value, setValue] = useState('home'); 

    const handleChange = (event, newValue) => {
        if (newValue !== value) {
            setValue(newValue);
        }
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="home" label="Home" />
                <Tab value="todolist" label="Todolist" />
            </Tabs>
            {value === 'home' && (
                <div>
                    <h2>Home</h2>
                    <p>Tervetuloa kotisivulle!</p>
                </div>
            )}
            {value === 'todolist' && value !== 'home' && <TodoList />}
        </div>
    );
}

export default TabApp;
