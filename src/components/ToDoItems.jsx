import ToDoItem from './ToDoItem';
import styles from './ToDoItems.module.css';

const ToDoItems = ({ activity, onDeleteClick }) => {
    const today = new Date().toISOString().split('T')[0];

    if (activity.length === 0) {
        return (
            <div className={styles.todosContainer}>
                <div className={styles.emptyState}>
                    <div className={styles.emptyIcon}>🎉</div>
                    <h3 className={styles.emptyTitle}>All caught up!</h3>
                    <p className={styles.emptyDescription}>
                        No tasks to show. Add some tasks to get started.
                    </p>
                </div>
            </div>
        );
    }
    const sortedActivity = [...activity].sort((a, b) => {
        const isAOverdue = a.dueDate < today;
        const isBOverdue = b.dueDate < today;

        if (isAOverdue && !isBOverdue) return -1;
        if (!isAOverdue && isBOverdue) return 1;

        return new Date(a.dueDate) - new Date(b.dueDate);
    });

    return (
        <div className={styles.todosContainer}>
            <h2 className={styles.sectionTitle}>
                Your Tasks ({activity.length})
            </h2>
            <div className={styles.itemsList}>
                {sortedActivity.map((item) => (
                    <ToDoItem
                        key={`${item.name}-${item.dueDate}`}
                        dueDate={item.dueDate}
                        todoName={item.name}
                        onDeleteClick={onDeleteClick}
                        isOverdue={item.dueDate < today}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToDoItems;