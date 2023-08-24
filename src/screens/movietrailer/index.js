import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { WebView } from 'react-native-webview';

const MovieTrailerScreens = () => {

  const navigation = useNavigation()

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  const fetchMovieDetail = async () => {
    try {
      const response = await axios.get('http://146.190.97.170:9923/movies/1');
      setMovie(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  if (!movie) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }



  return (
    <View style={{
      backgroundColor: 'black',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
    }}>
      <View style={{
        marginTop:10
      }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}>
          <Icon name='arrow-left' size={25} color={'grey'} />
        </TouchableOpacity>
      </View>
      <View style={{
        width: '100%',
        height: 250,
        marginTop:200,
        backgroundColor:'white'
      }}>
        <WebView
          source={{ uri: movie.trailers[0].url }}
          allowsFullscreenVideo={true}
        />
      </View>
    </View>
  );
};

export default MovieTrailerScreens;