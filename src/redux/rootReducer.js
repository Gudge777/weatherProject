const defaultState = {
    editedTown: 'Москва',
    town: 'Москва',
    chosenDate: 'сегодня',
    latitude: 55.45,
    longitude: 37.36,
};

export const rootReducer = (state = defaultState, action) => {
    switch (action.type) {

        case 'SET_EDITED_TOWN':
            return {...state, editedTown: action.editedTown};

        case 'SET_LOCATION':
            return {
                ...state,
                town: action.town,
                latitude: action.latitude,
                longitude: action.longitude,
            };

        default:
            return state;
    }
}