import React, {FunctionComponent, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IDiscoverDomain} from '../../../sdk/discover/discover.interface';
import {SimpleMovieList} from '../../components';
import {useNavigation} from '@react-navigation/native';
import useMovieHook from '../../hooks/useMovieHook';

const Home: FunctionComponent<{}> = () => {
  const navigation = useNavigation();
  const {fetchMovies, isLoadingPopularMovies, popularMovies} = useMovieHook();
  const onSelectMovie = (movie: IDiscoverDomain) => {
    navigation.navigate('MovieDetail', {listedMovie: movie});
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      {isLoadingPopularMovies ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <SimpleMovieList
          data={popularMovies}
          icon="star"
          onSelectMovie={onSelectMovie}
          title="Most popular releases:"
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
