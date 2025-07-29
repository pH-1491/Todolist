import styles from './AppName.module.css';

const AppName = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>📝 My Todo List</h1>
            <p className={styles.subtitle}>Stay organized and productive</p>
        </div>
    );
};

export default AppName;