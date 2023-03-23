import { useState, useEffect } from 'react';
import styles from './GitHubSearh.module.css';
import { useSearchReposQuery } from '../redux/api/github';

import Item from '../components/Item';
import Pagination from '../components/Pagination';
import Error from '../components/Error';
import Loading from '../components/Loading';

const GitHubSearh = () => {
    const [searchText, setSearchText] = useState('react');
    const [debounced, setDebounced] = useState('');
    const [page, setPage] = useState(1);
    const perPage = 20;
    const { isLoading, isError, data, refetch } =
        useSearchReposQuery(
            { q: debounced, page, perPage },
            { skip: !debounced },
        );

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounced(searchText);
            setPage(1);
        }, 300);
        return () => clearTimeout(timeout);
    }, [searchText]);

    const isListVisible = !isLoading && !isError && !!(debounced && data?.items?.length);
    const isNothingFound = !isLoading && !isError && !!(debounced && !data?.items?.length);
    const isErrorShowing = isError || isNothingFound;

    return (
        <div className={styles.page}>
            <input
                onChange={({ target: { value } }) => setSearchText(value)}
                defaultValue={searchText}
                className={styles.input}
                placeholder="Search"
            />
            {isListVisible && data?.items?.map((item) => (
                <Item key={`repo-${item.id}`} data={item} />
            ))}
            {isListVisible && (
                <Pagination
                    totalCount={data?.totalCount}
                    page={page}
                    perPage={perPage}
                    setPage={setPage}
                />
            )}
            {isErrorShowing && <Error refetch={refetch} isNothingFound={isNothingFound} />}
            {isLoading && <Loading />}
        </div>
    );
}

export default GitHubSearh;
