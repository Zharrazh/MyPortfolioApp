import {NavigationScreenProps} from '@navigation/Navigation/types';
import React, {FC} from 'react';

import {GoToPrevPage} from '@components/common/GoToPrevPage';
import {MainLayout} from '@components/layouts/MainLayout';
import {useAuth} from '@providers/AuthProvider';
import {Button} from '@rneui/themed';
import {GapContainer} from '@components/common/GapContainer';

export const ProfileScreen: FC<NavigationScreenProps<'Profile'>> = () => {
  const {logout, isLoading} = useAuth();

  return (
    <MainLayout isScrollView>
      <GoToPrevPage title="Назад" />
      <GapContainer direction="column" gap={16}>
        <GapContainer.Item>
          <Button onPress={logout} loading={isLoading}>
            Logout
          </Button>
        </GapContainer.Item>
      </GapContainer>
    </MainLayout>
  );
};
