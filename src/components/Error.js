import styles from './Error.module.css';

const Error = ({ refetch, isNothingFound }) =>  (
    <div className={styles.error}>
        <div className={styles.error_text}>
            {isNothingFound
                ? "По Вашому запиту не знайдено жодного репозиторія"
                : "Something went wrong ..."
            }
        </div>
        {!isNothingFound && (
            <button
                className={styles.error_button}
                onClick={() => refetch()}
            >
                Try again
            </button>
        )}
    </div>
)

export default Error;
