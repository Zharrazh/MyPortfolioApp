import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TypeRootStackParamList} from './types';

export const useAppNavigation = useNavigation<
  NavigationProp<TypeRootStackParamList>
>;
