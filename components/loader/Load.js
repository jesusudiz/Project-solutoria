import styles from "./Load.module.css";

export function Load() {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <div className={styles['leap-frog']}>
                <div className={styles['leap-frog__dot']}></div>
                <div className={styles['leap-frog__dot']}></div>
                <div className={styles['leap-frog__dot']}></div>
            </div>
        </div>
    );
}
