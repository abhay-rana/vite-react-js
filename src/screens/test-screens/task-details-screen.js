import { useEffect } from 'react';
import { useLocation, useParams, useSearch } from 'wouter';

const TaskDetailsScreen = () => {
    const { id } = useParams();
    const search = useSearch();
    const [location, setLocation] = useLocation();
    useEffect(() => {
        return () => {
            console.log('component is unmounted');
        };
    }, []);
    console.log('id', id);
    console.log('search', search);
    function changeRoute() {
        setLocation('/task-details/1923?search=abhay', {
            replace: true,
        });
    }
    function handleChange(event) {
        setLocation(`?name=${event.target.value}`, { replace: true });
    }
    return (
        <>
            <div className="flex flex-row gap-4">
                <div>
                    <p>This is task details screen</p>
                </div>
                <div>task details</div>
                <button onClick={changeRoute}>Change Route</button>
                <div className="flex flex-col gap-2">
                    <input onChange={handleChange} placeholder="Enter Inputs" />
                </div>
                <ComponentTest />
            </div>
        </>
    );
};

const ComponentTest = () => {
    const { id } = useParams();
    console.log('ids', id);
    return (
        <>
            <div>ComponentTest</div>
        </>
    );
};

export default TaskDetailsScreen;
