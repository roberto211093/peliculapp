/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MovieCard from '../components/MovieCard';
import {View, Text, FlatList} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movies: Movie[];
  title?: string;
}

interface PropsItem {
  item: Movie;
}
const HorizontalSlider = ({movies, title}: Props) => {
  return (
    <>
      <View style={{height: 260}}>
        {title && (
          <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>
            {title}
          </Text>
        )}
        <FlatList
          data={movies}
          renderItem={({item}: PropsItem) => (
            <MovieCard movie={item} width={140} height={200} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default HorizontalSlider;
