import {Text} from '@rneui/themed';
import React, {FC, useCallback} from 'react';
import {IdentificationLayout} from '../../components/layouts/IdentificationLayout';
import {NavigationScreenProps} from '../../navigation/Navigation/types';
import {useAuth} from '../../providers/AuthProvider';
import {RegistrationForm, RegistrationFormProps} from './RegistrationForm';

import {styles} from './RegistrationScreen.styles';

export const RegistrationScreen: FC<NavigationScreenProps<'Registration'>> = ({
  navigation,
}) => {
  const {register} = useAuth();

  const onSubmit: RegistrationFormProps['onSubmit'] = useCallback(
    async data => {
      console.info('start register with data:', data);
      await register(data);

      navigation.navigate('Home');
    },
    [navigation, register],
  );
  return (
    <IdentificationLayout style={styles.root}>
      <Text style={styles.header} h1>
        Registration
      </Text>

      <RegistrationForm onSubmit={onSubmit} />
    </IdentificationLayout>
  );
};
