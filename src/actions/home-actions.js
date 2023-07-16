import debounce from "lodash.debounce";

export const HomeGetInitialData = (url) => {
    let status = 'pending';
    // return fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));
};

const _debouncedSearchValue=debounce((dispatch)=>dispatch(SearchValue()),300)

export const SetSearch = (key, value) => (dispatch) => {
    dispatch({ type: 'SET_SEARCH', key, value });
    if(value!="") _debouncedSearchValue(dispatch)
};

export const SearchValue=()=>(dispatch,getState)=>{
    const {search}=getState().search_action;
    fetch("search");
}