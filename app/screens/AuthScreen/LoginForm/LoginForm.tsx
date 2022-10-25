import {FormInput} from '@components/common/FormInput';
import {GapContainer} from '@components/common/GapContainer';
import {Button, Text} from '@rneui/themed';
import React, {FC} from 'react';
import {View} from 'react-native';
import {FormErrorMessage} from '../../../components/common/FormErrorMessage';
import {AppLink} from '../../../navigation/Navigation';
import {useLoginForm, UseLoginFormParams} from './hooks';

import {styles} from './LoginForm.styles';

export interface LoginFormProps {
  onSubmit: UseLoginFormParams['onSubmit'];
  onLoginAsGuest: () => void;
}

export const LoginForm: FC<LoginFormProps> = props => {
  const {onSubmit, onLoginAsGuest} = props;

  const {
    control,
    handleSubmit,
    formError,
    formState: {isSubmitting},
  } = useLoginForm({onSubmit});

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

      <GapContainer direction="column" gap={8}>
        <GapContainer.Item>
          <Button uppercase loading={isSubmitting} onPress={handleSubmit}>
            Login
          </Button>
        </GapContainer.Item>
        <GapContainer.Item>
          <Text style={styles.or}>OR</Text>
        </GapContainer.Item>
        <GapContainer.Item>
          <Button
            uppercase
            disabled={isSubmitting}
            onPress={onLoginAsGuest}
            type="outline"
            color="secondary">
            Login as Guest
          </Button>
        </GapContainer.Item>
      </GapContainer>

      <View style={styles.registerTipContainer}>
        <Text style={styles.registerTipText}>
          Don't have an account yet? You can{' '}
          <AppLink style={styles.registerLink} to={{screen: 'Registration'}}>
            register
          </AppLink>
        </Text>
      </View>
    </View>
  );
};
