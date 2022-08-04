import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Menu, Divider,Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/reducers/modalreducer';
import { OrderForm } from './OrderForm';

const Pagetitle = () => {
    const [visible, setVisible] = React.useState(false);
    const dispatch = useDispatch();

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);


    const handleShow = () => {
        dispatch(openModal(<OrderForm />));
    }

    

    return (
        <>
            <View style={styles.container}>

                <TouchableOpacity style={styles.addButton} onPress={handleShow}>
                    <Text style={{ color: 'orange', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Add +

                    </Text>
                </TouchableOpacity>

                <View>

                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<TouchableOpacity onPress={openMenu}>
                            <Icon name="filter" size={20} color="orange" />
                        </TouchableOpacity>}>
                        <Menu.Item onPress={() => {  }} title="Item 1" >    
                        
                        </Menu.Item>
                        <Menu.Item onPress={() => { }} title="Item 2" />
                        <Divider />
                        <Menu.Item onPress={() => { }} title="Item 3" />
                    </Menu>
                </View>

            </View>
        </>

    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '700',

    },
    container: {
        display: 'flex',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addButton: {
        width: 150,
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth:1,
        borderColor:'orange',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Pagetitle;
