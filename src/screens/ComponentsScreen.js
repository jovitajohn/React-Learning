import React from 'react'
import { Text,StyleSheet,View } from 'react-native'


const ComponentsScreen = () => {
const msg1 = "This is my react Learning space!"
const msg2 =  <Text> React is not bad to learn !</Text>
    return (<View style = {styles.container}>
        <Text style = {styles.textStyle}> {msg1}</Text> 
        {msg2}
        </View>)
}

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 30,
        color : "purple",
    },
    container: {
        backgroundColor: "lime",
        padding: 20
    }
})

export default ComponentsScreen
