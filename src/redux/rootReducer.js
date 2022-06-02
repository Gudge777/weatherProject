
export const rootReducer = (state = {town: 'Санкт-Петербург'}, action) => {
    switch (action.type) {
        case 'setTown':
            state.town = action.town;
            return state;

        default:
            return state;
    }
}