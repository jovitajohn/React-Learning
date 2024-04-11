import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity } from "react-native"

const HomeScreen = ({navigation}) => {//parameter is actually props and we can use only navigation here if we dont need anything else from props. console.log(props.navigation)
  
  return <View>
    <Text style={styles.text}>Twinkling Star</Text>
    <View style = {styles.container}> 
      <Button
        title = "Components Screen"
        onPress = {()=> {
        console.log("Components Pressed")
        navigation.navigate('Components')
      }
    }
    />
    </View>
    <View style = {styles.container}>
      <TouchableOpacity onPress = {()=> {
      console.log("List screen Pressed")
      navigation.navigate('List')
       }}>
      <Text style={styles.clickable}> List Screen</Text>
    </TouchableOpacity>
    </View>
    
    <View style = {styles.container}>
      <Button
        title = "Image Screen"
        onPress = {()=> {
        console.log("ImageScreen Pressed")
        navigation.navigate('Images')
      }}
      />
    </View>
    
    <View style = {styles.container}>
      <Button
        title = "Counter Screen"
        onPress = {()=> {
        console.log("CounterScreen Pressed")
        navigation.navigate('Counter')
      }}
    />
    </View>
    <View style = {styles.container}>
     <Button
        title = "RandomColorScreen Screen"
        onPress = {()=> {
        console.log("RandomColorScreen Pressed")
        navigation.navigate('Colors')
      }}
      />
    </View>
    <View style = {styles.container}>
     <Button
        title = "Color Mixer Screen"
        onPress = {()=> {
        console.log("ColorMixerScreen Pressed")
        navigation.navigate('Mixer')
      }}
      />
    </View>

    <View style = {styles.container}>
     <Button
        title = "Color Mixer with reducer"
        onPress = {()=> {
        console.log("color mixer variation Pressed")
        navigation.navigate('MixerReducer')
      }}
      />
    </View>
    <View style = {styles.container}>
     <Button
        title = "Counter with reducer"
        onPress = {()=> {
        console.log("counter with reducer Pressed")
        navigation.navigate('CounterReducer')
      }}
      />
    </View>
    <View style = {styles.container}>
     <Button
        title = "Text Input Screen"
        onPress = {()=> {
        console.log("TextInputScreen Pressed")
        navigation.navigate('Text')
      }}
      />
    </View>
  </View>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    backgroundColor:'purple',
    padding:20,
    marginBottom:40
    
  },
  clickable:{
    margin:20,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'blue',
    padding:20
  },
  container: {
    margin:10,
    backgroundColor: 'antiquewhite',
},
})

export default HomeScreen;
