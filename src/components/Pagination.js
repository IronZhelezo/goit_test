import clsx from 'clsx';

import styles from './Pagination.module.css';

const Pagination = ({ totalCount, page, perPage, setPage }) =>  {
    const maxButtons = 8;
    const lastPage = Math.ceil(totalCount / perPage);

    if (lastPage <= 1) {
        return null;
    }

    const isALotPages = lastPage > maxButtons;
    const buttonsCount = lastPage >= maxButtons ? maxButtons : lastPage;
    const pageButtons = new Array(buttonsCount).fill('');
    let firstShowedButton = page > 5 && isALotPages ? page - 4 : 1;
    if (isALotPages && (firstShowedButton > lastPage - 7)) {
        firstShowedButton = lastPage - 7;
    }

    const setPrevPage = () => setPage((p) => p !== 1 ? page - 1 : 1);
    const setNextPage = () => setPage((p) => p !== lastPage ? page + 1 : lastPage);

    return (
        <div className={styles.Pagination}>
            <button
                onClick={setPrevPage}
                disabled={page === 1}
                className={clsx(styles.Button, styles.Button___prev)}
            >
                Previous
            </button>
            {pageButtons.map((_, i) => {
                const numberOfPage = i + firstShowedButton;
                const isActive = page === numberOfPage;

                return (
                    <button
                        onClick={() => setPage(numberOfPage)}
                        className={
                            clsx(
                                styles.Button,
                                styles.Button___number,
                                isActive && styles.Button___active
                            )
                        }
                        key={`pagination-button-${numberOfPage}`}
                    >
                        {numberOfPage}
                    </button>

                )
            })}
            <button
                onClick={setNextPage}
                disabled={page === lastPage}
                className={clsx(styles.Button, styles.Button___next)}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
