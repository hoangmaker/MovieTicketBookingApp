import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const HomeScreens = () => {

  const rating = (rate) => {
    // const rate = 4.5
    const stars = ['../../../assets/emtystar.png', '../../../assets/emtystar.png', '../../../assets/emtystar.png', '../../../assets/emtystar.png', '../../../assets/emtystar.png']
    const intNumber = rate - rate % 1
    for (let i = 0; i < intNumber; i++) {
      // stars[i] = "../../../assets/fullstar.png"
      stars[i] = require('../../../assets/fullstar.png')
    }
    if (rate % 1 == 0.5) {
      // stars[rate - rate % 1] = "../../../assets/halfstar.png"
      stars[rate - rate % 1] = require("../../../assets/halfstar.png")
    }

    return <View style={{
      flexDirection: 'row'
    }}>{stars.map((el,key) => (<Image key={key} source={el}
      style={{
        width: 15,
        height: 15,
      }} />))}</View>
  }

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  const fetchMovieDetail = async () => {
    try {
      const response = await axios.get('http://146.190.97.170:9923/movies/1');
      // console.log(response.data.data);
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
  const navigation = useNavigation()

  return (
    <View style={{
      backgroundColor: '#1C1A29'
    }}>
      {/* header */}
      <View style={{
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          margin: 15
        }}>
          <TouchableOpacity>
            <Image source={require('../../../assets/useravatar.jpg')}
              style={{
                width: 30,
                height: 30,
                borderRadius: 30
              }} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            margin: 15
          }}>
            <TouchableOpacity>
              <Icon name='map-pin' size={20} color={'white'} />
            </TouchableOpacity>
            <Text style={{
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
              marginLeft: 15
            }}>Ba Đình, Hà Nội, Việt Nam</Text>
          </View>
        </TouchableOpacity>
        <View style={{
          margin: 15
        }}>
          <TouchableOpacity>
            <Icon name='bell' size={20} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
      {/* banner */}
      <View style={{
        width: '100%',
        height: '30%'
      }}>
        <ScrollView horizontal>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10
          }}>
            <Image source={require('../../../assets/avatarfilm.jpg')}
              style={{
                width: 200,
                height: 100,
              }} />
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10
          }}>
            <Image source={require('../../../assets/avatarfilm.jpg')}
              style={{
                width: 200,
                height: 100,
              }} />
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10
          }}>
            <Image source={require('../../../assets/avatarfilm.jpg')}
              style={{
                width: 200,
                height: 100,
              }} />
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10
          }}>
            <Image source={require('../../../assets/avatarfilm.jpg')}
              style={{
                width: 200,
                height: 100,
              }} />
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10
          }}>
            <Image source={require('../../../assets/avatarfilm.jpg')}
              style={{
                width: 200,
                height: 100,
              }} />
          </View>
        </ScrollView>
      </View>
      {/* list movie */}
      <View style={{
        width: '100%',
        height: '53%'
      }}>
        <View style={{
          flexDirection: 'row'
        }}>
          <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 10
          }}>
            Phim đang chiếu
          </Text>
          <TouchableOpacity style={{
            marginTop: 10,
            marginLeft: 85,
          }}>
            <View style={{
              flexDirection: 'row',
            }}>
              <Text style={{
                fontSize: 15,
                color: 'grey',
              }}>Xem tất cả</Text>
              <Icon name='angle-right' size={15} color={'grey'}
                style={{
                  marginLeft: 5,
                  marginTop: 4
                }} />
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          <View style={{
            flexDirection: 'row',
            marginBottom: 40
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <View style={{
                margin: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image source={{
                  uri: movie.thumbnail
                }}
                  style={{
                    width: 170,
                    height: 250,
                    borderRadius: 10,
                  }} />
                <Text style={{
                  color: 'white',
                  fontSize: 15,
                }}>{movie.title}</Text>
                {
                  // rating
                  rating(movie.rating)
                }
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <View style={{
                margin: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image source={{
                  uri: movie.thumbnail
                }}
                  style={{
                    width: 170,
                    height: 250,
                    borderRadius: 10,
                  }} />
                <Text style={{
                  color: 'white',
                  fontSize: 15,
                }}>{movie.title}</Text>
                {
                  // rating
                  rating(movie.rating)
                }
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <View style={{
                margin: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image source={{
                  uri: movie.thumbnail
                }}
                  style={{
                    width: 170,
                    height: 250,
                    borderRadius: 10,
                  }} />
                <Text style={{
                  color: 'white',
                  fontSize: 15,
                }}>{movie.title}</Text>
                {
                  // rating
                  rating(movie.rating)
                }
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <View style={{
                margin: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image source={{
                  uri: movie.thumbnail
                }}
                  style={{
                    width: 170,
                    height: 250,
                    borderRadius: 10,
                  }} />
                <Text style={{
                  color: 'white',
                  fontSize: 15,
                }}>{movie.title}</Text>
                {
                  // rating
                  rating(movie.rating)
                }
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <View style={{
                margin: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image source={{
                  uri: movie.thumbnail
                }}
                  style={{
                    width: 170,
                    height: 250,
                    borderRadius: 10,
                  }} />
                <Text style={{
                  color: 'white',
                  fontSize: 15,
                }}>{movie.title}</Text>
                {
                  // rating
                  rating(movie.rating)
                }
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <View style={{
                margin: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image source={{
                  uri: movie.thumbnail
                }}
                  style={{
                    width: 170,
                    height: 250,
                    borderRadius: 10,
                  }} />
                <Text style={{
                  color: 'white',
                  fontSize: 15,
                }}>{movie.title}</Text>
                {
                  // rating
                  rating(movie.rating)
                }
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {/* Taskbar */}
      <View style={{
        backgroundColor: '#1C2833',
        width: '100%',
        height: '7%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{
          width: '30%',
          height: 30,
          marginLeft: 75
        }}>
          <TouchableOpacity >
            <Icon name='home' size={30} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={{
          width: '30%',
          height: 30,
        }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Details')}>
            <Icon name='ticket' size={30} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={{
          width: '30%',
          height: 30,
        }}>
          <TouchableOpacity >
            <Icon name='bars' size={30} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


export default HomeScreens;