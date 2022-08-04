import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, IconButton } from 'react-native-paper';
import { OrderForm } from './OrderForm';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';

const OrderList = () => {
  return (
    <>
      <View style={styles.listBox} >

        <View style={styles.leftwithNo}>
          <View style={styles.leftSide}>
            <Text style={styles.head}>Title</Text>
            <Text style={styles.subtitle}>04-Aug-22 12:43 PM</Text>
            
            {/* <Button mode='contained' >Accepted</Button> */}
            <View style={styles.smallbtn}>
              <Text style={styles.btntext}>Accepted</Text>
            </View>


          </View>
        </View>

        <View style={styles.rightSide}>

          <TouchableOpacity>
          <Icon name="trash" size={20} color="red" style={{ marginRight: 20 }} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon name="edit" size={20} color="blue" />
          </TouchableOpacity>
          {/* <Icon name="eye" size={20} color="orange" style={{margin:10}} /> */}
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
    paddingVertical:4,
    borderRadius:10,
    marginTop:5
  },
  btntext:{
    color:'white',
    textAlign:'center'
  }
})

export default OrderList;
