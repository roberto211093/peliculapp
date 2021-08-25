import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'cdef3bdcce3546a61c9f6a3d135f244a',
    language: 'es-ES',
  },
});

export default movieDB;
