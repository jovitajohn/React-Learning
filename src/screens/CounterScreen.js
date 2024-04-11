import React,{useState} from 'react'
import {Text,View,StyleSheet, Button} from 'react-native'

const CounterScreen = ()=> {
    const [counter,setCounter] = useState(0)
return <View style= {styles.container}>
        <View style= {styles.container}>
            <Button
              title='Increase'
              onPress={()=> setCounter(counter+1)}
        />
        </View>
        <View style= {styles.container}>
            <Button
                 title='Decrease'
                 onPress={()=> setCounter(counter-1)}
             />
        </View>
        <View style= {styles.container}>
            <Text style ={styles.heading}>Current Count</Text>
            <Text style={styles.result}>{counter}</Text>
        </View>

</View>
}

const styles = StyleSheet.create(
    {
        container: {
            margin:10,
            padding: 10,
            backgroundColor: 'antiquewhite',
        },
        heading: {
            fontSize:20,
            textAlign: 'center'
        },
        result: {
            fontSize: 30,
            textAlign:'center'
        }
    }
)
export default CounterScreen