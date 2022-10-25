import {useAuth} from '@providers/AuthProvider';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@screens//HomeScreen';
import {AuthScreen} from '@screens/AuthScreen';
import {LoadingScreen} from '@screens/LoadingScreen';
import {ProfileScreen} from '@screens/ProfileScreen';
import {RegistrationScreen} from '@screens/RegistrationScreen';
import React, {FC, useEffect, useState} from 'react';
import {TypeRootStackParamList} from './types';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

export const Navigation: FC = () => {
  const {user, isLoadingInitial, isAuthAsGuest} = useAuth();

  //Просто костыль чтобы посмотреть анимацию подольше)
  const [isMinLoading, setIsMinLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMinLoading(true);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}>
        {isLoadingInitial || !isMinLoading ? (
          <Stack.Screen name="Loading" component={LoadingScreen} />
        ) : user || isAuthAsGuest ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </>
        ) : null}

        {isAuthAsGuest || !user ? (
          <>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
