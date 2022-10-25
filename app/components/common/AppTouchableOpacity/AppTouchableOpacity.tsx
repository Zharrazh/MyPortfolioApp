import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export interface AppTouchableOpacityProps extends TouchableOpacityProps {}

export class AppTouchableOpacity extends React.Component<TouchableOpacityProps> {
  render(): React.ReactNode {
    return <TouchableOpacity activeOpacity={0.7} {...this.props} />;
  }
}
