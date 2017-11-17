const initialState = {
    appName: 'React Places',
    places: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
      case 'HOME_PAGE_LOADED':
        return null
    }
  
    return state;
  
};

export default reducer;

