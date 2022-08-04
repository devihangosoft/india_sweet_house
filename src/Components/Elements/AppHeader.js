import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Appbar } from 'react-native-paper';


const AppHeader = (props) => {
  
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    
    <Appbar.Header style={{backgroundColor:'orange'}}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title={props.title} />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({})

export default AppHeader;
