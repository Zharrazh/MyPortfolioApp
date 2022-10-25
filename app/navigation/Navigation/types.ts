import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TypeRootStackParamList = {
  Loading: undefined;
  Auth: undefined;
  Registration: undefined;
  Home: undefined;
  Profile: undefined;
};

export type NavigationScreenProps<T extends keyof TypeRootStackParamList> =
  NativeStackScreenProps<TypeRootStackParamList, T>;
