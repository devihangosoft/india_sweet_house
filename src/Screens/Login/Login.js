import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image } from "react-native";
// import Icon from 'react-native-vector-icons/Ionicons';
// import Face from 'react-native-vector-icons/MaterialCommunityIcons';
// import Simple from 'react-native-vector-icons/SimpleLineIcons';
// import Gicon from 'react-native-vector-icons/Ionicons';

// import axios from 'react-native-axios';
import Modal from "react-native-modal";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { useDispatch, useSelector } from 'react-redux';
import { openModal } from "../../redux/reducers/modalreducer";



const Modal1 = ()=>{

    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

    return (
        <View style={{ flex: 1 }}>
        <Button title="Show modal" onPress={toggleModal} />
  
        <Modal 
        isVisible={isModalVisible}
        hasBackdrop={true}
        onBackdropPress={()=>{setModalVisible(false)}}
        >
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
  
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
    )
}



export default function Login() {

    const dispatch = useDispatch();

    const { isOpen, content } = useSelector((state) => state.modalReducer);

    const handleShow = () => {
        dispatch(openModal(content + 1));
        console.log(isOpen, content);
    }


    return (<>

        <Text>State : {isOpen}</Text>
        <ScrollView>

        <Modal1 />

            <View style={{ marginHorizontal: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                <Image
                    style={{ height: 201, width: 269 }}
                    source={require('../../../assets/loginpic.png')}
                />
            </View>




            <View style={{ marginLeft: 30 }}>
                <Text style={{ fontSize: 36, fontFamily: 'Poppins-Regular', fontWeight: '500', color: '#1D1617' }}>Login</Text>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    {/* <Icon name="at" size={25} color={'#ADA4A5'}/> */}

                    <Image
                        style={{ width: 20, height: 20, tintColor: '#7B6F72' }}
                        source={require('../../../assets/atthe.png')}
                    />

                    <Text style={{ fontSize: 16, color: '#ADA4A5', marginLeft: 10, fontFamily: 'Poppins-Regular' }}>Email ID</Text>
                </View>

                <View style={{ borderBottomWidth: 2, width: '90%', borderColor: '#DEDEDE', marginTop: 10 }}>

                </View>


                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    {/* <Simple name="lock" size={20} color={'#ADA4A5'}/> */}

                    <Image
                        style={{ width: 17, height: 24, tintColor: '#7B6F72' }}
                        source={require('../../../assets/vector.png')}
                    />


                    <Text style={{ fontSize: 16, color: '#ADA4A5', marginLeft: 10, fontFamily: 'Poppins-Regular' }}>Password</Text>
                </View>

                <View style={{ borderBottomWidth: 2, width: '90%', borderColor: '#DEDEDE', marginTop: 10 }}>

                </View>


                <View style={{ alignItems: 'flex-end', marginRight: 40, marginTop: 10 }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '700', color: '#0049B9' }}>Forgot Password?</Text>
                </View>


                {/* <TouchableOpacity onPress={()=> navigation.navigate('Dpsaverone')} style={{ alignItems: 'center', marginTop: 10, borderRadius: 20, borderWidth: 1, padding: 20, backgroundColor: '#3672E9', borderColor: '#1589FF', width: '90%' }}> */}
                <TouchableOpacity onPress={handleShow} style={{ alignItems: 'center', marginTop: 10, borderRadius: 20, borderWidth: 1, padding: 20, backgroundColor: '#3672E9', borderColor: '#1589FF', width: '90%' }}>
                    <Text style={{ color: '#BFF4FF', fontSize: 18, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Login</Text>
                </TouchableOpacity>

                <View style={{ marginHorizontal: 100, flexDirection: 'row', marginTop: 20 }}>
                    <Text style={{ color: '#818181', fontSize: 13, fontFamily: 'Poppins-Regular', fontWeight: '400' }}>Or,login with....</Text>
                    <Text style={{ marginLeft: 90, color: '#696969', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '400' }}>Skip</Text>
                </View>


                <TouchableOpacity style={{ marginTop: 10, borderRadius: 5, padding: 20, backgroundColor: '#F1F6F7', borderColor: '#1589FF', width: '90%', flexDirection: 'row' }}>
                    <Image
                        style={{ height: 25, width: 25 }}
                        source={require('../../../assets/google.png')}
                    />
                    <Text style={{ color: '#C0C0C0', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500', marginLeft: 50 }}>Login with Google</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ marginTop: 10, borderRadius: 5, padding: 20, backgroundColor: '#F1F6F7', borderColor: '#1589FF', width: '90%', flexDirection: 'row' }}>
                    {/* <Face name="facebook" size={25} color={'#3672E9'} /> */}
                    <Text style={{ color: '#C0C0C0', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500', marginLeft: 50 }}>Login with Facebook</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ marginTop: 10, borderRadius: 5, padding: 20, backgroundColor: '#F1F6F7', borderColor: '#1589FF', width: '90%', flexDirection: 'row' }}>
                    <Image
                        style={{ height: 25, width: 25 }}
                        source={require('../../../assets/insta.png')}
                    />
                    <Text style={{ color: '#C0C0C0', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500', marginLeft: 50 }}>Login with Instagram</Text>
                </TouchableOpacity>




                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', marginRight: 60, marginTop: 10 }}>
                        <Text style={{ color: '#C0C0C0', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>New to insta toolkit?</Text>
                        <Text style={{ color: '#0063E2', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '700', marginLeft: 5 }}>Register</Text>

                    </View>

                </View>

            </View>

            <View style={{ height: 100, width: '100%' }}>
            </View>
        </ScrollView>

    </>);


}

const styles = StyleSheet.create({

});