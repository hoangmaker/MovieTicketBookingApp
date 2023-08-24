import React from 'react';
import { View, Text } from 'react-native';
import DetailsMovieScreens from '../detailsmovie';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from '../home';
import MovieTrailerScreens from '../movietrailer';
import TimeSelectionScreens from '../timeselection';



const Stack = createNativeStackNavigator();


const MainScreens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name='Details' component={DetailsMovieScreens} />
                <Stack.Screen name='Home' component={HomeScreens} />
                <Stack.Screen name='Trailer' component={MovieTrailerScreens} />
                <Stack.Screen name='Time Selection' component={TimeSelectionScreens} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainScreens;