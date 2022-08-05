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
import OrderDetails from './src/Components/Orders/OrderDetail';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="orders" component={Orders} options={{ headerShown: false }} />
          <Stack.Screen name="orderdetails" component={OrderDetails} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>


        
          <SafeAreaView style={styles.container}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.container}>
                   
         <Modals/>
              {/* <Orders /> */}
              {/* <Card1 /> */}
              {/* <Sidemenu /> */}
              {/* <Datatables/> */}
              {/* <DialogBox/> */}
              {/* <OrderList/> */}
              {/* <SnackBars /> */}
    {/* <OrderDetails/>*/}
            </ScrollView>
          </SafeAreaView> 
        </Provider>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5'
    // paddingHorizontal: 15
  }
});

export default App;
