// pass array as a props
// 25-9-2024
//rnfe

import { View, Text } from 'react-native'
import React from 'react'
import Childarray from './childarray';

// parent component
const Arraycustompros = () => {
    const items = ["Apples", "Oranges", "Banana", "Mangoes"];

  return (
    <View>
      <Childarray items={items}/>
    </View>
  );
};

export default Arraycustompros;

