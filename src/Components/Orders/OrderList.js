import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
// import { OrderForm } from './OrderForm';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';

const OrderList = ({navigation}) => {
  return (
    <>
      <View style={styles.listBox} >
        <View style={styles.leftwithNo}>
          <View style={styles.leftSide}>
            <Text style={styles.head}>My Order 1</Text>
            <Text style={styles.subtitle}>04-Aug-22 12:43 PM</Text>  
            <View style={styles.smallbtn}>
              <Text style={styles.btntext}>Accepted</Text>
            </View>
          </View>
        </View>
        <View style={styles.rightSide}>
          {/* <TouchableOpacity>
          <Icon name="trash" size={20} color="red" style={{ marginRight: 20 }} />
          </TouchableOpacity> */}
          <TouchableOpacity>
          <Icon name="edit" size={20} color="blue" style={{ marginRight: 20 }}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('orderdetails')}>
          <Icon name="eye" size={20} color="orange"  />
          </TouchableOpacity>
        </View>        
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  head: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Roboto'
  },
  subtitle: {
    color: 'gray'
  },
  listBox: {
    backgroundColor: "#fff",
    // shadowColor: '#000',
    // shadowOffset: { width: 5, height: 5 },
    // shadowOpacity: 0.50,
    // shadowRadius: 5,
    borderRadius: 5,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 30
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  edit: {
    marginRight: 15,
  },
  leftwithNo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  snumber: {
    fontSize: 20,
    marginRight: 10,
  },
  smallbtn:{
    backgroundColor:'green',
    display:'flex',
    width:80,
    paddingHorizontal:10,
    borderRadius:10,
    marginTop:10,
    paddingTop:1,
    paddingBottom:4
  },
  btntext:{
    color:'white',
    textAlign:'center'
  }
})

export default OrderList;
