import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ProjectUrl } from '~/env';

export const todosApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: ProjectUrl }),
    tagTypes: ['Tasks'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/read-todos',
            providesTags: ['Tasks'],
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: '/create-todos',
                method: 'POST',
                body: task,
            }),
            invalidatesTags: ['Tasks'],
        }),
        updateTask: builder.mutation({
            query: (task) => ({
                url: '/update-todos',
                method: 'PATCH',
                body: task,
            }),
        }),
    }),
});

export const { useGetTasksQuery, useAddTaskMutation, useUpdateTaskMutation } =
    todosApi;
