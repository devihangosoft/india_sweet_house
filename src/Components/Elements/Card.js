import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const LeftContent = props => <Text {...props} icon="folder">1</Text>
const RightContent = props => <Text>hello</Text>

const Card1 = () => (
  // <Card>
  //   <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} 
  //     right={RightContent}
  //   />
  //   {/* <Card.Content>
  //     <Title>Card title</Title>
  //     <Paragraph>Card content</Paragraph>
  //   </Card.Content>
  //   <Card.Content>
  //     <Title>Card title</Title>
  //     <Paragraph>Card content</Paragraph>
  //   </Card.Content> */}
  //   {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
  //   {/* <Card.Actions>
  //     <Button>Cancel</Button>
  //     <Button>Ok</Button>
  //   </Card.Actions> */}
  // </Card>

  <View style={styles.listBox}>

    <View style={styles.leftwithNo}>
    <Text style={styles.snumber}>1.</Text>
    

    <View style={styles.leftSide}>
      <Text style={styles.head}>Title</Text>
      <Text>Sub Title</Text>
    </View>
</View>

    <View style={styles.rightSide}>
      <Text style={styles.edit}>Edit</Text>
      <Text>Delete</Text>
    </View>
  </View>
);

export default Card1;

const styles = StyleSheet.create({
  head: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  listBox: {
    borderWidth:1,
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal:20,
    paddingVertical:15,
    alignItems:'center',
  },
  rightSide:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  edit:{
    marginRight:15,
  },
  leftwithNo:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',    
  },
  snumber:{
    fontSize:20,
    marginRight:10,
  }
})