import React,{useState} from 'react'
import {Text,View,StyleSheet} from 'react-native'
import ColorMixComponent from '../components/ColorMixComponent'

const ColorMixer = () => { // with useState
    const [red,setRed] = useState(0)
    const [green,setGreen] =useState(0)
    const [blue,setBlue] = useState(0)
    const changeRange = 10

    const setColor =(color,change)=>{
        switch(color){
            case 'red':
                red + change >255 || red + change< 0 ? null : setRed(red+ change)
                return
            case 'green':
                green+ change >255 || green + change < 0 ? null : setGreen(green + change)
                return
            case 'blue':
                blue + change > 255 || blue + change <0 ? null : setBlue(blue+ change)
                return
        }
    }
return <View>
    <Text style = {styles.heading}>Color Mixer </Text>
    <ColorMixComponent 
    color = "Red"
    onMore = {()=>  setColor('red',changeRange)}
    onLess = {()=> setColor('red', -1*changeRange)}
    />
    <ColorMixComponent 
    color = "Green"
    onMore = {()=> setColor('green',changeRange)}
    onLess = {()=> setColor('green', -1 * changeRange)}
    />
    <ColorMixComponent  
    color = "Blue" 
    onMore= {()=> setColor('blue',changeRange)}
    onLess = {()=> setColor('blue', -1 *changeRange)}
    />

    <View style={styles.colorContainer}>
        <View style={{height:150,width: 200, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
    
</View>
}

const styles = StyleSheet.create({
    heading: {
        fontSize:20,
        textAlign: 'center',
        backgroundColor: 'purple',
        color: 'white'
    },
    colorContainer:{
        marginLeft:30,
        marginRight: 30,
        width: 205,
        height: 155,
        backgroundColor: 'black'
    }
})

export default ColorMixer