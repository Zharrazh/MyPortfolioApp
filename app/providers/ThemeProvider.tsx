import React, {FC, PropsWithChildren} from 'react';
import {ThemeProvider as RneThemeProvider, createTheme} from '@rneui/themed';

const appTheme = createTheme({
  lightColors: {
    primary: '#f8d81c',
    secondary: '#cccac3',
  },
  components: {
    Text: {
      style: {
        color: '#2c3844',
      },
    },
    Button: {
      titleStyle: {
        color: '#2c3844',
      },
      containerStyle: {
        borderRadius: 32,
        overflow: 'hidden',
      },
      buttonStyle: {
        borderRadius: 32,
        paddingLeft: 32,
        paddingRight: 32,
        overflow: 'hidden',
        borderWidth: 2,
      },
    },
    Input: {
      inputStyle: {
        backgroundColor: 'white',
        paddingLeft: 16,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
      },
      inputContainerStyle: {
        borderBottomWidth: 0,
      },
      containerStyle: {
        paddingHorizontal: 0,
      },
    },
  },
});

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  return <RneThemeProvider theme={appTheme}>{children}</RneThemeProvider>;
};
