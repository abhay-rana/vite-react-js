import { useEffect } from 'react';

const TaskDetailsScreen = () => {
    useEffect(() => {
        return () => {
            console.log('component is unmounted');
        };
    }, []);
    return (
        <>
            <div className="flex flex-row gap-4">
                <div>
                    <p>This is task details screen</p>
                </div>
                <div>task details</div>
            </div>
        </>
    );
};

export default TaskDetailsScreen;
