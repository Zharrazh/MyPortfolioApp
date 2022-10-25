import React, {FC} from 'react';
import {Text} from 'react-native';
import {NavigationScreenProps} from '@navigation/Navigation/types';
import { MainLayout } from '@components/layouts/MainLayout';

import {styles} from './{{pascalCase}}.styles';


export const {{pascalCase}}: FC<NavigationScreenProps<'{{pascalCase}}'>> = () => {
  return (
    <MainLayout isScrollView>
      <Text>{{pascalCase}}</Text>
    </MainLayout>
  );
};
