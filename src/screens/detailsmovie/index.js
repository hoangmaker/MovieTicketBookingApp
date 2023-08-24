import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, FlatList, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const DetailsMovieScreens = () => {

  const navigation = useNavigation()

  const rating = (rate) => {
    const stars = ['../../../assets/emtystar.png', '../../../assets/emtystar.png', '../../../assets/emtystar.png', '../../../assets/emtystar.png', '../../../assets/emtystar.png']
    const intNumber = rate - rate % 1
    for (let i = 0; i < intNumber; i++) {
      stars[i] = require('../../../assets/fullstar.png')
    }
    if (rate % 1 == 0.5) {
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

  const convertMinutesToHours = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} giờ ${remainingMinutes} phút`;
  };

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
  return (
    <View>
      <View style={{
        height: '20%',
        width: '100%',
      }}>
        <ImageBackground source={{
          uri: movie.trailers[0].thumbnail
        }}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          blurRadius={3}>
          <TouchableOpacity style={{
            justifyContent: 'flex-start',
            alignSelf: 'flex-start',
            marginLeft: 5,
            paddingBottom: 40
          }}
            onPress={() => navigation.navigate('Home')} >
            <View>
              <Icon name='arrow-left' size={25} color={'white'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{
            justifyContent: 'center',
            alignSelf: 'center',
            paddingBottom: 60
          }}
            onPress={() => navigation.navigate('Trailer')}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 50,
              height: 50,
              borderRadius: 50,
              paddingLeft: 3,
              backgroundColor: '#D6D6D6',
            }}>
              <Icon name='play' size={20} color={'grey'} />
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={{
        backgroundColor: '#1C1A29',
        height: '100%',
      }}>
        <View style={{
          flexDirection: 'row'
        }}>
          <Image source={{
            uri: movie.thumbnail
          }}
            style={{
              width: 140,
              height: 190,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'grey',
              marginLeft: 15,
              marginTop: -15
            }} />
          <View style={{
            marginLeft: 10,
            paddingTop: 10
          }}>
            <Text style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold'
            }}>{movie.title}</Text>
            {/* đạo diễn */}
            <View style={{
              flexDirection: 'row'
            }}>
              <Text style={{
                color: 'grey',
                fontSize: 15,
                margin: 5
              }}>Đạo diễn:</Text>
              <Text style={{
                color: 'grey',
                fontSize: 15,
                margin: 5
              }}>{movie.directors[0].fullName}</Text>
            </View>
            {/* tác giả */}
            <View style={{
              flexDirection: 'row'
            }}>
              <Text style={{
                color: 'grey',
                fontSize: 15,
                margin: 5
              }}>Tác giả:</Text>
              <Text style={{
                color: 'grey',
                fontSize: 15,
                margin: 5
              }}>{movie.writers[0].fullName}</Text>
            </View>
            {/* thể loại */}
            <View style={{
              flexDirection: 'row'
            }}>
              <Text style={{
                color: 'grey',
                fontSize: 15,
                margin: 5
              }}>Thể loại:</Text>
              <Text style={{
                color: 'grey',
                fontSize: 15,
                margin: 5
              }}>{movie.categories[0].name},{movie.categories[1].name}</Text>
            </View>
            {/* nhà sản xuất */}
            <View style={{
              flexDirection: 'row'
            }}>
              <Text style={{
                color: 'grey',
                fontSize: 15,
                margin: 5
              }}>Nhà sản xuất:</Text>
              <Text style={{
                color: 'grey',
                fontSize: 15,
                margin: 5
              }}>{movie.producers[0].name}</Text>
            </View>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
        }}>
          {/* Đánhg giá */}
          <View style={{
            width: 100,
            height: 50,
            borderRadius: 10,
            borderColor: 'white',
            borderWidth: 1,
            margin: 15,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            {
              // rating
              rating(movie.rating)
            }
            <Text style={{
              color: 'white',
              fontWeight: 'bold'
            }}>{movie.rating}/5</Text>
          </View>
          {/* Thời gian */}
          <View style={{
            width: 100,
            height: 50,
            borderRadius: 10,
            borderColor: 'white',
            borderWidth: 1,
            margin: 15,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <Text style={{
              color: 'grey',
              fontSize: 15
            }}>Thời gian</Text>
            <Text style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize:15
            }}>
               {
                convertMinutesToHours(movie.duaration)
               }
               </Text>
          </View>
          {/* Độ tuổi */}
          <View style={{
            width: 100,
            height: 50,
            borderRadius: 10,
            borderColor: 'white',
            borderWidth: 1,
            margin: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{
              color: 'grey',
              fontSize: 15
            }}>Độ tuổi</Text>
            <Text style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 17
            }}>{movie.pgs[0].name}</Text>
          </View>
        </View>
        {/* Chi tiết phim */}

        <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            paddingBottom: 10
          }}>Chi tiết</Text>
          <ScrollView style={{
            height: 240
          }}>
            <View>
              <Text style={{
                color: '#B2B2B2',
                fontSize: 15,
                padding: 7,
                paddingBottom: 10
              }}>{movie.description}</Text>
            </View>
          </ScrollView>
          {/* Button buy ticket */}
          <View style={{
            width: '100%',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 65,
          }}>
            <TouchableOpacity style={{
              width: 250,
              height: 40,
            }}
              onPress={() => navigation.navigate('Time Selection')}
            >
              <LinearGradient colors={['#C330E0', '#C330E0']}
                style={{
                  borderRadius: 15,
                  flexDirection: 'row',
                }}>
                <View style={{
                  width: 40,
                  height: 40,
                  marginLeft: 20,
                  marginTop: 10
                }}>
                  <Icon name="ticket" size={35} color={'white'} />
                </View>
                <View style={{
                  width: 150,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                }}>
                  <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>Buy Ticket</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsMovieScreens;