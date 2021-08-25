/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MovieDetail, Cast} from '../interfaces/movieInterface';
import currencyFormatter from 'currency-formatter';
import ActorCards from './ActorCards';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  movie: MovieDetail;
  cast: Cast[];
}

const MovieDetailComponet = ({movie, cast}: Props) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <>
      {/* Detalles */}
      <View style={styles.marginContainer}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Icon name="star-outline" size={16} color="grey" />
          <Text style={{marginLeft: 0}}>{movie.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            - {movie.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
      </View>

      {/* Historia */}
      <View style={{...styles.marginContainer, marginTop: 10}}>
        <Text style={styles.title}>Historia</Text>
        <Text style={styles.subtitle}>{movie.overview}</Text>
      </View>

      {/* Presupuesto */}
      <View style={{...styles.marginContainer, marginTop: 10}}>
        <Text style={styles.title}>Presupuesto</Text>
        <Text style={styles.subtitle}>
          {currencyFormatter.format(movie.budget, {code: 'USD'})}
        </Text>
      </View>

      {/* Reparto */}
      <View
        style={{
          ...styles.marginContainer,
          marginTop: 10,
          paddingBottom: bottom + 10,
          marginBottom: bottom + 10,
        }}>
        <Text style={styles.title}>Reparto</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ActorCards actor={item} />}
        />
      </View>
    </>
  );
};

export default MovieDetailComponet;

const styles = StyleSheet.create({
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
});
