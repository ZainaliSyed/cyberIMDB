import {useState} from 'react';
import {
  IDiscoverDomain,
  IDiscoverMovieSuccess,
} from '../../sdk/discover/discover.interface';
import DiscoverProvider from '../../sdk/discover/discover.provider';
import {Alert} from 'react-native';

const useMovieHook = () => {
  const [popularMovies, setPopulerMovies] = useState<IDiscoverDomain[]>([]);
  const [isLoadingPopularMovies, setIsLoadingPopularMovies] =
    useState<boolean>(true);

  const fetchMovies = async () => {
    const {ok, data} = await DiscoverProvider.discoverMovies();

    if (ok) {
      const {results} = data as IDiscoverMovieSuccess;
      setPopulerMovies(results);
      setIsLoadingPopularMovies(false);
    } else {
      Alert.alert('Error', 'Error Fetching Movies');
    }
  };
  return {
    fetchMovies,
    isLoadingPopularMovies,
    popularMovies,
  };
};

export default useMovieHook;
