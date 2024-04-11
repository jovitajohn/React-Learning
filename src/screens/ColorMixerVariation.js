import React,{useReducer} from 'react'
import {Text,View,StyleSheet} from 'react-native'
import ColorMixComponent from '../components/ColorMixComponent'

const reducer = (state,action)=> {
    //state === {red:value,green:value,blue:value}
    //action=== {colorTochange,amount} , this comes from the dispatcher 
    switch(action.colorToChange){
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount <0 ? state : {...state,red: state.red + action.amount} // creating new object with updated value
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount <0 ? state : {...state, green: state.green + action.amount}
        case 'blue':
            return state.blue + action.amount >255 || state.blue + action.amount <0 ? state : {...state, blue: state.blue + action.amount}
        deafult:
        return state
    }
}

const ColorMixerVariation = () => { // with useReducer
   
    const [state,dispatcher] = useReducer(reducer,{red:0,green:0,blue:0})
    const {red,green,blue} = state
    const changeRange = 10

return <View>
    <Text style = {styles.heading}>Color Mixer </Text>
    <ColorMixComponent 
    color = "Red"
    onMore = {()=>  dispatcher({colorToChange:'red',amount :changeRange})}
    onLess = {()=> dispatcher({colorToChange:'red',amount : -1*changeRange})}
    />
    <ColorMixComponent 
    color = "Green"
    onMore = {()=> dispatcher({colorToChange:'green',amount :changeRange})}
    onLess = {()=> dispatcher({colorToChange:'green',amount : -1* changeRange})}
    />
    <ColorMixComponent  
    color = "Blue" 
    onMore= {()=> dispatcher({colorToChange:'blue',amount :changeRange})}
    onLess = {()=> dispatcher({colorToChange:'blue',amount : -1 * changeRange})}
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

export default ColorMixerVariation