import React from 'react';
 import {  TextInput, View } from 'react-native';
 import { Formik } from 'formik';
 import { Button } from 'react-native-paper';
 
 export const OrderForm = props => (
   <Formik
     initialValues={{ email: '' }}
     onSubmit={values => console.log(values)}
     
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View style={{backgroundColor:'#fff',
       borderRadius:10,
       padding:10
       }}>
         <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           placeholder="Enter your name"
         />
         <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           placeholder="Enter city name"
         />
         <TextInput
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           placeholder="Enter user address"
         />
         {/* <Button onPress={handleSubmit} title="Submit" /> */}
         <Button color='#FEAF00' icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
       </View>
     )}
   </Formik>
 );