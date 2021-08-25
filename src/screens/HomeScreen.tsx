import React from 'react';
import {View, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HorizontalSlider from '../components/HorizontalSlider';
import Loading from '../components/Loading';
import {useMovies} from '../hooks/useMovies';

const HomeScreen = () => {
  const {isLoading, peliculas} = useMovies();
  const {top, bottom} = useSafeAreaInsets();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={{paddingTop: top, paddingBottom: bottom}}>
        <HorizontalSlider movies={peliculas?.nowPlaying!} marginTop={20} />
        <HorizontalSlider
          movies={peliculas?.popular!}
          height={260}
          title="Películas Populares"
        />
        <HorizontalSlider
          movies={peliculas?.topRated!}
          height={260}
          title="Películas Top"
        />
        <HorizontalSlider
          movies={peliculas?.upcoming!}
          height={260}
          title="Proximamente"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
