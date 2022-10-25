import {Text} from '@rneui/themed';
import React, {FC} from 'react';
import {Image} from 'react-native';
//@ts-ignore
// import GifImage from '@lowkey/react-native-gif';

// import loadingCat from '../../assets/gifs/loading_cat.gif';
// import ZhduSvg from '../../assets/gifs/simple.svg';

import {IdentificationLayout} from '../../components/layouts/IdentificationLayout';
import {styles} from './LoadingScreen.styles';

export const LoadingScreen: FC = () => {
  return (
    <IdentificationLayout style={styles.root}>
      {/* <ActivityIndicator style={styles.loader} size={'large'} /> */}
      <Image source={require('../../assets/gifs/loading_cat.gif')} />
      {/* <GifImage source={require('../../assets/gifs/loading_cat.gif')} /> */}
      <Text style={styles.text}>Wait a second. App is loading...</Text>
    </IdentificationLayout>
  );
};
