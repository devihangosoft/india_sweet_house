import React from 'react';
import { View, StyleSheet } from 'react-native';
//import { OrderForm } from './OrderForm';
import Pagetitle from './Pagetitle';
import OrderList from './OrderList';
import AppHeader from '../Elements/AppHeader';
import Container from '../Elements/Container';

const Orders = ({navigation}) => {

    return (
        <>
            <AppHeader title={"Orders"} navigation={navigation}/>
            <Container>
                <Pagetitle />
                <OrderList navigation={navigation}/>
            </Container>
        </>
    );
}

const styles = StyleSheet.create({})

export default Orders;
