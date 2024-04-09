import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity } from "react-native"

const HomeScreen = ({navigation}) => {//parameter is actually props and we can use only navigation here if we dont need anything else from props. console.log(props.navigation)
  
  return <View>
    <Text style={styles.text}>Twinkling Star</Text>
    <Button
    title = "Components Screen"
    onPress = {()=> {
        console.log("Components Pressed")
        navigation.navigate('Components')
      }
    }
    />
    <TouchableOpacity onPress = {()=> {
      console.log("List screen Pressed")
      navigation.navigate('List')
    }}>
      <Text style={styles.clickable}> List Screen</Text>
    </TouchableOpacity>

    <Button
    title = "Image Screen"
    onPress = {()=> {
        console.log("ImageScreen Pressed")
        navigation.navigate('Images')
      }
    }
    />
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
  }
})

export default HomeScreen;
