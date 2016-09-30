import axios from 'axios';

const ALBUMS_URL = 'http://rallycoding.herokuapp.com/api/music_albums';

export const getAlbums = () => axios.get(ALBUMS_URL);
