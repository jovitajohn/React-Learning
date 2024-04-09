import React from 'react'
import {Text,StyleSheet,View,Image} from 'react-native'

const ImageItem = (props)=>{
    console.log(props)
    return <View>
        <Image source={props.image}/>
        <Text>{props.description} I feel {props.feeling}</Text>
    </View>
}

export default ImageItem