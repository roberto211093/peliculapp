/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {
  MovieDetail,
  MovieCastResponse,
  Cast,
} from '../interfaces/movieInterface';

interface MovieDetailState {
  isLoading: boolean;
  movieDetail?: MovieDetail;
  cast: Cast[];
}

export const useMovieDetail = (idMovie: number) => {
  const [state, setState] = useState<MovieDetailState>({
    isLoading: true,
    movieDetail: undefined,
    cast: [],
  });

  const getMovieDetail = async () => {
    const movieDetailPromise = movieDB.get<MovieDetail>(`/${idMovie}`);
    const castPromise = movieDB.get<MovieCastResponse>(`/${idMovie}/credits`);

    const [movieDetailResponse, castResponse] = await Promise.all([
      movieDetailPromise,
      castPromise,
    ]);

    setState({
      movieDetail: movieDetailResponse.data,
      cast: castResponse.data.cast,
      isLoading: false,
    });
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return {
    ...state,
  };
};
