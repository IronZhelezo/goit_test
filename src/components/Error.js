import styles from './Error.module.css';

const Error = ({ refetch }) =>  (
    <div className={styles.error}>
        <div className={styles.error_text}>
            Something went wrong ...
        </div>
        <button
            className={styles.error_button}
            onClick={() => refetch()}
        >
            Try again
        </button>
    </div>
)

export default Error;
