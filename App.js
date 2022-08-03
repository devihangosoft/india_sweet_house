/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './src/Screens/Login/Login';

import { Provider } from 'react-redux';
import Store from './src/redux/Store';
import {Provider as PaperProvider } from 'react-native-paper';

import Card1 from './src/Components/Elements/Card';
import AppHeader from './src/Components/Elements/AppHeader';
import Sidemenu from './src/Components/Elements/Sidemenu';
import Orders from './src/Components/Orders/Orders';
import Modals from './src/Components/Elements/Modal';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <Provider store={Store}>
    <PaperProvider>

    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <Modals />

        <Login />
    {/* <Card1 /> */}
    {/* <AppHeader /> */}
    {/* <Sidemenu /> */}
    {/* <Orders /> */}

      </ScrollView>
    </SafeAreaView>
    </PaperProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
 container:{
  paddingHorizontal:15
 }
});

export default App;
