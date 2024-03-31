import { Suspense } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Button, ContactComponent } from '~/components';
import { useAppSelector, useDebounce, useLoader } from '~/hook';

import ComponentOne from '~/components/component-one';

import {
    IncreaseContainerCounter,
    SetContainerDetails,
} from '~/reducers/container-reducer';
import { AddTodo } from '~/reducers/counter-reducer';

const ContactScreen = (props) => {
    console.log('contact screens re-render');
    useDebounce();
    const store = useAppSelector((state) => ({}));
    const [loader, startLoader, endLoader] = useLoader();
    return (
        <>
            <div>ContactScreen</div>
            <Suspense fallback={<h1>Spinner....</h1>}>
                <ContactComponent />
                <ComponentOne />
            </Suspense>
            <div className="border border-success">
                <div className="flex flex-col gap-4">
                    <input
                        value={props.name}
                        placeholder="enter name"
                        onChange={(event) =>
                            props.SetContainerDetails(
                                'name',
                                event.target.value
                            )
                        }
                    />
                    <input
                        value={props.city}
                        placeholder="enter city"
                        onChange={(event) =>
                            props.SetContainerDetails(
                                'city',
                                event.target.value
                            )
                        }
                    />
                    <Button onClick={() => props.IncreaseContainerCounter()}>
                        Increase Count:{props.counter}
                    </Button>
                    <Button onClick={() => props.Increment_Counter()}>
                        Increase Count:{props.counter}
                    </Button>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    console.log('runs this');
    return {
        // name: state.container_store.name,
        // city: state.container_store.city,
        // counter: state.container_store.counter,
        counter: state.counter_store.counter,
    };
};
const mapDispatchToProps = (dispatch) => ({
    SetContainerDetails: (key, value) =>
        dispatch(SetContainerDetails({ key, value })),
    IncreaseContainerCounter: () => dispatch(IncreaseContainerCounter()),
    Increment_Counter: () => dispatch(AddTodo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactScreen);
