import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, IconButton, List, Divider } from 'react-native-paper';
import AppHeader from '../Elements/AppHeader';
import Container from '../Elements/Container';
import Icon from 'react-native-vector-icons/Feather';
const OrderDetails = ({navigation}) => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
    return (
        <>
            <AppHeader title={"Order Details"} navigation={navigation}/>
            <Container>
                <View style={styles.listBox} >
                    <View style={styles.leftwithNo}>
                        <View style={styles.leftSide}>
                            <Text style={styles.orderid}>Order id : 119999999 </Text>
                            <Text style={styles.head}>Title</Text>
                            <Text style={styles.subtitle}>04-Aug-22 12:43 PM</Text>
                            <View style={styles.smallbtn}>
                                <Text style={styles.btntext}>Accepted</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.rightSide}>
                        <Text>
                            Rs.10000
                        </Text>
                    </View>
                </View>

                <View>
                    <List.Section title="">
                        <List.Accordion
                            title="User Details"
                        >
                            <View style={styles.detail} >
                                <View style={styles.leftwithNo}>
                                    <Text style={styles.subtitle}>Name</Text>
                                </View>
                                <View style={styles.rightSide}>
                                    <Text>
                                        User Name
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.detail} >
                                <View style={styles.leftwithNo}>
                                    <Text style={styles.subtitle}>Email</Text>
                                </View>
                                <View style={styles.rightSide}>
                                    <Text>
                                        xyz@abc.com
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.detail} >
                                <View style={styles.leftwithNo}>
                                    <Text style={styles.subtitle}>Phone</Text>
                                </View>
                                <View style={styles.rightSide}>
                                    <Text>
                                        9999999999
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.detail} >
                                <View style={styles.leftwithNo}>
                                    <Text style={styles.subtitle}>Address</Text>
                                </View>
                                <View style={styles.rightSide}>
                                    <Text>
                                        blore
                                    </Text>
                                </View>
                            </View>
                        </List.Accordion>

                        <List.Accordion
                            title="Status Details"
                        >
                            <View style={styles.product}>
                            <View style={styles.detail} >
                                <View style={styles.leftwithNo}>
                                    <Text >Order Status</Text>
                                </View>
                                <View style={styles.rightSide}>
                                    <View style={styles.smallbtn}>
                                        <Text style={styles.btntext}>New</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.detail} >
                            <Text style={styles.subtitle} >hggvjsvs sdchsdv sdhsdv sdfhsdc sdfcsdbds sdfdsf jsfdsfjsdfs</Text>
                            
                            </View>
                            </View>

                            <Divider/>
                            <View style={styles.product}>
                            <View style={styles.detail} >
                                <View style={styles.leftwithNo}>
                                    <Text >Dispatch Status</Text>
                                </View>
                                <View style={styles.rightSide}>
                                    <View style={styles.smallbtn}>
                                        <Text style={styles.btntext}>New</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.detail} >
                            <Text style={styles.subtitle} >hggvjsvs sdchsdv sdhsdv sdfhsdc sdfcsdbds sdfdsf jsfdsfjsdfs</Text>
                            
                            </View>
                            </View>

                         <Divider/>
                         <View style={styles.product}>
                            <View style={styles.detail} >
                                <View style={styles.leftwithNo}>
                                    <Text >Delivery Status</Text>
                                </View>
                                <View style={styles.rightSide}>
                                    <View style={styles.smallbtn}>
                                        <Text style={styles.btntext}>New</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.detail} >
                            <Text style={styles.subtitle} >hggvjsvs sdchsdv sdhsdv sdfhsdc sdfcsdbds sdfdsf jsfdsfjsdfs</Text>
                            
                            </View>
                            </View>
                        </List.Accordion>

                        <List.Accordion
                            title="Product Details"
                            expanded={expanded}
                            onPress={handlePress}>
                            <View style={styles.product}>
                                <View style={styles.detail} >
                                    <View style={styles.leftwithNo}>
                                        <Text style={styles.subtitle}>Name</Text>
                                    </View>
                                    <View style={styles.rightSide}>
                                        <Text>
                                            Product 1
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.detail} >
                                    <View style={styles.leftwithNo}>
                                        <Text style={styles.subtitle}>Amount</Text>
                                    </View>
                                    <View style={styles.rightSide}>
                                        <Text>
                                            Rs. 100
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.detail} >
                                    <View style={styles.leftwithNo}>
                                        <Text style={styles.subtitle}>Quantity</Text>
                                    </View>
                                    <View style={styles.rightSide}>
                                        <Text>
                                            10
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.detail} >
                                    <View style={styles.leftwithNo}>
                                        <Text style={styles.subtitle}>Total Amount</Text>
                                    </View>
                                    <View style={styles.rightSide}>
                                        <Text>
                                            Rs. 500
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <Divider />

                            <View style={styles.product}>
                                <View style={styles.detail} >
                                    <View style={styles.leftwithNo}>
                                        <Text style={styles.subtitle}>Name</Text>
                                    </View>
                                    <View style={styles.rightSide}>
                                        <Text>
                                            Product 1
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.detail} >
                                    <View style={styles.leftwithNo}>
                                        <Text style={styles.subtitle}>Amount</Text>
                                    </View>
                                    <View style={styles.rightSide}>
                                        <Text>
                                            Rs. 100
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.detail} >
                                    <View style={styles.leftwithNo}>
                                        <Text style={styles.subtitle}>Quantity</Text>
                                    </View>
                                    <View style={styles.rightSide}>
                                        <Text>
                                            10
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.detail} >
                                    <View style={styles.leftwithNo}>
                                        <Text style={styles.subtitle}>Total Amount</Text>
                                    </View>
                                    <View style={styles.rightSide}>
                                        <Text>
                                            Rs. 500
                                        </Text>
                                    </View>
                                </View>
                            </View>

                        </List.Accordion>

                    </List.Section>
                </View>

            </Container>
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
    orderid: {
        color: 'gray',
        fontSize: 14,
        marginBottom: 20
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
    detail: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 5,
        alignItems: 'center',
        marginTop: 0
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
    smallbtn: {
        backgroundColor: 'green',
        display: 'flex',
        width: 80,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 10,
        paddingTop: 1,
        paddingBottom: 4
    },
    btntext: {
        color: 'white',
        textAlign: 'center'
    },
    product: {
        marginBottom: 10,
        marginTop: 10
    }
})

export default OrderDetails;
