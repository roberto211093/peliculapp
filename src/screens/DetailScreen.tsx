import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootSrackParams} from '../navigation/Navigation';
import {useMovieDetail} from '../hooks/useMovieDetail';
import Loading from '../components/Loading';
import MovieDetail from '../components/MovieDetail';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';

interface Props
  extends NativeStackScreenProps<RootSrackParams, 'DetailScreen'> {}

const {height} = Dimensions.get('screen');
const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const {isLoading, movieDetail, cast} = useMovieDetail(movie.id);

  return (
    <ScrollView style={{paddingTop: top}} showsVerticalScrollIndicator={false}>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={50} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={[styles.imageContainer, styles.imageBorder]}>
        <Image
          style={styles.image}
          resizeMode={'cover'}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          }}
        />
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      {isLoading ? (
        <Loading />
      ) : (
        <MovieDetail movie={movieDetail!} cast={cast} />
      )}
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    height: height * 0.7,
    overflow: 'hidden',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  imageBorder: {
    flex: 1,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  image: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 11,
    left: 10,
    top: 30,
    backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: 100,
  },
});
