import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-hot-toast';
import { connect } from 'react-redux';
import { useLocation } from 'wouter';

import { DecrementCounter, IncrementCounter } from '~/actions/counter-actions';

const HomeScreen = (props) => {
    const [_, setLocation] = useLocation();
    return (
        <>
            <div className="flex flex-col border-2 border-black">
                This is HomeScreen running on vercel
                <div className="flex w-24 cursor-pointer flex-col gap-4">
                    <button
                        className="bg-blue-500 p-4"
                        onClick={() => setLocation('/about')}
                    >
                        Go To About
                    </button>
                    <button onClick={() => setLocation('/contact')}>
                        Go To Contact
                    </button>
                </div>
                <div>
                    <div className="">Counter Applications</div>
                    <button onClick={() => props.Increment_Counter()}>+</button>
                    {props.counter}
                    <button onClick={() => props.Decrement_Counter()}>-</button>
                </div>
                <div className="flex flex-col border-1 border-red-500">
                    <div className="text-center">Toast renderings</div>
                    <div className="flex flex-row gap-4">
                        <button
                            onClick={() => {
                                toast.dismiss();
                                toast('message');
                            }}
                        >
                            normal toast
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    counter: state.counter_store.counter,
});
const mapDispatchToProps = (dispatch) => ({
    Increment_Counter: () => dispatch(IncrementCounter()),
    Decrement_Counter: () => dispatch(DecrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

HomeScreen.propTypes = {
    Increment_Counter: PropTypes.func,
    Decrement_Counter: PropTypes.func,
    counter: PropTypes.number,
};
