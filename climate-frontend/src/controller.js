import { fetchData } from './api';

export const get_country_data = (country) => {
    return fetchData('/country/' + country)
}

export const get_static_data = (static_path) => {
    return fetchData('/static/' + static_path)
}