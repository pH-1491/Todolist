import styles from './ToDoItem.module.css';

const ToDoItem = ({ todoName, dueDate, onDeleteClick, isOverdue }) => {
    const handleDelete = () => {
        onDeleteClick(todoName);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const itemClasses = `${styles.todoItem} ${isOverdue ? styles.todoItemOverdue : ''}`;
    const nameClasses = `${styles.itemName} ${isOverdue ? styles.itemNameOverdue : ''}`;
    const badgeClasses = `${styles.dateBadge} ${isOverdue ? styles.dateBadgeOverdue : ''}`;

    return (
        <div className={itemClasses}>
            <div className={styles.itemContent}>
                <div className={styles.itemDetails}>
                    <h3 className={nameClasses}>
                        {todoName}
                    </h3>
                    <div className={styles.dateContainer}>
            <span className={badgeClasses}>
              {isOverdue ? '⚠️ Overdue' : '📅'} {formatDate(dueDate)}
            </span>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={handleDelete}
                    className={styles.deleteButton}
                >
                    🗑️ Delete
                </button>
            </div>
        </div>
    );
};

export default ToDoItem;