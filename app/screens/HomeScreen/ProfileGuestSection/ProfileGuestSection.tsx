import {ContentContainer} from '@components/common/ContentContainer';
import {Button} from '@rneui/base';
import {Avatar, Icon, ListItem, useTheme} from '@rneui/themed';
import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {styles} from './ProfileGuestSection.styles';

export interface ProfileGuestSectionProps {
  onLogoutPress: () => {};

  style?: StyleProp<ViewStyle>;
}

export const ProfileGuestSection: FC<ProfileGuestSectionProps> = props => {
  const {onLogoutPress, style} = props;

  const {theme} = useTheme();

  return (
    <ContentContainer style={[styles.root, style]}>
      <ListItem>
        <Avatar
          size={44}
          rounded
          icon={{name: 'account'}}
          containerStyle={{backgroundColor: theme.colors.primary}}
        />
        <ListItem.Content>
          <ListItem.Title>Guest</ListItem.Title>
          <ListItem.Subtitle style={styles.subtitle}>
            Not all features are available
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content right>
          <Button
            onPress={onLogoutPress}
            type="clear"
            icon={<Icon name="logout" color={theme.colors.black} />}
          />
        </ListItem.Content>
      </ListItem>
    </ContentContainer>
  );
};
