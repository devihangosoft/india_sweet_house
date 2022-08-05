import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

const AppHeader = ({navigation, title}) => {  
  const _goBack = () => navigation.goBack();
  const _handleMore = () => navigation.openDrawer();
  // const _handleSearch = () => console.log('Searching');

  return (
    
    <Appbar.Header style={{backgroundColor:'orange'}}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title={title} />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({})
export default AppHeader;