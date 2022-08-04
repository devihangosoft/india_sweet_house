import React from 'react';
import { View, StyleSheet } from 'react-native';
import { OrderForm } from './OrderForm';
import Pagetitle from './Pagetitle';
import OrderList from './OrderList';
import AppHeader from '../Elements/AppHeader';
import Container from '../Elements/Container';

const Orders = () => {

    return (
        <>
            <AppHeader title={"Add Order"} />
            <Container>
                <Pagetitle />
                <OrderList />
            </Container>
        </>
    );
}

const styles = StyleSheet.create({})

export default Orders;
