import {FormInput} from '@components/common/FormInput';
import {Button, Text} from '@rneui/themed';
import React, {FC} from 'react';
import {View} from 'react-native';
import {FormErrorMessage} from '../../../components/common/FormErrorMessage';
import {AppLink} from '../../../navigation/Navigation';
import {useRegistrationForm, UseRegistrationFormParams} from './hooks';

import {styles} from './RegistrationForm.styles';

export interface RegistrationFormProps {
  onSubmit: UseRegistrationFormParams['onSubmit'];
}

export const RegistrationForm: FC<RegistrationFormProps> = ({onSubmit}) => {
  const {
    control,
    handleSubmit,
    formError,
    formState: {isSubmitting},
  } = useRegistrationForm({onSubmit});

  return (
    <View style={styles.root}>
      <FormInput control={control} name="email" placeholder="Enter email" />

      <FormInput
        control={control}
        name="password"
        placeholder="Enter password"
        textContentType="password"
        secureTextEntry
      />

      {formError ? <FormErrorMessage>{formError}</FormErrorMessage> : null}

      <Button uppercase loading={isSubmitting} onPress={handleSubmit}>
        Registration
      </Button>

      <View style={styles.loginTipContainer}>
        <Text style={styles.loginTipText}>
          Do you already have an account? You can{' '}
          <AppLink style={styles.loginLink} to={{screen: 'Auth'}}>
            login
          </AppLink>
        </Text>
      </View>
    </View>
  );
};
