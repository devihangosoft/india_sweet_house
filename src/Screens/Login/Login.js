import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image , TextInput, Dimensions } from "react-native";
// import Icon from 'react-native-vector-icons/Ionicons';
// import Face from 'react-native-vector-icons/MaterialCommunityIcons';
// import Simple from 'react-native-vector-icons/SimpleLineIcons';
// import Gicon from 'react-native-vector-icons/Ionicons';

// import axios from 'react-native-axios';
// import Modal from "react-native-modal";

import Modals from "../../Components/Elements/Modal";
import Container from "../../Components/Elements/Container";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { useDispatch, useSelector } from 'react-redux';
import { openModal } from "../../redux/reducers/modalreducer";
import { OrderForm } from "../../Components/Orders/OrderForm";
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/Feather';


export default function Login() {

    const dispatch = useDispatch();
    const handleShow = () => {
        dispatch(openModal(<OrderForm />));
    }

    const [hidePass, sethidePass] = useState(true);

    const windowHeight = Dimensions.get('window').height;

    
    return (<>


        <ScrollView>



            {/* <View style={{ marginHorizontal: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                <Image
                    style={{ height: 201, width: 269 }}
                    source={require('../../../assets/loginpic.png')}
                />
            </View> */}


            <Container>

            <View style={{ height:windowHeight , display:'flex', flexDirection:'column', justifyContent:"center", }}>
            


            
                <Text style={{ fontSize: 30, fontFamily: 'Poppins-Regular', fontWeight: '700', color: '#1D1617', textAlign: "center" , textTransform:"uppercase"}}>Login</Text>
                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', color: '#6C6C6C', textAlign: "center" , marginTop:10, marginBottom:50, }}>Enter your credentials to access your account</Text>

                <Formik
                    initialValues={{ 
                        email: '',
                        password:'',
                     }}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <TextInput
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder="Enter your email"
                                style={styles.Textfield}
                            />
                            <View>

                            <TextInput
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                placeholder="Enter your password"
                                style={styles.Textfield}
                                secureTextEntry={hidePass}
                            >

                            </TextInput>
                            
                            <TouchableOpacity onPress={()=>{sethidePass(!hidePass)}} style={styles.passEye}>
                                <Icon name={hidePass?'eye':'eye-off'} size={20} color="orange" style={{margin:10}} />                                
                            </TouchableOpacity>

                            </View>
                            

                        
                <View style={{ alignItems: 'flex-end', marginTop: 10 }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '600', color: '#FEAF00' }}>Forgot Password?</Text>
                </View>

                <TouchableOpacity onPress={handleShow} style={{ alignItems: 'center', marginTop: 30, marginBottom: 20, borderRadius: 10, padding: 14, backgroundColor: '#FEAF00', }}>
                    <Text style={{ color: '#FFF', fontSize: 18, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Login</Text>
                </TouchableOpacity>


                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ color: '#C0C0C0', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>New user ?</Text>
                        <Text style={{ color: '#FEAF00', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '600', marginLeft: 5 }}>Register</Text>

                    </View>

                </View>
                            
                        </View>
                    )}
                </Formik>


            </View>

            <View style={{ height: 100, width: '100%' }}>
            </View>

            </Container>
        </ScrollView>

    </>);


}

const styles = StyleSheet.create({
    Textfield:{
        fontSize:14,
        borderBottomWidth:1,
        borderColor:'#cdcdcd',
        marginBottom:20
    },
    passEye:{
        position:"relative",
        
        
    }
});