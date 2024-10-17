//rnfes

import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';
import { TextInput } from 'react-native-web';

const Customstate = () => {
    const [counter, setCounter]=useState(0);
    const [name, setName]=useState("John");
    const [person, setPerson] = useState({Name: "abc", age: 40, status: "Developer"});
    
    const[input, setInput] = useState();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

    

    const HandlePress=()=>{

        //setCounter(counter+1);

        setPerson({name: "abcd", age: 41, status: "Engineer"})
    }

    const HandlePress1=()=>{
        setName("Shaun");
        // setCounter(counter-1);
        // setCounter(0);
    }

  return (
    <View style={styles.con}>
        {/* counter is initialized to 0 */}

      <Text style={styles.text1}>My name is {person.name} and Age is {person.age } and Status is {person.status} </Text>
      <Text style={styles.text1}>Counter: {counter} </Text>
      <Text style={styles.text1}>Enter name : {name} </Text>
      
      <TextInput style={{
        borderWidth:2, 
        padding:6,
        borderColor:"blue",width:"80%"}} placeholder="" ></TextInput>
      
      <View style={{margin: 20}}>
        <Button title="Increment" onPress={HandlePress}></Button>
        <Button title="Decrement" onPress={HandlePress1}></Button>
      </View>
      <Text style={styles.text1}>You Clicked {counter} times </Text>
    </View>
  );
}

export default Customstate;

const styles = StyleSheet.create({
    con:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black",

    },
    text1:{
        fontSize:20,
        color:"white",
    },
})