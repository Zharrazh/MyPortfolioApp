import {Text} from '@rneui/themed';
import {FirebaseError} from 'firebase/app';
import React, {FC, useCallback} from 'react';
import {IdentificationLayout} from '../../components/layouts/IdentificationLayout';
import {NavigationScreenProps} from '../../navigation/Navigation/types';
import {useAuth} from '../../providers/AuthProvider';

import {styles} from './AuthScreen.styles';
import {LoginForm, LoginFormProps} from './LoginForm';

export const AuthScreen: FC<NavigationScreenProps<'Auth'>> = ({navigation}) => {
  const {login, loginAsGuest} = useAuth();

  const onSubmitLoginFormHandler: LoginFormProps['onSubmit'] = useCallback(
    async data => {
      try {
        await login(data);
        navigation.navigate('Home');
      } catch (error) {
        if (error instanceof FirebaseError) {
          if (error.code === 'auth/invalid-email') {
            throw new Error('Invalid email. Please fix it');
          } else if (error.code === 'auth/wrong-password') {
            throw new Error('Wrong password');
          }
        }
        throw error;
      }
    },
    [login, navigation],
  );

  const onLoginAsGuestFormHandler: LoginFormProps['onLoginAsGuest'] =
    useCallback(() => {
      loginAsGuest();
      setTimeout(() => {
        navigation.navigate('Home');
      }, 0);
    }, [loginAsGuest, navigation]);

  return (
    <IdentificationLayout style={styles.root}>
      <Text style={styles.header} h1>
        Login
      </Text>
      <LoginForm
        onSubmit={onSubmitLoginFormHandler}
        onLoginAsGuest={onLoginAsGuestFormHandler}
      />
    </IdentificationLayout>
  );
};
