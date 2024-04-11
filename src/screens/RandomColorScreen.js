import React,{useState} from 'react'
import {Text,View,StyleSheet,Button,FlatList} from 'react-native'

const RandomColorScreen = ()=> {
    const [colors,setColor] = useState([])

return <View style={styles.container}>
    <Text style={styles.heading}> Random Colors</Text>
   
    <Button 
        title ='Get new Color'
        onPress ={()=> {
            setColor([...colors,getRgb()])
        }}
    />
    <FlatList 
    keyExtractor = {item => item}
    data = {colors}
    renderItem={({item}) => {
       return <View style={{height:100,width: 100,backgroundColor : item }}/>
    }}/>

   
</View>
}

const getRgb = ()=>{
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return`rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({
    container: {
        margin:10,
        padding: 10,
        backgroundColor: 'antiquewhite',
    },
    heading: {
        fontSize:20,
        textAlign: 'center'
    },
})

export default RandomColorScreen