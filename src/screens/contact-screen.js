import { Suspense } from 'react';
import { connect } from 'react-redux';

import ContactComponent from '~/components/contact-component';

import {
    IncreaseContainerCounter,
    SetContainerDetails,
} from '~/reducers/container-reducer';
import { AddTodo } from '~/reducers/counter-reducer';

const ContactScreen = (props) => {
    console.log('contact screens re-render');
    return (
        <>
            <div>ContactScreen</div>
            <Suspense fallback={<h1>Spinner....</h1>}>
                <ContactComponent />
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
                    <button onClick={() => props.IncreaseContainerCounter()}>
                        Increase Count:{props.counter}
                    </button>
                    <button onClick={() => props.Increment_Counter()}>
                        Increase Count:{props.counter}
                    </button>
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
