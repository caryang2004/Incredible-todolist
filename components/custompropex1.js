//rnfe
//25-9-2024

import { View, Text } from 'react-native'
import React from 'react'

// parent component
const Custompropex1 = () => {
  return (
    <View>
        {/* //shift+alt+down to copy a line */}
        <Childcomponent name="John1" status="Software Developer1"></Childcomponent>   
        <Childcomponent name="John2" status="Software Developer2"></Childcomponent>
        <Childcomponent name="John3" status="Software Developer3"></Childcomponent>
        <Childcomponent name="John4" status="Software Developer4"></Childcomponent>
    </View>
  );
};

export default Custompropex1;

// child component
const Childcomponent=(props)=>{
    return(
    <View>
        <Text style={{fontSize:20, fontWeight: 500}}>Name: {props.name}</Text>
        <Text style={{fontSize:30, fontWeight: 600}}>Status: {props.status}</Text>
    </View>
    );
}