import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

const Container = (props) => {
    return (
        <ScrollView>
        <View style={{
            padding:15,
        }}>
            {
                props.children
            }
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Container;
