import { View, Text } from 'react-native'
import React from 'react'
import index from '../app';
import { ScrollView } from 'react-native-web';

// child component
const Childarray = ({items}) => {
  return (
    <ScrollView>
      {items.map((item, index) => (
        <Text key={index} style={{fontSize: 20}}>
            Item: {item} present at this index {index}
        </Text>
      ))};

    </ScrollView>
  );
};

export default Childarray;