import { memo, useEffect, useState } from 'react';
import {
    useAddTaskMutation,
    useGetTasksQuery,
    useUpdateTaskMutation,
} from '~/api-services/todo-services';

const TaskListScreen = () => {
    const [value, setValue] = useState('');
    const { data, isError, isFetching, isLoading, refetch, isSuccess } =
        useGetTasksQuery();
    const [addTask] = useAddTaskMutation();
    function createTask() {
        addTask({ description: value, status: false });
    }

    console.log({ isFetching, isLoading, data });
    if (isFetching) {
        return (
            <>
                <div>Loading...</div>
            </>
        );
    }

    return (
        <>
            <div className="text-center text-16">TaskListScreen</div>
            <div className="flex h-full w-full flex-row items-center justify-center">
                <div className="flex h-1/2 w-1/2 flex-col gap-2 border-2 bg-gray-200 p-4">
                    {/* creating a task */}
                    <div className="flex flex-row gap-2">
                        <div>
                            <input
                                value={value}
                                onChange={(event) =>
                                    setValue(event.target.value)
                                }
                                placeholder="Enter the task"
                            />
                        </div>
                        <div onClick={createTask}>Create Task</div>
                    </div>
                    {/* rendering of task */}
                    <TaskListWrapper data={data.data} />
                </div>
            </div>
        </>
    );
};

const TaskListWrapper = memo(({ data }) => {
    console.log('render tasklist wrapper');
    const [updateTasks] = useUpdateTaskMutation();
    function deleteTodos() {}

    function updateTodos(id, value) {
        updateTasks({ _id: id, status: value });
    }
    return (
        <>
            {data.map((item) => (
                <TaskListCard
                    key={item._id}
                    {...{ ...item, updateTodos, deleteTodos }}
                />
            ))}
        </>
    );
});

TaskListWrapper.displayName = 'TaskListWrapper';

const TaskListCard = memo(
    ({ description, status, _id, updateTodos, deleteTodos }) => {
        console.log('renders tasks list card');
        return (
            <>
                <div className="flex flex-row gap-2">
                    {/* checkbox */}
                    <div>
                        <input
                            type="checkbox"
                            checked={status}
                            onChange={(event) =>
                                updateTodos(_id, event.target.checked)
                            }
                        />
                    </div>
                    {/* task */}
                    <div>{description}</div>
                    {/* delete task */}
                    <div onClick={deleteTodos}>
                        <button>Delete</button>
                    </div>
                </div>
            </>
        );
    }
);

TaskListCard.displayName = 'TaskListCard';

export default memo(TaskListScreen);
