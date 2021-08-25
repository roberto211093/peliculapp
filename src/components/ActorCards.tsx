import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {Cast} from '../interfaces/movieInterface';

interface Props {
  actor: Cast;
}

const ActorCards = ({actor}: Props) => {
  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${actor.profile_path}`,
          }}
        />
      )}
      <View style={styles.actorContainer}>
        <Text style={styles.title}>{actor.name}</Text>
        <Text style={styles.subtitle}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default ActorCards;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  actorContainer: {
    marginLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
});
