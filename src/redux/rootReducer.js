const defaultState = {town: 'Санкт-Петербург', chosenDate: 'сегодня'};

export const rootReducer = (state = defaultState, action) => {
    switch (action.type) {

        case 'SET_TOWN':
            return {...state, town: action.town};

        default:
            return state;
    }
}