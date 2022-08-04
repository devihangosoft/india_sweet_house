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


import Card1 from './src/Components/Elements/Card';
import AppHeader from './src/Components/Elements/AppHeader';
import Sidemenu from './src/Components/Elements/Sidemenu';
import Orders from './src/Components/Orders/Orders';
import Modals from './src/Components/Elements/Modal';
import Datatables from './src/Components/Elements/Datatables';
import DialogBox from './src/Components/Elements/DialogBox';
import SnackBars from './src/Components/Elements/Snackbars';
import OrderList from "./src/Components/Orders/OrderList"


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (


    <Provider store={Store}>


      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
          <Modals />

          {/* <Login /> */}
          {/* <Card1 /> */}
          {/* <AppHeader /> */}
          {/* <Sidemenu /> */}
          {/* <Orders /> */}
          {/* <Datatables/> */}
          {/* <DialogBox/> */}
          <OrderList/>

          <SnackBars />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15
  }
});

export default App;
