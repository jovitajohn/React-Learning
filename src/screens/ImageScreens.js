import React from 'react'
import {Text,StyleSheet,View} from 'react-native'
import ImageItem  from '../components/ImageItem'

const ImageScreen = ()=> {
return <View>
    <Text style = {styles.heading}>Image Screen</Text>

    <ImageItem description ="Sunny Day"
     image = {require('../../assets/sunny.jpeg')}
     feeling= "Warm"/>

    <ImageItem description ="Rainy Day"
    image = {require('../../assets/rainy.jpg')}
    feeling = "Soaked"/>

    <ImageItem description ="Snowy Day"
    image = {require('../../assets/snowy.jpeg')}
    feeling = "Freezing"/>
   
    </View>
}

const styles = StyleSheet.create(
    {
        heading:{
            fontSize:20,
            padding:20,
            backgroundColor: 'purple',
            color: 'white'
        }
    }
)
export default ImageScreen