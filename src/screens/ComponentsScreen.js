import React from 'react'
import { Text,StyleSheet } from 'react-native'


const ComponentsScreen = () => {

    return <Text style = {styles.textStyle}> This is the styled text</Text>
}

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 30,
        color : "purple"
    }
})

export default ComponentsScreen
