
export const rootReducer = (state = {town: 'Санкт-Петербург'}, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_TOWN':
            state.town = action.town;
            return state;

        default:
            return state;
    }
}