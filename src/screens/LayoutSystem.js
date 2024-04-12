import React,{useState} from 'react'
import {Text,View,StyleSheet} from 'react-native'

const LayoutSystem = () => {
return <View>
<Text style={styles.label}> Box  Object</Text>
<View style = {styles.box}>
    <Text> Box Object with margin,padding,border</Text>
</View>

<Text style={styles.label}>Flex Box center</Text>
<View style={styles.flexboxAlign}>
    <Text style={styles.text}> item 1</Text>
    <Text style={styles.text}> item 2</Text>
    <Text style={styles.text}> item 3</Text>
</View>

<Text style={styles.label}> Flex Box direction row</Text>
<View style={styles.flexboxDirection}>
    <Text style={styles.text}>  item 1</Text>
    <Text style={styles.text}> item 2</Text>
    <Text style={styles.text}> item 3</Text>
</View>

<Text style={styles.label}>Flex Box justify  </Text>
<View style={styles.flexJustify}>
    <Text style={styles.text}>  item 1</Text>
    <Text style={styles.text}> item 2</Text>
    <Text style={styles.text}> item 3</Text>
</View>

<Text style={styles.label}>Flex on child </Text>
<View style={styles.flexJustify}>
    <Text style={styles.text}>  item 1</Text>
    <Text style={styles.childFlex}> item 2</Text>
    <Text style={styles.text}> item 3</Text>
</View>

<Text style={styles.label}>Flex selfalign </Text>
<View style={styles.flexboxAlign}>
    <Text style={styles.text}>  item 1</Text>
    <Text style={styles.self}> item 2</Text>
    <Text style={styles.text}> item 3</Text>
</View>

<Text style={styles.label}>Position </Text>
<View style={styles.flexboxAlign}>
    <Text style={styles.text}>  item 1</Text>
    <Text style={styles.position}> item 2</Text>
    <Text style={styles.text}> item 3</Text>
</View>

<Text style={styles.label}>Absolute fill </Text>
<View >
    <Text style={styles.text}>  item 1</Text>
    <Text style={styles.fill}> item 2</Text>
    <Text style={styles.text}> item 3</Text>
</View>

<Text style={styles.label}>Exercise </Text>
<View style={styles.excercise}>
    <Text style={styles.exerciseChildNormal}>  item 1</Text>
    <Text style={styles.exerciseChild}> item 2</Text>
    <Text style={styles.exerciseChildNormal}> item 3</Text>
</View>
</View>
}

const styles = StyleSheet.create({

    label:{
        margin:8,
        fontSize:18
    },
    box:{
        margin: 5,
        padding:10,
        borderWidth:2,
        borderColor: 'purple'
    },
    text:{
        borderWidth:1,
        borderColor:'purple',

    },
    flexboxAlign:{
        alignItems : 'center'//flex-start , flex-end
    },
    flexboxDirection:{
      flexDirection: 'row' // column default
    },
    flexJustify:{
        flexDirection: 'row',
        justifyContent: 'space-between'//flext-start , flex-end, center,space-around
    },
    childFlex:{
        borderWidth:1,
        borderColor:'purple',
        flex:1,
    },
    self:{
        borderWidth:1,
        borderColor:'purple',
        alignSelf:'flex-end',// flex-start, center
    },
    position:{
        borderWidth:1,
        borderColor:'purple',
        position:'absolute',
        top:10,
        start: 100
    },
    fill:{
        ...StyleSheet.absoluteFillObject
    },
    excercise:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    exerciseChild:{
        top : 32,
        borderWidth:1,
        borderColor:'purple',
    },
    exerciseChildNormal:{
        height : 30,
        width : 50,
        borderWidth:1,
        borderColor:'purple',
    },
})
export default LayoutSystem