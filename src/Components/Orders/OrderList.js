import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Text, Button, IconButton } from 'react-native-paper';
import { OrderForm } from './OrderForm';

const OrderList = () => {
    return (
        <>
        <View style={styles.listBox} >

        <View style={styles.leftwithNo}>
        <Text style={styles.snumber}>1.</Text>
        
    
        <View style={styles.leftSide}>
          <Text style={styles.head}>Title</Text>
          <Text>Sub Title</Text>
        </View>
    </View>
    
        <View style={styles.rightSide}>
        <IconButton
    icon="camera"   
    size={20}
    onPress={() => console.log('Pressed')}
  />
          <Text style={styles.edit}>Edit</Text>
          <Text >Delete</Text>
        </View>
      </View>


<View style={styles.listBox} >

<View style={styles.leftwithNo}>
<Text style={styles.snumber}>1.</Text>


<View style={styles.leftSide}>
  <Text style={styles.head}>Title</Text>
  <Text>Sub Title</Text>
</View>
</View>

<View style={styles.rightSide}>
<Button raised theme={{ roundness: 3 }}>
  Press me
</Button>
  <Text style={styles.edit}>Edit</Text>
  <Text >Delete</Text>
</View>
</View>


<View style={styles.listBox} >

<View style={styles.leftwithNo}>
<Text style={styles.snumber}>1.</Text>


<View style={styles.leftSide}>
  <Text style={styles.head}>Title</Text>
  <Text>Sub Title</Text>
</View>
</View>

<View style={styles.rightSide}>
<Button raised theme={{ roundness: 3 }}>
  Press me
</Button>
  <Text style={styles.edit}>Edit</Text>
  <Text >Delete</Text>
</View>
</View>
</>
    );
}


const styles = StyleSheet.create({
    head: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black'
    },
    listBox: {
        backgroundColor:"#fff",
        // shadowColor: '#000',
        // shadowOffset: { width: 5, height: 5 },
        // shadowOpacity: 0.50,
        // shadowRadius: 5,
        borderRadius: 5,
        
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'space-between',
      paddingHorizontal:20,
      paddingVertical:15,
      alignItems:'center',
      marginTop:30
    },
    rightSide:{
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    edit:{
      marginRight:15,
    },
    leftwithNo:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',    
    },
    snumber:{
      fontSize:20,
      marginRight:10,
    }
  })

export default OrderList;
