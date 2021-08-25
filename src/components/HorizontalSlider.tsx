/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import MovieCard from '../components/MovieCard';
import {View, Text, useWindowDimensions, FlatList} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movies: Movie[];
  title?: string;
  height?: number;
  marginTop?: number;
}

interface PropsItem {
  item: Movie;
}
const HorizontalSlider = ({
  movies,
  title,
  height = 440,
  marginTop = 0,
}: Props) => {
  const {width} = useWindowDimensions();
  return (
    <>
      {!title ? (
        <View style={{height, marginTop}}>
          <Carousel
            data={movies}
            renderItem={({item}: PropsItem) => <MovieCard movie={item} />}
            sliderWidth={width}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
      ) : (
        <View style={{height}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>
            {title}
          </Text>
          <FlatList
            data={movies}
            renderItem={({item}: PropsItem) => (
              <MovieCard movie={item} width={140} height={200} />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </>
  );
};

export default HorizontalSlider;
