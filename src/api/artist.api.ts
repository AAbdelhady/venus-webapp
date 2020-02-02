import axios from '../axios';

const root = 'artist';

export const registerAsArtist = () => {
    const url = `${root}`;
    return axios.post(url, {});
};