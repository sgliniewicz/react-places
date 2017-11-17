export const HOME_PAGE_LOAD = 'HOME_PAGE_LOAD';
export const FETCH_PLACES = 'FETCH_PLACES';

export const searchPlaces = (places) => {
    return {
        //unique identifier
        type: 'SEARCH_PLACES',
        //payload
        places: places
    }
}

const fetchPlaces = (url) => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        // Here you get the data to modify as you please
        console.log(data)
    });
}

