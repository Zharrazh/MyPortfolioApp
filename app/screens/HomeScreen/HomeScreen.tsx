import {GapContainer} from '@components/common/GapContainer';
import {MainLayout} from '@components/layouts/MainLayout';
import {NavigationScreenProps} from '@navigation/Navigation/types';
import React, {FC} from 'react';
import {useAuth} from '../../providers/AuthProvider';
import {AboutMeSection} from './AboutMeSection';
import {
  ProfileGuestSection,
  ProfileGuestSectionProps,
} from './ProfileGuestSection';

import {ProfileSection, ProfileSectionProps} from './ProfileSection';

export const HomeScreen: FC<NavigationScreenProps<'Home'>> = ({navigation}) => {
  const {logout, user, isAuthAsGuest} = useAuth();

  const onPressNavigationSectionHandler: ProfileSectionProps['onPress'] =
    () => {
      navigation.push('Profile');
    };

  const onLogoutPressHandler: ProfileGuestSectionProps['onLogoutPress'] =
    async () => {
      await logout();
    };

  return (
    <MainLayout isScrollView>
      <GapContainer direction="column" gap={8}>
        {isAuthAsGuest ? (
          <GapContainer.Item>
            <ProfileGuestSection onLogoutPress={onLogoutPressHandler} />
          </GapContainer.Item>
        ) : null}
        {user ? (
          <>
            <GapContainer.Item>
              <ProfileSection
                email={user.email || 'Unknown'}
                onPress={onPressNavigationSectionHandler}
              />
            </GapContainer.Item>
            <GapContainer.Item />
          </>
        ) : null}

        <GapContainer.Item>
          <AboutMeSection />
        </GapContainer.Item>
      </GapContainer>
    </MainLayout>
  );
};
