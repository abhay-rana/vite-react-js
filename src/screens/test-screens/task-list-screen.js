/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'wouter';

const TaskListScreen = () => {
    const [state, setsState] = useState('');
    const [_, setLocation] = useLocation();
    useEffect(() => {}, []);
    return (
        <>
            <div className="flex flex-col gap-4">
                <div>
                    <p className="text-18 font-extrabold">Task Lists Screen</p>
                </div>
                <div>
                    go to task details screen
                    <Link href="/contact" target="_blank">
                        <a target="_blank">
                            <button
                            // onClick={() => setLocation('/tasks-details/123')}
                            >
                                goto
                            </button>
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/contact">
                        <p>Link Tag</p>
                    </Link>
                </div>
                <div>
                    <Link href="/contact">Link Tag</Link>
                </div>
                <div>
                    <a href="https://www.facebook.com">Facebook</a>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListScreen);
TaskListScreen.displayName = 'TaskListScreen';

//agar mere passs link tag hai toh voh redirect nahi ho raha externall sites par
//agar mere pass link tag haoi toh voh use ek url ki tarah  treat nahi kar raha sirf app main rediret ji kar raha hai as setLocation
//i have to customize the link component so it works well with the internal links and the outer links
//it treat all the links as the links wheter it is internal or external
// i dont use the a href tag for the internal links as it reloads the page
// so in that case wrap the ahref tag with the link tag with the url to the link tag
// as the browser detects the ahref tag
