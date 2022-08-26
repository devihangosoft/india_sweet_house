import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Dimensions } from "react-native";
import Container from "../../Components/Elements/Container";
import { useDispatch, useSelector } from 'react-redux';
import { userlogin, userlogout } from "../../redux/reducers/userReducuer";
import { OrderForm } from "../../Components/Orders/OrderForm";
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/Feather';
import { Sidemenu } from "../../Components/Elements/Sidemenu";
import axios from "axios";
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import { Alert, Button, SafeAreaView, SectionList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({ navigation }) {

    const { user, isLogin } = useSelector((state) => state.userReducuer);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const [hidePass, sethidePass] = useState(true);
    const windowHeight = Dimensions.get('window').height;


    const handleLogin = async (e) => {
        e.preventDefault()

        let postData = JSON.stringify({
            username: username,
            password: password,
        });

        console.log(postData)


        try {
            // const response =
            await axios
                .post("http://216.48.182.12:5000/login", postData, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": "3d2bd7f8-406b-4ea3-9adc-fb38755f31c9",
                    },
                })
                .then(async (response) => {
                    dispatch(userlogin(response));
                    const jsonValue = JSON.stringify(response)
                    await AsyncStorage.setItem('user', jsonValue)
                    
                    console.log(response);
                    Dialog.show({
                        type: ALERT_TYPE.SUCCESS,
                        title: 'Success',
                        textBody: 'Congrats! Login Successfully..!!',
                        button: 'close',
                    })

                    setTimeout(() => {
                        navigation.navigate('Orders')
                    }, 2000);
                });

        } catch (error) {
            const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            console.log(resMessage);


            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: 'Error',
                button: 'ok',
                textBody: resMessage,
            })
        }

    };



    const handleEmail = (e) => {
        setUsername(e);

    };

    const handlePassword = (e) => {
        setPassword(e);
    };



    // const checkReduxdata = async () => {
    //     // console.log("data : ", user)
    //     // console.log("login : ", isLogin)

    //     try {
    //         const jsonValue = await AsyncStorage.getItem('user')
    //         let userData =  jsonValue != null ? JSON.parse(jsonValue) : null;
    //         console.log(userData)
    //       } catch(e) {
    //         console.log(e)
    //       }
    // }



    return (<>
        {/* <View style={{ marginHorizontal: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                <Image
                    style={{ height: 201, width: 269 }}
                    source={require('../../../assets/loginpic.png')}
                />
            </View> */}

        <Root>

            <Container>
                <View style={{ height: windowHeight, display: 'flex', flexDirection: 'column', justifyContent: "center", }}>
                    <Text style={{ fontSize: 30, fontFamily: 'Poppins-Regular', fontWeight: '700', color: '#1D1617', textAlign: "center", textTransform: "uppercase" }}>Login</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', color: '#6C6C6C', textAlign: "center", marginTop: 10, marginBottom: 50, }}>Enter your credentials to access your account</Text>


                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={values => console.log(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit }) => (


                            <View>
                                <TextInput
                                    onChangeText={handleEmail}
                                    onBlur={handleBlur('email')}
                                    value={username}
                                    placeholder="Enter your email"
                                    style={styles.Textfield}
                                />
                                <View>
                                    <TextInput
                                        onChangeText={handlePassword}
                                        onBlur={handleBlur('password')}
                                        value={password}
                                        placeholder="Enter your password"
                                        style={styles.Textfield}
                                        secureTextEntry={hidePass}
                                    >
                                    </TextInput>
                                    <TouchableOpacity onPress={() => { sethidePass(!hidePass) }} style={styles.passEye}>
                                        <Icon name={hidePass ? 'eye' : 'eye-off'} size={20} color="orange" style={{ margin: 10 }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'flex-end', marginTop: 10 }}>
                                    {/* <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '600', color: '#FEAF00' }}>Forgot Password?</Text> */}
                                </View>
                                <TouchableOpacity onPress={handleLogin} style={{ alignItems: 'center', marginTop: 30, marginBottom: 20, borderRadius: 10, padding: 14, backgroundColor: '#FEAF00', }}>
                                    <Text style={{ color: '#FFF', fontSize: 18, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Login</Text>
                                </TouchableOpacity>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        {/* <Text style={{ color: '#C0C0C0', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>New user ?</Text> */}
                                        <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
                                            {/* <Text style={{ color: '#FEAF00', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '600', marginLeft: 5 }} >Register</Text> */}
                                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '600', color: '#FEAF00' }}>Forgot Password?</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </Container>
        </Root>
    </>);
}

const styles = StyleSheet.create({
    Textfield: {
        fontSize: 14,
        borderBottomWidth: 1,
        borderColor: '#cdcdcd',
        marginBottom: 20,
        paddingRight: 50
    },
    passEye: {
        position: "absolute",
        right: 0
    }
});