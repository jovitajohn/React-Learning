import React,{useReducer} from 'react'
import {Text,View,StyleSheet, Button} from 'react-native'

const reducer = (state,action) => {
    return {...state,count : state.count + action.amount }
}
const CounterWithReducer = ()=> {
    const [state,dispatcher] = useReducer(reducer,{count:0})

return <View style= {styles.container}>
        <View style= {styles.container}>
            <Button
              title='Increase'
              onPress={()=> dispatcher({amount : 1})}
        />
        </View>
        <View style= {styles.container}>
            <Button
                 title='Decrease'
                 onPress={()=> dispatcher({amount : -1})}
             />
        </View>
        <View style= {styles.container}>
            <Text style ={styles.heading}>Current Count</Text>
            <Text style={styles.result}>{state.count}</Text>
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
export default CounterWithReducer