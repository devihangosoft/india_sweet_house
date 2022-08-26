import React from 'react';
import { Alert, Button, SafeAreaView, SectionList, StyleSheet, Text } from 'react-native';
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';

const _textBody = (page) => `congratulations you can observe the ${page} notification :)`;

const DATA = [
  {
    title: 'DIALOG BOX',
    data: [
      {
        title: 'success',
        onPress: () =>
          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'success',
            button: 'ok',
            textBody: _textBody('success'),
          }),
      },
      
          
    ],
  },
 
];

const App = () => {
  return (
    <>
      <Root>
        {/* <SafeAreaView style={styles.container}> */}

  <Button onPress={()=>{
     Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'success',
            button: 'ok',
            textBody: _textBody('success'),
          })
  }} title='success'></Button>


         
        {/* </SafeAreaView> */}
      </Root>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginTop: 24,
    alignSelf: 'center',
  },
});

export default App;