import avatar from '@assets/imgs/avatar.jpeg';
import {ContentContainer} from '@components/common/ContentContainer';
import {ExternalLink} from '@components/common/ExternalLink';
import {Avatar, Divider, Text} from '@rneui/themed';
import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {styles} from './AboutMeSection.styles';

export interface AboutMeSectionProps {
  style?: StyleProp<ViewStyle>;
}
export const AboutMeSection: FC<AboutMeSectionProps> = props => {
  const {style} = props;

  return (
    <ContentContainer style={[styles.root, style]}>
      <View style={styles.mainContainer}>
        <Avatar
          containerStyle={styles.avatar}
          size={80}
          source={avatar}
          rounded
        />

        <View style={styles.descriptionContent}>
          <Text style={styles.descHeader} numberOfLines={2}>
            Hi, I am Andrey Zharikov
          </Text>
          <View style={styles.textOverflowContainer}>
            <Text style={styles.status} ellipsizeMode="tail" numberOfLines={1}>
              Middle+ Frontend developer
            </Text>
          </View>
          <View style={styles.textOverflowContainer}>
            <Text
              style={styles.mainTechs}
              ellipsizeMode="tail"
              numberOfLines={1}>
              (React, React Native)
            </Text>
          </View>
        </View>
      </View>
      <Divider />
      <View style={styles.contactsSection}>
        <Text style={styles.sectionHeader}>Links</Text>
        <View style={styles.propsList}>
          <View style={styles.propItem}>
            <Text style={styles.propName}>Telegram:</Text>
            <ExternalLink
              style={styles.propValue}
              url={['tg://resolve?domain=Azazlling', 'https://t.me/Azazlling']}>
              @Azazlling
            </ExternalLink>
          </View>

          <View style={styles.propItem}>
            <Text style={styles.propName}>Email:</Text>
            <ExternalLink
              style={styles.propValue}
              url={'mailto: agoto2007@gmail.com'}>
              agoto2007@gmail.com
            </ExternalLink>
          </View>

          <View style={styles.propItem}>
            <Text style={styles.propName}>Phone:</Text>
            <ExternalLink
              style={[styles.propValue]}
              url={'tel: +7747601-83-61'}>
              +7 (747) 601-83-61
            </ExternalLink>
          </View>

          <View style={styles.propItem}>
            <Text style={styles.propName}>Head hunter:</Text>
            <ExternalLink
              style={[styles.propValue]}
              url={
                'https://hh.kz/resume/f2a041c4ff068d7f050039ed1f3942484e7065'
              }>
              Resume link
            </ExternalLink>
          </View>

          <View style={styles.propItem}>
            <Text style={styles.propName}>LinkedIn:</Text>
            <ExternalLink
              style={[styles.propValue]}
              url={
                'https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%B6%D0%B0%D1%80%D0%B8%D0%BA%D0%BE%D0%B2-04b092253/'
              }>
              Profile link
            </ExternalLink>
          </View>

          <View style={styles.propItem}>
            <Text style={styles.propName}>Github:</Text>
            <ExternalLink
              style={[styles.propValue]}
              url={'https://github.com/Zharrazh'}>
              https://github.com/Zharrazh
            </ExternalLink>
          </View>
        </View>
      </View>
    </ContentContainer>
  );
};
