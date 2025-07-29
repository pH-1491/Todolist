import { useState } from 'react';
import styles from './AddToDo.module.css';

const AddToDo = ({ onNewItem }) => {
    const [todoName, setTodoName] = useState('');
    const [todoDate, setTodoDate] = useState('');

    const handleNameChange = (e) => setTodoName(e.target.value);
    const handleDateChange = (e) => setTodoDate(e.target.value);

    const handleAddButtonClick = () => {
        if (todoName.trim() && todoDate) {
            onNewItem(todoName.trim(), todoDate);
            setTodoName('');
            setTodoDate('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddButtonClick();
        }
    };

    return (
        <div className={styles.addTodoContainer}>
            <h2 className={styles.sectionTitle}>Add New Task</h2>
            <div className={styles.inputGroup}>
                <div className={styles.inputRow}>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            placeholder="What needs to be done?"
                            value={todoName}
                            onChange={handleNameChange}
                            onKeyPress={handleKeyPress}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.dateContainer}>
                        <input
                            type="date"
                            value={todoDate}
                            onChange={handleDateChange}
                            onKeyPress={handleKeyPress}
                            className={styles.input}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleAddButtonClick}
                        disabled={!todoName.trim() || !todoDate}
                        className={styles.addButton}
                    >
                        ✨ Add Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddToDo;