import {Avatar, ListItem, useTheme} from '@rneui/themed';
import React, {FC} from 'react';
import {
  StyleProp,
  TouchableNativeFeedback,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './ProfileSection.styles';

export interface ProfileSectionProps {
  email: string;
  onPress: () => void;

  style?: StyleProp<ViewStyle>;
}

export const ProfileSection: FC<ProfileSectionProps> = props => {
  const {email, onPress, style} = props;

  const {theme} = useTheme();

  return (
    <View style={[styles.root, style]}>
      <ListItem Component={TouchableNativeFeedback} onPress={onPress}>
        <Avatar
          size={44}
          rounded
          title={email[0]?.toUpperCase()}
          containerStyle={{backgroundColor: theme.colors.primary}}
        />
        <ListItem.Content>
          <ListItem.Title>{email}</ListItem.Title>
        </ListItem.Content>

        <ListItem.Chevron size={40} />
      </ListItem>
    </View>
  );
};
