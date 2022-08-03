import React, {useState} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import Modal from "react-native-modal";
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from "../../redux/reducers/modalreducer"
import { OrderForm } from '../Orders/OrderForm';

const Modals = () => {

  const { isOpen, content } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(openModal(<Text>This is normal Text</Text>));
  };
  
  const hideMOdal = () => {
    dispatch(closeModal());
  };


    return (
        <View style={{ flex: 1 }}>
        {/* <Button title="Show modal" onPress={showModal} /> */}
  
        <Modal 
        isVisible={isOpen}
        hasBackdrop={true}
        onBackdropPress={hideMOdal}
        >
          <View style={{ flex: 1 }}>

            {
              content
            }

          </View>
        </Modal>
      </View>
    );
}

const styles = StyleSheet.create({})

export default Modals;
