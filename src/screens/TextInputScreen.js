import React,{useState} from 'react'
import {Text,StyleSheet,View,TextInput} from 'react-native'

const TextInputScreen= () =>{
    const [state,setText] = useState('')
    const [pass,setPass] = useState('')

return <View>
  <Text style = {styles.heading}>Text Input Screen</Text>

<Text>Enter Name: </Text>

  <TextInput style = {styles.input}
      autoCapitalize='none'
     autoCorrect={false}
     value={state}
     onChangeText={(newText)=> {setText(newText)}}
  />
  <Text> My name is {state}</Text>

  <Text> Enter Password :</Text>
  <TextInput style = {styles.input}
     autoCapitalize='none'
     autoCorrect={false}
     value={pass}
     onChangeText={(newPass)=> {setPass(newPass)}}
  />
  {pass.length< 5 ? <Text>Password must be atleast 5 charecters</Text> : null }

</View>
}

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        padding:20,
        backgroundColor: 'purple',
        color: 'white'
    },
    input: {
        margin : 10,
        borderColor : 'black',
        borderWidth: 1,
    }
})

export default TextInputScreen