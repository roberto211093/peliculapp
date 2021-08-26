/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {View, ScrollView, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HorizontalSlider from '../components/HorizontalSlider';
import Loading from '../components/Loading';
import {useMovies} from '../hooks/useMovies';
import GradientBackground from '../components/GradientBackground';
import MovieCard from '../components/MovieCard';
import Carousel from 'react-native-snap-carousel';
import {getColorsImage} from '../helpers/getColorsImage';
import {GradientContext} from '../context/GradientContext';

const HomeScreen = () => {
  const {isLoading, peliculas} = useMovies();
  const nowPlaying = peliculas?.nowPlaying ? peliculas.nowPlaying : [];
  const {top, bottom} = useSafeAreaInsets();
  const {width} = useWindowDimensions();
  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const uri = `https://image.tmdb.org/t/p/w500/${peliculas?.nowPlaying[index].poster_path}`;
    const [primary = '#FFF', secundary = '#FFF'] = await getColorsImage(uri);
    console.log(primary, 'primary');
    console.log(secundary, 'secundary');
    setMainColors({primary, secundary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <GradientBackground>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{paddingTop: top, paddingBottom: bottom}}>
          <View style={{height: 440, marginTop: 20}}>
            <Carousel
              data={peliculas?.nowPlaying!}
              renderItem={({item}: any) => <MovieCard movie={item} />}
              sliderWidth={width}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          <HorizontalSlider
            movies={peliculas?.popular!}
            title="Películas Populares"
          />
          <HorizontalSlider
            movies={peliculas?.topRated!}
            title="Películas Top"
          />
          <HorizontalSlider
            movies={peliculas?.upcoming!}
            title="Proximamente"
          />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
