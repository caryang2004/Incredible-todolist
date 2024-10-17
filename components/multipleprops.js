// how to pass multiple props
// 25-9-2024
//rnfe

import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';

//Parent component
const Multipleprops = () => {
  return (
    <View>
      <Childcomponent1 title="Increment" count={5} onPress={()=>alert("Button clicked")}/>
    </View>
  );
};

export default Multipleprops;

const Childcomponent1=({title, count, onPress})=>{
    return(
        // borderRadius = border in the corner = the bigger the smooth
        <TouchableOpacity style={{backgroundColor:"coral", padding:10, borderRadius:10}} onPress={onPress}>
            <Text style={{color:"white", fontSize:20}}>{title}{count}</Text>
        </TouchableOpacity>
    );
}