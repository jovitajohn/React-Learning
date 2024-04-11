import React from 'react'
import {Text,View,StyleSheet,Button} from 'react-native'

const ColorMixComponent = ({color,onMore,onLess}) => {
return <View style={styles.mainContainer}>
    <Text style = {styles.label}>{color} </Text>
    <View style={styles.button}> 
        <Button 
        title={`More of ${color}`}
        onPress = {()=> onMore()}
        />
    </View>
    <View style={styles.button}> 
        <Button 
        title={`Less of ${color}`}
        onPress = {()=> onLess()}
        />
    </View>
</View>
}

const styles = StyleSheet.create({
    label: {
        fontSize:20
    },
    button:{
        margin:10
    },
    mainContainer:{
        margin:30
    }
})

export default ColorMixComponent