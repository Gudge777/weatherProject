export const setGeolocation = (dispatch) => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const url = 'https://api.openweathermap.org/geo/1.0/reverse?lat=' +
                latitude + '&lon=' + longitude + '&limit=1&appid=c0ecb1be68cedc39289c37d85a655cb3';
            const response = await fetch(url);
            const townsArray = await response.json();
            let town;
            if (townsArray[0].local_names) {
                town = townsArray[0].local_names.ru;
            } else {
                town = townsArray[0].name;
            }
            const action = {
                type: 'SET_LOCATION',
                latitude: latitude,
                longitude: longitude,
                town: town
            };
            dispatch(action);
            console.log('Geolocation available')
        });
    } else {
        console.log("Geolocation not available");
    }
}

export const handleChangeTown = (town, dispatch) => {
    dispatch ({type: 'SET_EDITED_TOWN', town: town});
}