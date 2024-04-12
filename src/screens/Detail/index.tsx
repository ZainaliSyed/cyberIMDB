import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IDiscoverDomain} from '../../../sdk/discover/discover.interface';
import {IMAGE_BASE_URL} from '../../constants/config';

type DetailScreen = {
  route: {
    params: {
      listedMovie: IDiscoverDomain;
    };
  };
};

const MovieDetail = ({route}: DetailScreen) => {
  const {listedMovie} = route.params;
  const {title, poster_path, overview} = listedMovie;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: `${IMAGE_BASE_URL}${poster_path}`}}
        style={styles.imageContainer}
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>
          Title:
          <Text style={styles.titleValue}>{title}</Text>
        </Text>

        <Text style={styles.overview}>{overview}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    paddingVertical: 20,
    fontWeight: '800',
  },
  titleValue: {
    fontWeight: '200',
    marginHorizontal: 10,
  },
  overview: {
    fontWeight: '400',
    textAlign: 'justify',
  },
  bodyContainer: {
    marginHorizontal: 10,
    paddingVertical: 20,
  },
});

export default MovieDetail;
