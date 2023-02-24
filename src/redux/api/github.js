import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubAPI = createApi({
    reducerPath: 'repos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/',
    }),
    endpoints: (builder) => ({
        searchRepos: builder.query({
            query: ({ q, page, perPage }) => ({
                url: 'search/repositories',
                params: {
                    q,
                    per_page: perPage,
                    page,
                }
            }),
            transformResponse: ({ items, total_count: totalCount }) => ({
                totalCount,
                items: items.map((item) => ({
                    ...item,
                    author: item.owner.login,
                    stars: item.stargazers_count,
                    watchers: item.watchers_count,
                })),
            })
        })
    })
});

export const { useSearchReposQuery } = githubAPI;
