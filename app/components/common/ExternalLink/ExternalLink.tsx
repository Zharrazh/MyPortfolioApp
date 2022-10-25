import {Text} from '@rneui/themed';
import React, {FC, PropsWithChildren} from 'react';
import {Linking, StyleProp, TextStyle} from 'react-native';
import {AppTouchableOpacity} from '../AppTouchableOpacity';
import {styles} from './ExternalLink.styles';

export interface ExternalLinkProps {
  style?: StyleProp<TextStyle>;
  url: string | string[];
}

export const ExternalLink: FC<PropsWithChildren<ExternalLinkProps>> = props => {
  const {url, children, style} = props;

  const onPress = async () => {
    if (typeof url === 'string') {
      const openable = await Linking.canOpenURL(url);
      if (openable) {
        await Linking.openURL(url);
      }
    } else {
      for (const currUrl of url) {
        const openable = await Linking.canOpenURL(currUrl);
        if (openable) {
          await Linking.openURL(currUrl);
        } else {
          console.log(`can't open link as ${currUrl}`);
        }
      }
    }
  };

  return (
    <AppTouchableOpacity onPress={onPress}>
      <Text style={[styles.root, style]}>{children}</Text>
    </AppTouchableOpacity>
  );
};
