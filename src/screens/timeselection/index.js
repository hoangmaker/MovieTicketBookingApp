import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';

const TimeSelectionScreens = () => {


  const navigation = useNavigation()
  return (
    <View>
      <View style={{
        flexDirection: 'row',
        backgroundColor: '#2f2c44',
        width: '100%',
        height: '10%',
        // justifyContent:'center',
        // alignItems:'center'
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}
          style={{
            marginRight: 50,
            marginTop: 15,
            marginLeft: 15,
          }}>
          <Icon name='angle-left' color={'white'} size={40} />
        </TouchableOpacity>
        <Text style={{
          fontSize: 25,
          color: 'white',
          fontWeight: '400',
          marginTop: 15,
          marginLeft: 2
        }}>
          Time Selection Screens
        </Text>
      </View>
      <View style={{
        width: '100%',
        height: '90%',
        backgroundColor: '#1c1a29',
      }}>
        {/* date */}
        <View style={{
          width: '100%',
          height: 100,
          backgroundColor: '#1c1a29',
          borderBottomWidth:1,
          borderBottomColor:'grey',
        }}>
          <ScrollView horizontal>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15,
              justifyContent:'center',
              alignItems:'center'
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Mon</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>1</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Tue</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>2</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Wed</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>3</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Thu</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>4</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Fri</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>5</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Sat</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>6</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Sun</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>7</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Mon</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>8</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Tue</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>9</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Wed</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>10</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Thu</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>11</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Fri</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>12</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Sat</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>13</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Sun</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>14</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Mon</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>15</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Tur</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>16</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Wed</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>17</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Thu</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>18</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Fri</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>19</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Sat</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>20</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Sun</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>21</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Mon</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>22</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Tue</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>23</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Wed</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>24</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Thu</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>25</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Fri</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>26</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Sat</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>27</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Sun</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>28</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Mon</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>29</Text>
            </View>
            <View style={{
              flexDirection: 'column',
              marginTop:20,
              marginLeft:15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>Tue</Text>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white'
              }}>30</Text>
            </View>
          </ScrollView>
        </View>
        {/* search */}
        <View>
          <TextInput placeholder='Tìm kiếm'
            style={{
              width: '90%',
              height: 50,
              backgroundColor: '#2f2c44',
              borderRadius: 10,
              margin: 20,
              color: 'grey'
            }} />
        </View>
        <View style={{
          flexDirection: 'row'
        }}>
          <Image source={require('../../../assets/CGV.png')}
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              marginLeft: 10
            }} />
          <Text style={{
            color: 'white',
            fontSize: 25,
            fontWeight: '500',
            marginLeft: 20
          }}>CGV Hà Nội</Text>
          <TouchableOpacity style={{
            marginLeft: 150
          }}>
            <Icon name='chevron-down' size={25} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TimeSelectionScreens;