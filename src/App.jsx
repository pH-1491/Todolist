import { useState } from 'react';
import styles from './App.module.css';
import AppName from './components/AppName';
import AddToDo from './components/AddToDo';
import ToDoItems from './components/ToDoItems';

function App() {
    const activity = [
        { name: "Buy Milk", dueDate: "2025-08-04" },
        { name: "Go to College", dueDate: "2025-07-30" },
        { name: "Eat Pizza", dueDate: "2025-07-29" },
        { name: "Go to Mess", dueDate: "2025-07-28" },
        { name: "Eat Fruits", dueDate: "2025-07-31" }
    ];

    const [todoItems, setTodoItems] = useState(activity);

    const handleNewItem = (itemName, itemDate) => {
        const newItem = { name: itemName, dueDate: itemDate };
        setTodoItems(prev => [...prev, newItem]);
    };

    const handleDeleteItem = (todoItemName) => {
        setTodoItems(prev => prev.filter(item => item.name !== todoItemName));
    };

    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <AppName />
                <AddToDo onNewItem={handleNewItem} />
                <ToDoItems activity={todoItems} onDeleteClick={handleDeleteItem} />
            </div>
        </div>
    );
}

export default App;